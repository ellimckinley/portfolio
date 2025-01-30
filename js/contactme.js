document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-me");
    
    if (!contactButton) return;

    contactButton.addEventListener("click", function () {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";

        const modalContent = document.createElement("div");
        modalContent.style.background = "#fff";
        modalContent.style.padding = "20px";
        modalContent.style.borderRadius = "20px";
        modalContent.style.textAlign = "center";
        modalContent.style.position = "relative";

        const closeModal = document.createElement("button");
        closeModal.innerHTML = "&times;";
        closeModal.style.position = "absolute";
        closeModal.style.top = "10px";
        closeModal.style.right = "10px";
        closeModal.style.background = "transparent";
        closeModal.style.border = "none";
        closeModal.style.fontSize = "20px";
        closeModal.style.cursor = "pointer";

        closeModal.addEventListener("click", function () {
            document.body.removeChild(modal);
        });

        modalContent.innerHTML = `
            <p style="color:#ff0f0f" >THIS DOES NOT FUNCTION CURRENTLY</p>
            <h2>Contact Me </h2>
            <form id="contactForm">
            <div style="margin-bottom: 10px;">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required style="width: 100%;">
            </div>
            <div style="margin-bottom: 10px;">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required style="width: 100%;">
            </div>
            <div style="margin-bottom: 10px;">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required style="width: 100%;">
            </div>
            <div style="margin-bottom: 10px;">
                <label for="message">What would you like to say?</label>
                <input type="text" id="message" name="message" required style="width: 100%;">
            </div>
            <button type="submit" style="margin-top: 10px; padding: 12px 20px; background: rgba(253, 156, 134, 0.959); color: #fff; border: none; border-radius: 0px; cursor: pointer;">Submit</button>
            <p id="statusMessage" style="margin-top: 10px;"></p>
            </form>
        `;

        modalContent.appendChild(closeModal);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const statusMessage = document.getElementById("statusMessage");

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                message: message
            }, "YOUR_USER_ID")
            .then(function(response) {
                statusMessage.textContent = 'Email sent successfully!';
                statusMessage.style.color = 'green';
                document.body.removeChild(modal);
            }, function(error) {
                statusMessage.textContent = 'Failed to send email. Please try again.';
                statusMessage.style.color = 'red';
            });
        });
    });
});
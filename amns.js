document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector("#menu-icon i"); // Select only the <i> inside #menu-icon
    const slider = document.getElementById("slider");

    menuIcon.addEventListener("click", function() {
        slider.classList.toggle("show"); // Toggle slider visibility
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const residentialDashboard = document.querySelector("#slider ul li:nth-child(2)");

    residentialDashboard.addEventListener("click", function () {
        // Remove existing notification
        const existingNotification = document.getElementById("custom-notification");
        if (existingNotification) existingNotification.remove();

        // Create notification element
        const notification = document.createElement("div");
        notification.id = "custom-notification";
        notification.innerHTML = `
            <span class="notif-icon">✨</span>
            <span class="notif-text">Redirecting...</span>
            <button class="notif-close">&times;</button>
        `;

        // Style the notification
        Object.assign(notification.style, {
            position: "fixed",
            top: "-100px", // Start off-screen
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.85)",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "12px",
            boxShadow: "0px 0px 15px rgba(0, 195, 255, 0.8)", // Glowing effect
            zIndex: "1000",
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            transition: "top 0.5s ease-in-out",
            maxWidth: "80%", // Prevents overflow
            textAlign: "center",
        });

        // Add glowing effect animation
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes glowEffect {
                0% { box-shadow: 0px 0px 10px rgba(0, 195, 255, 0.8); }
                100% { box-shadow: 0px 0px 25px rgba(0, 195, 255, 1); }
            }
            @media (max-width: 480px) {
                #custom-notification {
                    font-size: 12px; /* Smaller font for small screens */
                    padding: 10px; /* Adjust padding */
                    max-width: 90%; /* Allow better fitting */
                }
            }
        `;
        document.head.appendChild(style);

        // Close button styling
        const closeButton = notification.querySelector(".notif-close");
        Object.assign(closeButton.style, {
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "20px",
            cursor: "pointer"
        });

        // Append notification to body
        document.body.appendChild(notification);

        // Slide in the notification
        setTimeout(() => notification.style.top = "10px", 100);

        // Close button functionality
        closeButton.addEventListener("click", function () {
            notification.style.top = "-100px";
            setTimeout(() => notification.remove(), 500);
        });

        // Auto-remove after 3.5 seconds
        setTimeout(() => {
            notification.style.top = "-100px";
            setTimeout(() => notification.remove(), 500);
        }, 3500);

        // Redirect after 3 seconds
        setTimeout(() => window.location.href = "amns.html", 3000);
    });
});


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
        // Remove any existing notification
        const existingNotification = document.getElementById("custom-notification");
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement("div");
        notification.id = "custom-notification";
        notification.innerHTML = `
            <span class="notif-icon">✨</span>
            <span class="notif-text">Redirecting to Residential Dashboard...</span>
            <button class="notif-close">&times;</button>
        `;

        // Style the notification
        notification.style.position = "fixed";
        notification.style.top = "-60px"; /* Start off-screen */
        notification.style.left = "50%";
        notification.style.transform = "translateX(-50%)";
        notification.style.background = "rgba(0, 0, 0, 0.9)";
        notification.style.color = "#fff";
        notification.style.padding = "14px 24px";
        notification.style.borderRadius = "10px";
        notification.style.boxShadow = "0px 0px 15px rgba(0, 195, 255, 0.8)"; /* Glowing effect */
        notification.style.zIndex = "1000";
        notification.style.fontSize = "16px";
        notification.style.fontFamily = "Arial, sans-serif";
        notification.style.display = "flex";
        notification.style.alignItems = "center";
        notification.style.gap = "12px";
        notification.style.transition = "top 0.5s ease-in-out, box-shadow 0.4s ease-in-out";

        // Add glowing effect animation
        notification.style.animation = "glowEffect 1.5s infinite alternate";

        // Create glowing animation (CSS)
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes glowEffect {
                0% {
                    box-shadow: 0px 0px 10px rgba(0, 195, 255, 0.8);
                }
                100% {
                    box-shadow: 0px 0px 25px rgba(0, 195, 255, 1);
                }
            }
        `;
        document.head.appendChild(style);

        // Close button styling
        const closeButton = notification.querySelector(".notif-close");
        closeButton.style.background = "transparent";
        closeButton.style.border = "none";
        closeButton.style.color = "#fff";
        closeButton.style.fontSize = "20px";
        closeButton.style.cursor = "pointer";

        // Append to body
        document.body.appendChild(notification);

        // Slide in the notification
        setTimeout(() => {
            notification.style.top = "20px";
        }, 100);

        // Close button functionality
        closeButton.addEventListener("click", function () {
            notification.style.top = "-60px";
            setTimeout(() => notification.remove(), 500);
        });

        // Auto-remove after 3.5 seconds
        setTimeout(() => {
            notification.style.top = "-60px";
            setTimeout(() => notification.remove(), 500);
        }, 3500);

        // Wait 3 seconds before redirecting
        setTimeout(function () {
            window.location.href = "amns.html";
        }, 3000);
    });
});

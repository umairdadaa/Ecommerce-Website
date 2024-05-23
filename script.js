document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav a");

    function makeLinkActive() {
        let index = sections.length;

        while (--index && window.scrollY + 56 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    window.addEventListener("scroll", makeLinkActive);
    makeLinkActive(); // Initial call to set active link based on current position

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove the #
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: "smooth" });

            // Set the clicked link as active
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

const countdownDate = new Date("2024-06-01T00:00:00").getTime();

    // Update the countdown every second
    const countdown = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();
        
        // Calculate the time remaining
        const distance = countdownDate - now;
        
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the countdown
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
        
        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("days").innerText = 0;
            document.getElementById("hours").innerText = 0;
            document.getElementById("minutes").innerText = 0;
            document.getElementById("seconds").innerText = 0;
            document.querySelector(".time-units-container").innerHTML = "<p class='m-0'>Countdown expired</p>";
        }
    }, 1000);

function comingsoon(){
    Swal.fire("Coming Soon!", "This feature is not available yet. Please check back later.", "info");
}
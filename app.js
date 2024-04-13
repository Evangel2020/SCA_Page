document.addEventListener("DOMContentLoaded", function () {
    // Get references to the content element and toggle buttons
    const content = document.getElementById("listBtn");
    const toggleButton1 = document.getElementById("lightBtn");
    const toggleButton2 = document.getElementById("darkBtn");
    const toggleButton3 = document.getElementById("autoBtn");

    // Add click event listener to each button
    toggleButton1.addEventListener("click", function () {
        content.style.display = content.style.display === "block" ? "none" : "block";
    });

    toggleButton2.addEventListener("click", function () {
        content.style.display = content.style.display === "block" ? "none" : "block";
    });

    toggleButton3.addEventListener("click", function () {
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

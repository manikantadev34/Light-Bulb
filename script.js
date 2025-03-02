document.getElementById("switch").addEventListener("click", function() {
    let bulb = document.getElementById("bulb");
    let body = document.body;
    
    // Toggle the glow effect on the bulb
    bulb.classList.toggle("glow");

    // Change background when bulb is ON
    if (bulb.classList.contains("glow")) {
        body.style.background = "radial-gradient(circle, #ffd700, #ff8c00, #ff4500)";
    } else {
        body.style.background = "linear-gradient(to bottom, #ffdde1, #ee9ca7)";
    }
});

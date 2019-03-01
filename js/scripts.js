/* Hide logo script */
const logoImage = document.getElementById("logo");

// logoImage.style.display = "block";

window.setTimeout(function() {
  logoImage.style.opacity = 0;
}, 1000);

/* Section Button Scripts */
const sectionNames = ["home", "about", "help"]; // <-- Add Buttons Here
const sections = {}, sectionButtons = {};

sectionNames.forEach(function(name){
    console.log(name);
    sections[name] = document.getElementById("section-" + name);
    sectionButtons[name] = document.getElementById("button-" + name);
});

const showSection = function(sectionName)
{
    for (let section in sections) {
        if (section == sectionName)
            sections[section].classList.remove("hidden-section");
        else
            sections[section].classList.add("hidden-section");
    }
}

for (let button in sectionButtons) {
    console.log(button);
    sectionButtons[button].addEventListener("click", function() { showSection(button); });
}

window.setTimeout(function() {
    showSection("home");
}, 3000);


/* Section Button Scripts */
const sectionNames = ["home", "about"]; // <-- Add Buttons Here
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
    sectionButtons[button].onclick = function() { showSection(button); console.log("Click") }
}

window.setTimeout(function(){
    showSection("about");
}, 3000);
const panels = document.querySelectorAll(".panel");
let allH3 = document.getElementsByTagName("h3")

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClass()
        panel.classList.add("active");
    })
});

removeActiveClass = () => {
    panels.forEach((panel => {
        panel.classList.remove("active");
    }))
}
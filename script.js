ref = document.getElementById("ref")

ref.addEventListener("click", () => {
    document.getElementById("head").scrollIntoView({
        behavior: "smooth"
    })
})
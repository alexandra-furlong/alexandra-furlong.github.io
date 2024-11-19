function App() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
    })
}

export default app
document.addEventListener("readystatechange", (evt) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // set the focus

    // 3 listeners clear text

    const form = document.getElementById("searchBar");
    form.addEventListener("submit",
        submitTheSearch);
}
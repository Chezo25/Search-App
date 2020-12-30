import { setSearchFocus } from "./searchBar";

document.addEventListener("readystatechange", (evt) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // 3 listeners clear text

    const form = document.getElementById("searchBar");
    form.addEventListener("submit",
        submitTheSearch);
}

// Procedural "workflow" function
const submiTheSearch = (evt) => {
    evt.preventDefault();
    //delete search results
    //process the search
    setSearchFocus();
};
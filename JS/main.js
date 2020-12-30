import { setSearchFocus } from "./searchBar";
import { getSearchTerm } from "./dataFunctions";

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
    processTheSearch();
    setSearchFocus();
};

//Procedural1
const processTheSearch = async(evt) => {
    //clear the stats line
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
};
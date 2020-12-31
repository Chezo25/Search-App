import { setSearchFocus } from "./searchBar";
import { getSearchTerm } from "./dataFunctions";
import { buildSearchResults } from "./searchResults";
import { retrieveSearchResults } from "./dataFunctions";

document.addEventListener("readystatechange", (evt) => {
    if (evt.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // TODO:3 listeners clear text

    const form = document.getElementById("searchBar");
    form.addEventListener("submit",
        submitTheSearch);
}

// Procedural "workflow" function
const submiTheSearch = (evt) => {
    evt.preventDefault();
    //TODOdelete search results
    processTheSearch();
    setSearchFocus();
};

//Procedural1
const processTheSearch = async(evt) => {
    //TODOclear the stats line
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    //TODO:set stats lines
};
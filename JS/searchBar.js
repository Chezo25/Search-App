export const setSearchFocus = () => {
    document.getElementById("search").focus();
};

export const showclearTextButton = () => {
    const search = document.getElementById("search");
    const clear = document.getElementById("clear");
    if (search.value.length) {
        clear.classList.remove("none");
        clear.classList.add("flex");
    } else {
        clear.classList.add("none");
        clear.classList.remove("flex");
    }
};

export const clearSearchText = (evt) => {
    evt.preventDefault();
    document.getElementById("search").value = "";
    const clear = document.getElementById("clear");
    clear.classList.add("none");
    clear.classList.remove("flex");
    setSearchFocus();
};

export const clearPushListner = (evt) => {
    if (evt.keyCode === "Enter" || evt.key === " ") {
        evt.preventDefault();
        document.getElementById("clear").click();
    }
};
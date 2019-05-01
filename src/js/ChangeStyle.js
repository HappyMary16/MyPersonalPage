function changeStyle() {

    let changeStyleButton = document.getElementById("changeStyleButton");

    let element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");

    if (changeStyleButton.value === "dark") {

        changeStyleButton.value = "light";
        element.setAttribute("href", "src/css/darkStyle.css");
    } else {

        changeStyleButton.value = "dark";
        element.setAttribute("href", "src/css/lightStyle.css");
    }

    document.getElementsByTagName("head")[0].appendChild(element);
}
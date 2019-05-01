const styleButton = document.getElementById('changeStyleButton');

styleButton.addEventListener('click',  () => {

    let element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");

    if (styleButton.value === "dark") {

        styleButton.value = "light";
        element.setAttribute("href", "css/darkStyle.css");
    } else {

        styleButton.value = "dark";
        element.setAttribute("href", "css/lightStyle.css");
    }

    document.querySelector("head").appendChild(element);
});
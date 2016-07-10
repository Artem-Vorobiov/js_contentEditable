function makeEditable(div) {
    div.style.border = "3px solid orange";
    div.style.boxShadow = "3px 3px 3px 1px black";
    div.style.padding = "50px";
    div.contentEditable = true;
    div.style.textAlign = "center";
}

function makeReadOnly(div) {
    div.style.border = "none";
    div.style.boxShadow = "none";
    div.style.padding = "50px";
    div.contentEditable = false;
    div.style.textAlign = "center";
}
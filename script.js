var a = 0

function ee() {
    a = a + 1;
    if (a == 10) {
        notsus()
    }
}

function notsus() {
    notsuselement = document.createElement("iframe");
    notsuselement.src = "/sus";
    notsuselement.style.border = "0";
    notsuselement.sandbox = "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation";
    notsuselement.style.top = "0";
    notsuselement.style.left = "0";
    notsuselement.style.position = "fixed";
    notsuselement.style.width = "100%";
    notsuselement.style.height = "100%";
    document.querySelector("body").appendChild(notsuselement);
}
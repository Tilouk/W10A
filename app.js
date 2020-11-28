let secondPTag = document.queryselector("p");
secondPTag.style.fontsize = "2rem";

let allPTags = document.querySelectorAll("p");
for(var index = 0; index<allPTags.length; index++) {
    allPTags[index].style.color = "green"
}

let headerTitle = document.getElementById("header-title");
hearderTitle.style.color = "green";

let footerLinks = document.getElementByIdClassName("footer-links");
for(var index = 0; index<footarLinks.length; index++) {
    footerLinks[index].style.color = "cyan";
}

let images = document.getElementsByTagName("img");
for(var index = 0; index<images.length; index++) {
    images[index].style.width = "70%";
}

let newPTag = document.createElement("p");
newPTag.innerHTML = "Injection!";
document.getElementById("body-container").append(newTag);

let body-container = document.getElementById("body-container");
body-container.remove(body-container);

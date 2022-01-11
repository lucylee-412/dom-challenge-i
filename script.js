// 1) Select the section with an id of container without using querySelector.
const containerId = document.getElementById("container");
console.log(containerId)

// 2) Select the section with an id of container using querySelector.
const containerQuery = document.querySelector("#container");
console.log(containerQuery)

// 3) Select all of the list items with a class of "second".
const secondListItem = document.getElementsByClassName("second");
console.log(secondListItem)

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdListItem = document.querySelector("ol .third");
console.log(thirdListItem)

// 5) Give the section with an id of container the text "Hello!".
containerId.innerText = "Hello!";

// 6) Add the class main to the div with a class of footer.
// Source: https://stackoverflow.com/a/507157
const footer = document.querySelector(".footer");
footer.classList.add("main")

// 7) Remove the class main on the div with a class of footer.
footer.classList.remove("main")

// 8) Create a new li element.
const fourthItem = document.createElement("li");

// 9) Give the li the text "four".
fourthItem.innerText = "four";

// 10) Append the li to the ul element.
const unorderedList = document.querySelector("ul")
unorderedList.appendChild(fourthItem)

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const orderedList = document.querySelector("ol")
const oListItems = orderedList.children;

for(let i = 0; i < oListItems.length; i++) {
    oListItems[i].style.backgroundColor = "green";
}

// 13) Remove the div with a class of footer.
footer.remove()
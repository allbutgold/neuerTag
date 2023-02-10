// access first element
const myArticle = document.querySelector("#myArticle");

const infoTexts = document.querySelectorAll(".infoText");

infoTexts.forEach((text) => {
    console.log(text);
    text.style.backgroundColor = "yellow";
})

const infoTextsbtClassName = document.getElementsByClassName("infoText");
console.log(infoTextsbtClassName);

for (let text of infoTextsbtClassName) {
    console.log(text);
}

// with array.from() we can conver iterables to arrays
const infoTextsByClassNameArray = Array.from(infoTextsbtClassName);
console.log(infoTextsByClassNameArray);

infoTextsByClassNameArray.forEach(text => {
    text.style.backgroundColor = "teal";
    text.style.color = "white";
    text.style.fontFamily = "helvetica";
});

infoTextsbtClassName.addEventListener("mouseover", () => {
    classlist.toggle.style("backgroundColor")
})



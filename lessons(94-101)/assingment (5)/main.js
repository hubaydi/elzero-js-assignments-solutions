const ele = document.body.children;
const eleToArray = Array.from(ele)

eleToArray.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("This Is" + ' ' + element.nodeName); // You can also use element.tagName
  })
}) 
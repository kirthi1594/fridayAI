let data = [];
let gridSection = document.getElementById("gridSection");
async function fetchData() {
  try {
    const resp = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    data = await resp.json();
    displayData();
    console.log("DATA: ", data);
  } catch (error) {
    console.log(error);
  }
}
function displayData() {
  data.forEach((el) => {
    const div = document.createElement("div");
    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");
    img.src = el.image;
    const h2 = document.createElement("h2");
    h2.innerHTML = "Name: "+el.title;
    h2.setAttribute("class","title")
    const h1 = document.createElement("h1");
    h1.innerHTML = "Price: "+el.price;
    const p = document.createElement("p");
    p.setAttribute("class","description")
    p.innerHTML = "Description: "+el.description.substring(0,100)+"...";
    imgWrapper.append(img)
    div.append(imgWrapper, h2, h1, p);
    gridSection.append(div);
  });
}
fetchData();

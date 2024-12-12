const imgUrlsArr = [
  "https://raw.githubusercontent.com/agkatia/agkatia.github.io/refs/heads/main/images/p1.png",
  "https://raw.githubusercontent.com/agkatia/agkatia.github.io/refs/heads/main/images/p2.png",
  "https://raw.githubusercontent.com/agkatia/agkatia.github.io/refs/heads/main/images/p3.png"
];

const articleContainer = document.getElementById("article-container");

articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;

let imgIndex = 0;

function previousImg() {
  imgIndex = (imgIndex > 0) ? imgIndex - 1 : imgUrlsArr.length - 1;
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}

function nextImg() {
  imgIndex = (imgIndex < imgUrlsArr.length - 1) ? imgIndex + 1 : 0;
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}

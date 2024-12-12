const imgUrlsArr = [
  "https://github.com/agkatia/agkatia.github.io/blob/main/images/p1.png",
  "https://github.com/agkatia/agkatia.github.io/blob/main/images/p2.png",
  "https://github.com/agkatia/agkatia.github.io/blob/main/images/p3.png"
];

const articleContainer = document.getElementById("article-container");

articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;

let imgIndex = 0;

function previousImg() {
  if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
    imgIndex--;
  } else {
    imgIndex = imgUrlsArr.length - 1;
  }
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}

function nextImg() {
  if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
}

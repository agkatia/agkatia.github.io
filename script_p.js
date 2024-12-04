const ImgElements = document.querySelectorAll('.image-carousel img');
const imgCount = ImgElements.length;
const nextBtn = document.querySelector('.image-carousel .right-arrow');
const prevBtn = document.querySelector('.image-carousel .left-arrow');
let currentImg, currentDot;
let imgIndex;
const dotContainer = document.querySelector('.image-carousel .dots');

function initialiseCarousel() {
    //make all images except the first one hidden
    ImgElements.forEach(element => {
        element.classList.add('hidden-img');
    });
    currentImg = ImgElements[0];
    imgIndex = 0;
    currentImg.classList.remove('hidden-img');

    //create dots and select only the first one
    for (let i = 0; i < imgCount; i++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dotContainer.appendChild(dot);
    }
    currentDot = dotContainer.querySelector('.dot');
    currentDot.classList.add('selected');
}
initialiseCarousel();

const allDots = dotContainer.querySelectorAll('.dot');

function updateImg() {
    currentImg.classList.add('hidden-img');
    currentImg = ImgElements[imgIndex];
    currentImg.classList.remove('hidden-img');
}
function updateDot() {
    currentDot.classList.remove('selected');
    currentDot = allDots[imgIndex];
    currentDot.classList.add('selected');
}

function changeToRightImage(moveRight = true) {
    if (moveRight) {
        imgIndex = (imgIndex + 1) % imgCount;
    } else {
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex += imgCount;
        }
    }

    updateImg();
    updateDot();
}

nextBtn.addEventListener('click', e => {
    e.preventDefault();
    changeToRightImage();

});

prevBtn.addEventListener('click', e => {
    e.preventDefault();
    changeToRightImage(false);

})

allDots.forEach(dot => {
    dot.addEventListener('click', e => {
        let dotIndex = 0;
        let dotElement = e.target;
        while (!dotElement.isEqualNode(allDots[dotIndex])) {
            dotIndex++;
        }
        console.log(dotIndex);
        imgIndex = dotIndex;
        updateImg();
        updateDot();
    });
});

setInterval(changeToRightImage, 4000);

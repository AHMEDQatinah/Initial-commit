document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.remove("change");
    });
  });
});

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});


var images1 = [
  "img/1957 Mercedes 300SL Gullwing/1.jfif",
  "img/1957 Mercedes 300SL Gullwing/2.jpg",
  "img/1957 Mercedes 300SL Gullwing/3.jfif",
  "img/1957 Mercedes 300SL Gullwing/4.jfif",
  "img/1957 Mercedes 300SL Gullwing/5.jfif",
  "img/1957 Mercedes 300SL Gullwing/6.jpg",
];
var index = 0;
function changeImages1() {
  imageSlideShow1.src = images1[index];
  if (index < images1.length - 1) {
    index++;
  } else {
    index = 0;
  }
  setTimeout("changeImages1()", 1200);
}
changeImages1();


var images3 = [
  "img/Porsche-550-Spyder-with-Gold-Plated-Engine/1.jfif",
  "img/Porsche-550-Spyder-with-Gold-Plated-Engine/2.jfif",
  "img/Porsche-550-Spyder-with-Gold-Plated-Engine/3.jfif",
  "img/Porsche-550-Spyder-with-Gold-Plated-Engine/4.jfif",
  "img/Porsche-550-Spyder-with-Gold-Plated-Engine/5.jfif",
  "img/Porsche-550-Spyder-with-Gold-Plated-Engine/6.jfif",
];

var index = 0;

function changeImages3() {
  imageSlideShow3.src = images3[index];
  if (index < images3.length - 1) {
    index++;
  } else {
    index = 0;
  }
  setTimeout("changeImages3()", 1200);
}
changeImages3();
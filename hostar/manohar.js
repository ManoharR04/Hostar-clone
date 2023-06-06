let movies = [
  {
    name: "Doctor Strange in the Multiverse of Madness",
    des:
      "When the Multiverse is unlocked,Doctor Strange must unlist help from old and new allies in order to confront a surprising adversary.",
    image: "images/Doc-Strange.png"
  },
  {
    name: "Chhichhore",
    des:
      "Divided by time,united by tragic incident.In bittersweet reunion,seven middle-aged friends take a walk down the memory line atleast expected place.",
    image: "images/Chhichhore.png"
  },
  {
    name: "Baahubali 2: The Conclusion",
    des:
      "Why did kattappa kill Amarendra Baahubali? Unveil the mystery and many more secrets that lie in the depths of the Mahishmati kingdom.",
    image: "images/Baahubali2.png"
  },
  {
    name: "K.G.F",
    des:
      "Set in the 70s,an ambitious young man sets out of fullfill a promise he made to his dying mother by bringing the owner of a corrupt gold mine to book.",
    image: "images/KGF.png"
  },
  {
    name: "Shang-Chi and The Legend of the ten Rings",
    des:
      "Shang-Chi, a martial arts master, must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings oraganization.",
    image: "images/Shang-chi.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // Create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching of all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up the images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // Setting the classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video card animation
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//Card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});

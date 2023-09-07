let movies = [
    {
      name: "Welcome To DarkRoast Cafe",
      des:
        "Welcome to the authentic coffee experience with DarkRoast Coffee and get various offers and deals!",
      image: "img/slider 2.jpg"
    },
    {
      name: "Subscription",
      des:
        "Subscribe to our newsletter for new arrivals and discounts!",
      image: "img/slider 1.jpg"
    },
    {
      name: "Free Delivery",
      des:
        "Free delivery on all orders over $50 or more, & for all subscriptions!",
      image: "img/slider 3.jpg "
    },
    {
      name: "Love Coffee ?",
      des:
        "Best place for all the coffee lovers to get all kinfs of coffee delivered to their doorstep.",
      image: "img/slider 4.jpeg"
    },
    {
      name: "Ready To Drink",
      des:
        "Shop our ready to drink collection with 5 new flavours including macha latte, mocha, lavender macha,vanilla coffee & more!",
      image: "img/slider 5.jpeg"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; 
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  

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
  
  //Video Cards
  
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
  
  // //card sliders
  
  // let cardContainers = [...document.querySelectorAll(".card-container")];
  // let preBtns = [...document.querySelectorAll(".pre-btn")];
  // let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  // cardContainers.forEach((item, i) => {
  //   let containerDimensions = item.getBoundingClientRect();
  //   let containerWidth = containerDimensions.width;
  
  //   nxtBtns[i].addEventListener("click", () => {
  //     item.scrollLeft += containerWidth - 200;
  //   });
  
  //   preBtns[i].addEventListener("click", () => {
  //     item.scrollLeft -= containerWidth + 200;
  //   });
  // });
  
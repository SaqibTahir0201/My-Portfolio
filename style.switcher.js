// $ TOGGLE STYLE SWITCHER:

const styleSwitchToggle = document.querySelector(".style_switcher_toggler");

styleSwitchToggle.addEventListener("click", () => {
  document.querySelector(".style_switcher").classList.toggle("open");
});

//$  HIDE STYLE SWITCHER ON SCROLL :

window.addEventListener("scroll", () => {
  if (document.querySelector(".style_switcher").classList.contains("open")) {
    document.querySelector(".style_switcher").classList.remove("open");
  }
});

//$ THEME COLORS :

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });

  //$ RANDOM COLOR GENERATOR
  if (color === "random") {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.setProperty("--skin-color", randomColor);
  }
}

// $ LIGHT AND DARK MODE :

const dayNight = document.querySelector(".day_night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// Shery.imageEffect(".imgg", {
//   style: 2 /*OR 5 for different variant */,
//   config: {
//     a: { value: 2, range: [0, 30] },
//     b: { value: -0.9, range: [-1, 1] },
//     zindex: { value: 5 },
//     onMouse: { value: 1 },
//   },
// });
// $ TOGGLE STYLE SWITCHER:
const styleSwitchToggle = document.querySelector(".style_switcher_toggler");
const styleSwitcher = document.querySelector(".style_switcher");

styleSwitchToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// $ HIDE STYLE SWITCHER ON SCROLL OR TOUCH:

function closeStyleSwitcher() {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
}

window.addEventListener("scroll", closeStyleSwitcher);
document.addEventListener("touchstart", closeStyleSwitcher);

//$ THEME COLORS :

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  if (color === "random") {
    // Generate random color
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * (100 - 70) + 70); // 70-100%
    const lightness = Math.floor(Math.random() * (70 - 40) + 40); // 40-70%
    const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    document.documentElement.style.setProperty("--skin-color", randomColor);
    
    // Disable all preset styles
    alternateStyle.forEach((style) => {
      style.setAttribute("disabled", "true");
    });
  } else {
    // Reset custom property if a preset color is selected
    document.documentElement.style.removeProperty("--skin-color");
    
    // Enable/disable styles based on selection
    alternateStyle.forEach((style) => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
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
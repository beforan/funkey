const randomByte = () => Math.random() * 255;

const randomComplementaryColors = () => {
  const color1 = Array.from({ length: 3 }).map((_) => randomByte());
  const color2 = color1.map((v) => 255 - v);

  return [color1, color2];
};

const getRgbaColorString = (r, g, b) => `rgba(${r}, ${g}, ${b},1)`;

document.addEventListener("keydown", (e) => {
  e.preventDefault(); // This should stop some annoyances with F keys or other bound browser behaviour, hopefully.
  
  const [bg, fg] = randomComplementaryColors();

  const container = document.getElementById("container");
  const screen = document.getElementById("screen");

  container.style.backgroundColor = getRgbaColorString(...bg);
  screen.style.color = getRgbaColorString(...fg);
  screen.classList.remove("init")
  screen.innerHTML = e.key;
});

document.addEventListener('contextmenu', e => e.preventDefault());

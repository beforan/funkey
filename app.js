const randomByte = () => Math.random() * 255;

const randomComplementaryColors = () => {
  const color1 = Array.from({ length: 3 }).map((_) => randomByte());
  const color2 = color1.map((v) => 255 - v);

  return [color1, color2];
};

const getRgbaColorString = (r, g, b) => `rgba(${r}, ${g}, ${b},1)`;

document.addEventListener("keydown", (e) => {
  const [bg, fg] = randomComplementaryColors();

  const container = document.getElementById("container");
  const screen = document.getElementById("screen");

  container.style.backgroundColor = getRgbaColorString(...bg);
  screen.style.color = getRgbaColorString(...fg);
  screen.innerHTML = e.key;
});

// TODO: disable right click and if possible, selecting text



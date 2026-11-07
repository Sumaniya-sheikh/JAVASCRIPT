const btn = document.querySelector("#btn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

btn.addEventListener("click", () => {
  [img1.src, img2.src] = [img2.src, img1.src];
});
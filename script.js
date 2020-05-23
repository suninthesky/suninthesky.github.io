function bg() {
  const n = document.querySelector("canvas"),
    e = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight < 460 ? 460 : window.innerHeight,
      cell_size: 100,
      x_colors: "Oranges",
    });
  return document.body.replaceChild(e.canvas(), n);
}
document.addEventListener("DOMContentLoaded", function () {
  bg();
}),
  (window.onresize = function (n) {
    bg();
  });

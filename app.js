let imgs = document.getElementById("images");
let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");

change1.addEventListener("click", () => {
  setTimeout(() => {
    imgs.src =
      "https://cdn.discordapp.com/attachments/1151828801391710349/1151830411283013683/PRINCIPALE.png";
  }, 500);
});
change2.addEventListener("click", () => {
  setTimeout(() => {
    imgs.src =
      "https://cdn.discordapp.com/attachments/1151828801391710349/1151830411928932402/PRINCIPALE3.png";
  }, 500);
});
change3.addEventListener("click", () => {
  setTimeout(() => {
    imgs.src =
      "https://cdn.discordapp.com/attachments/1151828801391710349/1151830411610173521/PRINCIPALE2.png";
  }, 500);
});
document.body.querySelector(".change1").click();
$(".circle").click(function (e) {
  $(".circle").removeClass("active");
  $(this).addClass("active");
});

var modalButton = document.getElementById("modalButton");
var modal = document.getElementById("myModal");

var closeBtn = document.getElementsByClassName("close")[0];

modalButton.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

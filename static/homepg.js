// You can add interactive features with JavaScript, like redirecting to a different page on button clicks
document
  .querySelector(".teleconsultation button")
  .addEventListener("click", function () {
    window.location.href = "/teleconsultation";
  });

document
  .querySelector(".doctor-visit button")
  .addEventListener("click", function () {
    window.location.href = "/doctorvisit";
  });
document.getElementById("search-btn").addEventListener("click", function () {
  const searchQuery = document.getElementById("search").value;
  alert("You searched for: " + searchQuery);
});

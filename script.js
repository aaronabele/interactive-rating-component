const btn = document.querySelector("#btn-submit");
const rating = document.querySelector("#input-rating");
const radio1 = document.querySelector("#rating1");
const radio2 = document.querySelector("#rating2");
const radio3 = document.querySelector("#rating3");
const radio4 = document.querySelector("#rating4");
const radio5 = document.querySelector("#rating5");

document.body.style.setProperty("--state", "none");

btn.addEventListener("click", () => {
  if (
    radio1.checked ||
    radio2.checked ||
    radio3.checked ||
    radio4.checked ||
    radio5.checked
  ) {
    document.body.style.setProperty("--state", "");
    if (radio1.checked) {
      rating.innerText = radio1.value;
    } else if (radio1.checked) {
      rating.innerText = radio2.value;
    } else if (radio3.checked) {
      rating.innerText = radio3.value;
    } else if (radio4.checked) {
      rating.innerText = radio4.value;
    } else if (radio5.checked) {
      rating.innerText = radio5.value;
    }
  } else {
    alert("Please select a rating");
  }
});

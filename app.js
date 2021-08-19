const question = document.querySelectorAll(".question");

function clickHandler(e) {
  if (e.target.classList[1] === "active") {
    e.target.classList.remove("active");
    return;
  }

  if (e.target.classList.value === "question") {
    question.forEach((divElement) => divElement.classList.remove("active"));
    e.target.classList.add("active");
  }
}

addEventListener("click", clickHandler);

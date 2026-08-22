const questions = document.querySelectorAll(".faqQuestion");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("span");

    answer.classList.toggle("active");
    if (answer.classList.contains("active")) {
      icon.textContent = "x";
    } else {
      icon.textContent = "+";
    }
  });
});

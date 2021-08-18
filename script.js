const RESULT = document.querySelector(".result");
const BUTTONS = document.querySelectorAll("button");

BUTTONS.forEach((button) => {
  button.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "C":
        RESULT.innerText = "";
        break;
      case "←":
        if (RESULT.innerText) {
          RESULT.innerText = RESULT.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          RESULT.innerText = eval(RESULT.innerText);
        } catch {
          RESULT.innerText = "Error";
        }
        break;
      default:
        RESULT.innerText += e.target.innerText;
    }
  });
});

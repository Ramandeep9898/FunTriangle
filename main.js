const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumofAngle(angle1, angle2, angle3) {
  const sumofAngles = angle1 + angle2 + angle3;
  return sumofAngles;
}

function isTriangle() {
  const sumofAngles = calculateSumofAngle(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumofAngles === 180) {
    outputE1.innerText = "yay, the angle form a triangle";
  } else {
    outputE1.innerText = "oh oh! the angle don't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);

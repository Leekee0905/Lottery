const makeLotteryNumbers = () => {
  const numbersPosition = document.querySelector("#numbers");
  const randomNumbers = [];
  while (randomNumbers.length < 6) {
    const number = Math.floor(Math.random() * 45) + 1;
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }
  const list = randomNumbers.sort((a, b) => a - b).join(" ");
  const numbersList = document.createElement("li");
  numbersList.setAttribute("class", "lottery-numbers");
  numbersList.textContent = list;
  numbersPosition.appendChild(numbersList);
};

const resetList = () => {
  const createdList = document.getElementById("numbers");
  if (createdList.firstChild === null) {
    alert("생성된 번호가 없습니다.");
  }
  while (createdList.firstChild) {
    createdList.removeChild(createdList.firstChild);
  }
};

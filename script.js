const inputFields = document.querySelectorAll(".card__input");
const inputDay = document.querySelector(`.card__input[name="day"]`);
const inputMonth = document.querySelector(`.card__input[name="month"]`);
const inputYear = document.querySelector(`.card__input[name="year"]`);
const resultValue = document.querySelector(".card__resultValue");
const calcBtn = document.querySelector(".card__button");
const today = new Date();

const calculateAge = (day, month, year) => {
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDay() < birthDate.getDay()))
    age--;

  return age;
};

const onclickHandler = () => {
  const age = calculateAge(inputDay.value, inputMonth.value, inputYear.value);
  resultValue.innerHTML = age;
};

calcBtn.addEventListener("click", onclickHandler);

const inputFields = document.querySelectorAll(".card__input");
const inputDay = document.querySelector(`.card__input[name="day"]`);
const inputMonth = document.querySelector(`.card__input[name="month"]`);
const inputYear = document.querySelector(`.card__input[name="year"]`);
const resultValue = document.querySelector(".card__resultValue");
const calcBtn = document.querySelector(".card__button");
const today = new Date();

const validateDay = (day) => {
  if (day && day > 0 && day <= 31) {
    return true;
  }
};

const validateMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};

const validateYear = (year) => {
  if (year && year > 0 && year <= today.getFullYear()) {
    return true;
  }
};

const validateDate = (dayInput, monthInput, yearInput) => {
  let validDate = [false, false, false];

  if (!validateDay(dayInput.value)) {
    dayInput.classList.add("card__input--error");
  } else {
    validDate[0] = true;
    dayInput.classList.remove("card__input--error");
  }

  if (!validateMonth(monthInput.value)) {
    monthInput.classList.add("card__input--error");
  } else {
    validDate[1] = true;
    monthInput.classList.remove("card__input--error");
  }

  if (!validateYear(yearInput.value)) {
    yearInput.classList.add("card__input--error");
  } else {
    validDate[2] = true;
    yearInput.classList.remove("card__input--error");
  }

  return validDate.every((item) => item === true);
};

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

  if (!validateDate(inputDay, inputMonth, inputYear)) {
    resultValue.textContent == "--";
    return;
  }

  resultValue.innerHTML = age;
};

inputFields.forEach((input) => {
  input.addEventListener("keydown", (pressed) => {
    pressed.key === "Enter" && onclickHandler();
  });
});

calcBtn.addEventListener("click", onclickHandler);

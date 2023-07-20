const hero = document.querySelector(".section-hero");
const modalEl = document.querySelector(".section-modal");
const formEl = document.querySelector(".form-modal");
const inputEl = document.querySelector("#user-name");
const heroTitle = document.querySelector(".hero-title");
const heroItem = document.querySelector(".hero-item");
const userDate = document.querySelector(".user-date");
const heroYear = document.querySelector(".hero-year");
const heroMonth = document.querySelector(".hero-month");
const heroDay = document.querySelector(".hero-day");
const heroHour = document.querySelector(".hero-hour");
const heroMinut = document.querySelector(".hero-minut");
const heroSecond = document.querySelector(".hero-second");

let inputName;
let inputValue;

inputEl.addEventListener("input", (e) => {
  inputName = inputEl.value;
  console.log(inputName);
});

heroItem.addEventListener("input", (e) => {
  inputValue = heroItem.value;
  let dateString = new Date($(this).val());
  console.log(dateString);
});

hero.classList.add("hidden");

formEl.addEventListener("submit", (e) => {
  heroTitle.textContent = inputName;
  e.preventDefault();
  let inputDateNow = userDate.value;
  console.log(inputDateNow);
  let userIn = new Date(inputDateNow).getTime();
  hero.classList.add("hidden");

  const time = setInterval(function () {
    const now = new Date().getTime();
    const nowTime = userIn - now;
    console.log(nowTime);
        const year = Math.floor((nowTime / (1000 * 60 * 60 * 24  * 365))  )
    const month = Math.floor((nowTime / (1000 * 60 * 60 * 24 * 30))%12)
    const day = Math.floor(((nowTime /(1000 * 60 * 60 * 24 * 30)) % (1000 * 60 * 60 * 24))%30);
    const hour = Math.floor(
      (nowTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minut = Math.floor((nowTime % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((nowTime % (1000 * 60)) / 1000);
    heroYear.innerHTML = year
    heroHour.innerHTML = hour;
    heroSecond.innerHTML = second;
    heroMinut.innerHTML = minut;
    heroDay.innerHTML = day;
    heroMonth.innerHTML = month;

    if (nowTime < 0) {
      clearInterval(time);
    }
  }, 1000);

  hero.classList.remove("hidden");
  modalEl.classList.add("hidden");
  // // console.log(nowTime);
  // let cont = '';

  // const secondEl = Math.floor(nowTime / 1000)
  // const second = secondEl % 60

  // if (second > 0) {
  //   cont += `${second} sekund`;
  // }

  // const minutEl = Math.floor(secondEl / 60)
  // const minut = minutEl % 60

  // if (minut > 0) {
  //   formattedDiffTime += `${minut} daqiqa `;
  // }

  // const hourEl = Math.floor(minutEl / 60)
  // const hour = hourEl % 24

  // if (hour > 0) {
  //   formattedDiffTime += `${hour} soat `;
  // }

  // const dayEl = Math.floor(hourEl / 24)

  // if (day > 0) {
  //     formattedDiffTime += `${day} kun `;
  //   }

  //   heroDay.textContent = day;
  //   heroHour.textContent = hour;
  //   heroMinut.textContent = minut;
  //   heroSecond.textContent = second ;
});

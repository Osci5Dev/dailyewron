const countdown_jazda = () => {
  const countDate = new Date("December 31, 2023 23:59:59").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDays = Math.floor(gap / days);
  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  const countdownElement = document.getElementById("countdown_jazda");
  if (gap > 0) {
    countdownElement.innerHTML = `
      <div>${textDays}<span>Dni</span></div>
      <div>${textHours}<span>Godziny</span></div>
      <div>${textMinutes}<span>Minuty</span></div>
      <div>${textSeconds}<span>Sekundy</span></div>
    `;
  } else {
    clearInterval(intervalId_jazda);
    countdownElement.innerHTML = "<h1>Wlasnie minelo 1000 dni daily</h1>";
  }
};

const intervalId_jazda = setInterval(countdown_jazda, 1000);
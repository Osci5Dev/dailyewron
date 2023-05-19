const countdown = () => {
  const countDate = new Date("May 19, 2023 19:30:00").getTime();
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

  const countdownElement = document.getElementById("countdown");
  const messageElement = document.getElementById("message");

  if (gap > 0) {
    countdownElement.innerHTML = `
      <div>${textDays}<span>Dni</span></div>
      <div>${textHours}<span>Godziny</span></div>
      <div>${textMinutes}<span>Minuty</span></div>
      <div>${textSeconds}<span>Sekundy</span></div>
    `;
  } else {
    clearInterval(intervalId);
    countdownElement.style.display = "none";
    messageElement.style.display = "block";
    document.body.innerHTML = `
    <div class="pyro">
    <div class="before"></div>
    <div class="after"></div>
  </div>
      <div id="message" class="message">
      <h1 class="days2">Wlasnie minelo 1000 dni</h1>
        <a href="https://www.youtube.com/watch?v=unTUGCharLQ" class="guziczek">Film z okazji 1000 dni</a>
        <h2 class="days4">Powrót do wspomnien...</h2>
        <a href="https://fivecity.watch/" class="guziczek2">Sprawdz</a>
        <h2 class="days3">Dodatkowo polecam film Midfora</h2>
        <a href="https://www.youtube.com/watch?v=BjLD1I-QEJ8" class="guziczek3">Midfor</a><br><br><br><br>
        <a href="https://twitter.com/Osci5_" class="osci">Stronka stworzona przez Osci5</a> <br><br>
        <a" class="osci2">Przy filmie pomagali Airna i Filefix</a><br>
        <a" class="osci2">Dzieki Hak3r, Kornik, Midfor i InkSor za ogolna pomoc</a> 
      </div>
    `;
  }
};

const intervalId = setInterval(countdown, 1000);
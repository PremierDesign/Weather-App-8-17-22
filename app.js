function getTemp() {
  let city = "Orem";

  const temp = document.querySelector("#temp");
  const discription = document.querySelector("#discription");
  const weatherImage = document.querySelector("#weatherImage");
  const temp1 = document.querySelector("#temp1");
  const high = document.querySelector("#high");
  const low = document.querySelector("#low");

  const day1 = document.querySelector("#day1");
  const day1icon = document.querySelector("#day1icon");
  const day1high = document.querySelector("#day1high");
  const day1low = document.querySelector("#day1low");

  const day2 = document.querySelector("#day2");
  const day2icon = document.querySelector("#day2icon");
  const day2high = document.querySelector("#day2high");
  const day2low = document.querySelector("#day2low");

  const day3 = document.querySelector("#day3");
  const day3icon = document.querySelector("#day3icon");
  const day3high = document.querySelector("#day3high");
  const day3low = document.querySelector("#day3low");

  const day4 = document.querySelector("#day4");
  const day4icon = document.querySelector("#day4icon");
  const day4high = document.querySelector("#day4high");
  const day4low = document.querySelector("#day4low");

  const day5 = document.querySelector("#day5");
  const day5icon = document.querySelector("#day5icon");
  const day5high = document.querySelector("#day5high");
  const day5low = document.querySelector("#day5low");

  let weatherUpdate = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",

      `https://api.openweathermap.org/data/3.0/onecall?lat=40.296&lon=-111.6946&units=imperial&appid=[yor api key here]      
      `
    );

    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 404) {
        alert("Place not found");
      } else {
        let data = JSON.parse(xhr.response);
        console.log(data);
        temp.innerHTML = `${Math.round(data.current.temp)}°`;
        weatherImage.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
        high.innerHTML = `${Math.round(data.daily[0].temp.max)}°`;
        low.innerHTML = `${Math.round(data.daily[0].temp.min)}°`;

        day1icon.src = `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`;
        day1high.innerHTML = `${Math.round(data.daily[1].temp.max)}°`;
        day1low.innerHTML = `${Math.round(data.daily[1].temp.min)}°`;

        day2icon.src = `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`;
        day2high.innerHTML = `${Math.round(data.daily[2].temp.max)}°`;
        day2low.innerHTML = `${Math.round(data.daily[2].temp.min)}°`;

        day3icon.src = `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`;
        day3high.innerHTML = `${Math.round(data.daily[3].temp.max)}°`;
        day3low.innerHTML = `${Math.round(data.daily[3].temp.min)}°`;

        day4icon.src = `https://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`;
        day4high.innerHTML = `${Math.round(data.daily[4].temp.max)}°`;
        day4low.innerHTML = `${Math.round(data.daily[4].temp.min)}°`;

        day5icon.src = `https://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png`;
        day5high.innerHTML = `${Math.round(data.daily[5].temp.max)}°`;
        day5low.innerHTML = `${Math.round(data.daily[5].temp.min)}°`;
      }
    };
  };

  weatherUpdate();

  // function formatAMPM(date) {
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var ampm = hours >= 12 ? 'pm' : 'am';
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? '0'+minutes : minutes;
  //   var strTime = hours + ' ' + ampm;
  //   return strTime;
  // }
}

getTemp();
setInterval(getTemp, 600000);

function getTime() {
  let time = new Date();
  let hours = time.getHours();
  // var hours = 23;
  let displayHours;
  let AMPM = "AM";
  if (hours > 12) {
    displayHours = hours - 12;
    AMPM = "PM";
  } else if (hours == 0) {
    displayHours = 12;
    AMPM = "AM";
  } else if (hours == 12) {
    displayHours = 12;
    AMPM = "PM";
  } else {
    displayHours = hours;
  }

  let minutes = time.getMinutes();
  let minutesHolder = "0";
  if (minutes < 10) {
    minutesHolder = "0";
  } else {
    minutesHolder = "";
  }

  const weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ];
  let weekday = weekdays[time.getDay()];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[time.getMonth()];
  let day = time.getDate();
  document.getElementById("time").innerHTML =
    displayHours + ":" + minutesHolder + minutes;
  document.getElementById("shift").innerHTML = AMPM;
  document.getElementById("date").innerHTML = weekday + " " + month + " " + day;

  day1.innerHTML = weekdays[time.getDay() + 1];
  console.log(weekdays[time.getDay() + 1]);
  day2.innerHTML = weekdays[time.getDay() + 2];
  console.log(weekdays[time.getDay() + 2]);
  day3.innerHTML = weekdays[time.getDay() + 3];
  console.log(weekdays[time.getDay() + 3]);
  day4.innerHTML = weekdays[time.getDay() + 4];
  console.log(weekdays[time.getDay() + 4]);
  day5.innerHTML = weekdays[time.getDay() + 5];
  console.log(weekdays[time.getDay() + 5]);

  function dimScreen() {
    if (hours < 8 || hours >= 20) {
      document.body.style.background = "url('night-sky.JPG')";
      document.body.style.color = "gray";

      const daygroup = document.querySelectorAll(".daily");
      daygroup.forEach(function (group) {
        group.style.background = "black";
      });
    } else {
      document.body.style.background = "url('sky-3.JPG') no-repeat";
      document.body.style.backgroundSize = "800px 480px";

      document.body.style.color = "black";
      document.getElementById("daily-1").style.backgroundColor = "lightblue";
      document.getElementById("daily-2").style.backgroundColor = "lightblue";
      document.getElementById("daily-3").style.backgroundColor = "lightblue";
      document.getElementById("daily-4").style.backgroundColor = "lightblue";
      document.getElementById("daily-5").style.backgroundColor = "lightblue";
      // document.querySelector(".daily").style.textcolor = "blue";
    }
  }

  dimScreen();
}

getTime();
setInterval(getTime, 60000);

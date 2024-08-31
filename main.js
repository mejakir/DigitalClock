// Digital Clock Function
function digitalClock() {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let DisplayAmPm = "AM";

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    DisplayAmPm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  var time = hour + ":" + minute + ":" + second + " " + DisplayAmPm;
  document.getElementById("ClockDisplay").innerText = time;
  document.getElementById("ClockDisplay").textContent = time;

  setTimeout(digitalClock, 1000);
}

digitalClock();

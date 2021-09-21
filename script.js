let obj;
let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

window.addEventListener("load", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => (res = data))
    .then(() => getData(res))
    .catch((error) => console.log(error));
});

function getData(data) {
  obj = data;

}

daily.addEventListener("click", dailyTarget);

function dailyTarget() {
  daily.style.opacity = "1";

  let current = [];
  let previous = [];

  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];

    let {
      timeframes: { daily },
    } = element;

    current.push(daily["current"]);
    previous.push(daily["previous"]);
  }

  document.getElementById("work_current").innerHTML = current[0];
  document.getElementById("work_previous").innerHTML = previous[0];
  document.getElementById("play_current").innerHTML = current[1];
  document.getElementById("play_previous").innerHTML = previous[1];
  document.getElementById("study_current").innerHTML = current[2];
  document.getElementById("study_previous").innerHTML = previous[2];
  document.getElementById("exercise_current").innerHTML = current[3];
  document.getElementById("exercise_previous").innerHTML = previous[3];
  document.getElementById("social_current").innerHTML = current[4];
  document.getElementById("social_previous").innerHTML = previous[4];
  document.getElementById("selfCare_current").innerHTML = current[5];
  document.getElementById("selfCare_previous").innerHTML = previous[5];
}

weekly.addEventListener("click", weeklyTarget);

function weeklyTarget() {
  weekly.style.opacity = "1";
  let current = [];
  let previous = [];

  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];

    let {
      timeframes: { weekly },
    } = element;

    current.push(weekly["current"]);
    previous.push(weekly["previous"]);
  }

  document.getElementById("work_current").innerHTML = current[0];
  document.getElementById("work_previous").innerHTML = previous[0];
  document.getElementById("play_current").innerHTML = current[1];
  document.getElementById("play_previous").innerHTML = previous[1];
  document.getElementById("study_current").innerHTML = current[2];
  document.getElementById("study_previous").innerHTML = previous[2];
  document.getElementById("exercise_current").innerHTML = current[3];
  document.getElementById("exercise_previous").innerHTML = previous[3];
  document.getElementById("social_current").innerHTML = current[4];
  document.getElementById("social_previous").innerHTML = previous[4];
  document.getElementById("selfCare_current").innerHTML = current[5];
  document.getElementById("selfCare_previous").innerHTML = previous[5];
}

monthly.addEventListener("click", monthlyTarget);

function monthlyTarget() {
  monthly.style.opacity = "1";
  let current = [];
  let previous = [];

  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];

    let {
      timeframes: { monthly },
    } = element;

    current.push(monthly["current"]);
    previous.push(monthly["previous"]);
  }

  document.getElementById("work_current").innerHTML = current[0];
  document.getElementById("work_previous").innerHTML = previous[0];
  document.getElementById("play_current").innerHTML = current[1];
  document.getElementById("play_previous").innerHTML = previous[1];
  document.getElementById("study_current").innerHTML = current[2];
  document.getElementById("study_previous").innerHTML = previous[2];
  document.getElementById("exercise_current").innerHTML = current[3];
  document.getElementById("exercise_previous").innerHTML = previous[3];
  document.getElementById("social_current").innerHTML = current[4];
  document.getElementById("social_previous").innerHTML = previous[4];
  document.getElementById("selfCare_current").innerHTML = current[5];
  document.getElementById("selfCare_previous").innerHTML = previous[5];
}

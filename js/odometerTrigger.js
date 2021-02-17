// Get Subscribers
const youtubeKey = "AIzaSyB1CLllpJ2zLOVCRbSpzAWnspFfozPUCOc"; // API Key
const youtubeUserFront = "UCFHhnyA9HGtBxGhtMQ_FEpQ"; // The Front
const youtubeUserJack = "UCNfGpi7cu6I3vGLUS77MygQ"; // Relax Jack
const youtubeUserBraved = "UCXMGMrypItN1a1seNlydqng"; // The Braved
const youtubeUserGeetsly = "UC8gT5G2ktLGoHlLm33EwOsA"; // Geetsly
let subCount = 0;
let viewCount = 0;

/** Odometer Trigger function */
function odometerTrigger() {
  /** If you want to change any of the statistics number, these are the numbers you want to change below: */

  /** Subscriber Count */
  setTimeout(function () {
    subOdometer.innerHTML = subCount ? subCount : 535090;
  }, 0);

  /** View Count */
  setTimeout(function () {
    viewOdometer.innerHTML = viewCount ? viewCount : 144531019;
  }, 0);

  /** Channel Count */
  setTimeout(function () {
    channelOdometer.innerHTML = 4;
  }, 0);
}

let getSubscribers = () => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUserFront}&key=${youtubeKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      subCount += parseInt(data["items"][0].statistics.subscriberCount);
      viewCount += parseInt(data["items"][0].statistics.viewCount);
      /* console.log(subCount + ' ' + viewCount); */
    })
    .then (() => {
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUserJack}&key=${youtubeKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          subCount += parseInt(data["items"][0].statistics.subscriberCount);
          viewCount += parseInt(data["items"][0].statistics.viewCount);
          /* console.log(subCount + ' ' + viewCount); */
        })
        .then (() => {
          fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUserBraved}&key=${youtubeKey}`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              subCount += parseInt(data["items"][0].statistics.subscriberCount);
              viewCount += parseInt(data["items"][0].statistics.viewCount);
              /* console.log(subCount + ' ' + viewCount); */
            })
            .then (() => {
              fetch(
                `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUserGeetsly}&key=${youtubeKey}`
              )
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  subCount += parseInt(data["items"][0].statistics.subscriberCount);
                  viewCount += parseInt(data["items"][0].statistics.viewCount);
                  /* console.log(subCount + ' ' + viewCount); */
                })
                .then(() => {
                  odometerTrigger();
                });
            });
        });
    });    
};


getSubscribers();


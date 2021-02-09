// Get Subscribers
const youtubeKey = "AIzaSyB1CLllpJ2zLOVCRbSpzAWnspFfozPUCOc"; // Cam API Key
const youtubeUserFront = "UCFHhnyA9HGtBxGhtMQ_FEpQ"; // The Front
const youtubeUserJack = "UCNfGpi7cu6I3vGLUS77MygQ"; // Relax Jack
const youtubeUserBraved = "UCXMGMrypItN1a1seNlydqng"; // The Braved
const youtubeUserGeetsly = "UC8gT5G2ktLGoHlLm33EwOsA"; // Geetsly
let subCount = 0;
let viewCount = 0;

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
    });

  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUserJack}&key=${youtubeKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      subCount += parseInt(data["items"][0].statistics.subscriberCount);
      viewCount += parseInt(data["items"][0].statistics.viewCount);
    });

  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUserBraved}&key=${youtubeKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      subCount += parseInt(data["items"][0].statistics.subscriberCount);
      viewCount += parseInt(data["items"][0].statistics.viewCount);
    });

  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUserGeetsly}&key=${youtubeKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      subCount += parseInt(data["items"][0].statistics.subscriberCount);
      viewCount += parseInt(data["items"][0].statistics.viewCount);
    });
};

getSubscribers();

/** Odometer Trigger function */
function odometerTrigger() {
  /** If you want to change any of the statistics number, these are the numbers you want to change below: */

  /** Subscriber Count */
  setTimeout(function () {
    subOdometer.innerHTML = subCount ? subCount : 535090;
  });

  /** View Count */
  setTimeout(function () {
    viewOdometer.innerHTML = viewCount ? viewCount : 144531019;
  });

  /** Channel Count */
  setTimeout(function () {
    channelOdometer.innerHTML = 4;
  });
}

/** You don't need to mess with this */
/** Calculate the distance to the odometer in order to trigger on scroll */
$(window).scroll(function () {
  var odometerTop = $("#subOdometer").offset().top,
    odometerHeight = $("#subOdometer").outerHeight(),
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();
  if (windowScroll > odometerTop + odometerHeight - windowHeight) {
    odometerTrigger();
  }
});

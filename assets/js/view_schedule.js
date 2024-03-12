var providerTimes = [
  {providerId: 1, startTime: new Date("March 14, 2024 08:00:00"), endTime: new Date("March 14, 2024 17:00:00")},
  {providerId: 1, startTime: new Date("March 15, 2024 08:00:00"), endTime: new Date("March 15, 2024 17:00:00")}
]

$(document).ready(function () {
  for(let element in providerTimes) {
    $('#scheduleTable tr:last').after("<tr><td>" + providerTimes[element].providerId + "</td><td>" + providerTimes[element].startTime + "</td><td>" + providerTimes[element].endTime + "</td></tr>");
  }
});
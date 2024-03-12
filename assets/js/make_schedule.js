var providerTimes = [
  {providerId: 1, startTime: new Date("March 14, 2024 08:00:00"), endTime: new Date("March 14, 2024 17:00:00")},
  {providerId: 1, startTime: new Date("March 15, 2024 08:00:00"), endTime: new Date("March 15, 2024 17:00:00")}
]

var tzOffset = (new Date()).getTimezoneOffset() * 60000

$(document).ready(function () {
  var minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)
  minDate.setHours(0, 0, 0, 0)

  $("#startTime").attr({
    "min" : toLocaleIsoString(minDate),
  })
  $("#endTime").attr({
    "min" : toLocaleIsoString(minDate),
  })

  $("#startTime").change(function() {
    var minDate = new Date($("#startTime").val())
    var maxDate = new Date($("#startTime").val())
    maxDate.setHours(23, 59, 59, 999)

    $("#endTime").attr({
      "min" : toLocaleIsoString(minDate),
      "max" : toLocaleIsoString(maxDate)
    })

  })

});

$(function() {
  $("#scheduleForm").on("submit",function(e) {
    e.preventDefault();
    var startTime = new Date($("#startTime").val())
    if (checkIfScheduleValid(startTime)) {
      $("#formStatus").text("Schedule set successfully!")
    } else {
      $("#formStatus").text("You've already scheduled yourself for that day!")
    }
    // send information to server/database
  });
});

function checkIfScheduleValid(appStartTime) {
  for(let element in providerTimes) {
    if (appStartTime.getDate() === providerTimes[element].startTime.getDate() 
     && appStartTime.getMonth() === providerTimes[element].startTime.getMonth()
     && appStartTime.getFullYear() === providerTimes[element].startTime.getFullYear()) {
      return false
    }
  }
  return true
}

function toLocaleIsoString(date) {
  return (new Date(date - tzOffset)).toISOString().slice(0, -8)
}
var providerTimes = [
  {providerId: 1, startTime: new Date("March 14, 2024 08:00:00"), endTime: new Date("March 14, 2024 17:00:00")},
  {providerId: 1, startTime: new Date("March 15, 2024 08:00:00"), endTime: new Date("March 15, 2024 17:00:00")}
]

$(document).ready(function () {
  var minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)

  $("#appointmentTime").attr({
    "min" : minDate.toISOString().slice(0, -8),
    "max" : getMaxDate().toISOString().slice(0, -8)
  })

});

$(function() {
  $("#appointmentForm").on("submit",function(e) {
    e.preventDefault();
    var startTime = new Date($("#appointmentTime").val())
    if (checkIfAppointmentValid(startTime)) {
      $("#formStatus").text("Successfully scheduled!")
    } else {
      $("#formStatus").text("Your appointment was not scheduled due to choosing an incorrect time.")
    }
    // send information to server/database and maybe clear form?
  });
});

function getMaxDate() {
  providerTimes.sort((a, b) => a.endTime - b.endTime);
  return providerTimes[providerTimes.length - 1].endTime
}

function checkIfAppointmentValid(appStartTime) {
  var appEndTime = new Date(appStartTime)
  appEndTime.setMinutes(appEndTime.getMinutes() + 15)

  for(let element in providerTimes) {
    if (appStartTime.getDate() === providerTimes[element].startTime.getDate() 
     && appStartTime.getMonth() === providerTimes[element].startTime.getMonth()
     && appStartTime.getFullYear() === providerTimes[element].startTime.getFullYear()) {

      if (appStartTime >= providerTimes[element].startTime && appEndTime <= providerTimes[element].endTime) {
        return true
      }

    }
  }
  return false
}
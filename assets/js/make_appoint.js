var providerTimes = [
  {providerId: 1, startTime: new Date("March 14, 2024 08:00:00"), endTime: new Date("March 14, 2024 17:00:00")},
  {providerId: 1, startTime: new Date("March 15, 2024 08:00:00"), endTime: new Date("March 15, 2024 17:00:00")}
]

var appointmentSubmittedTime = new Date()

$(document).ready(function () {
  var minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)

  $("#appointmentTime").attr({
    "min" : minDate.toISOString().slice(0, -8),
    "max" : getMaxDate().toISOString().slice(0, -8)
  })

  $("#confirmButton").click(function() {
    var currentTime = new Date()
    var thirtyMin = 1000 * 60 * 30

    if (currentTime - appointmentSubmittedTime <= thirtyMin) {
      alert("Appointment confirmed successfully")
      $("#confirmButton").attr("hidden", true)
    } else {
      alert("Appointment deleted, not confirmed within 30 minutes.")
      $("#confirmButton").attr("hidden", true)
    }
  }); 

});

$(function() {
  $("#appointmentForm").on("submit",function(e) {
    e.preventDefault();
    var startTime = new Date($("#appointmentTime").val())
    if (checkIfAppointmentValid(startTime)) {
      $("#formStatus").text("Successfully scheduled!")
      $("#confirmButton").attr("hidden", false)
      appointmentSubmittedTime = new Date()
    } else {
      $("#formStatus").text("Your appointment was not scheduled due to choosing an incorrect time.")
      $("#confirmButton").attr("hidden", true)
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
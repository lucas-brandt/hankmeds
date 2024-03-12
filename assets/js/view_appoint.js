var appointmentTimes = [
  {subscriberId: 1, startTime: new Date("March 14, 2024 08:00:00"), endTime: new Date("March 14, 2024 08:15:00"), confirmed: true},
  {subscriberId: 1, startTime: new Date("March 15, 2024 08:00:00"), endTime: new Date("March 15, 2024 08:15:00"), confirmed: true}
]

$(document).ready(function () {
  for(let element in appointmentTimes) {
    $('#appointmentTable tr:last').after("<tr><td>" + appointmentTimes[element].subscriberId + "</td><td>" + appointmentTimes[element].startTime + "</td><td>" + appointmentTimes[element].endTime + "</td><td>" + appointmentTimes[element].confirmed + "</td></tr>");
  }
});
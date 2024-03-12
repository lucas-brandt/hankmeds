# hankmeds
A code assesment project for Henry Meds.

# Introduction
This project was a fun challenge. Ultimately, it did turn into a very DOM hacky web application. I didn't feel comfortable enough starting an Angular/React project from complete scratch. If this wasn't the intention, then I can re-attempt this in a different way (optimally in Android). However, I hope that is not the case.

# Design Choices
Initially, I was going to use a JS database library to store and retrieve appointments/schedules. However, I thought I may end up wasting too much time trying to learn how it works/setting it up. Instead, I just used hardcoded data within the JS files themselves.

I used a very non-perfect date picker for selecting appointments and choosing schedules. I was not sure if using an outside calendar view library would be acceptable. I assumed the main part of the coding challenge was coding the logic that those calendar libraries would have done for me.

Since I couldn't send/recieve data to a server or a database, I tried to comment where that would take place. Ultimately, submitting the forms doesn't do much other than demonstrate the logic required by the coding challenge itself.

# Features
Providers: 
- Can view their schedule which is dynamically generated from mock data
- Can submit their schedules on a day-by-day basis
  - A provider must schedule at least one day into the future (I thought this was a reasonable requirement)
  - A provider will be prevented from scheduling a day they already have scheduled (in a more complete application they would have to delete or update their already scheduled day)
  - A provider is only allowed to schedule one day at a time currently. This is a short-coming of the date picker used. Optimally, a calendar view would be shown to the provider and they could schedule multiple days at once
    - Only allowing same-day scheduling helped limit the logic required for scheduling in this time-sensitive project

Subscribers:
- Can view their upcoming appointments
- Can schedule appointments within the times that providers have available
  - Date picker limits them to 24 hours in the future for first available appointment
  - Are shown the provider's schedules so they know when to schedule
  - Frontend validation prevents them from scheduling an appointment outside of a providers window
  - Can confirm appointments once they have been validated (I wasn't totally sure what to do for this requirement, so I implemented a confirm button that can be successfully pressed within 30 minutes of appointment creation, otherwise errors)
  - All appointments are 15 minutes by default
 
# Updates with more time
- Implementing database for local storage to actually save and view appointments in real time
- Implement a better "slot" system. I read this requirement as each provider has a slot in which they are working each day. However, I was probably supposed to break up the days into slots of 15 mins. I'm not sure I would have had time to implement a slot system regardless.
- Update the janky date picker to a calendar view for ease
- "Allows clients to list available slots" -> I thought this may have been a typo and meant "allows providers to list available slots". If not I did not complete this requirement. This also ties back into developing a better slot system
- Change the confirm button to have more/better functionality? Maybe an email confirmation?
- Ran out of time before implementing validation to check that an appointment isn't already scheduled at the time of a new appointment. However, the logic would be extremely similar to not allowing providers to schedule the same day twice. Hopefully, that logic proves my understanding
- Would have liked to have a real PR process instead of just comitting to master. However, that would have taken too much time.

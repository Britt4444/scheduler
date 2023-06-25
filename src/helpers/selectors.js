
export function getAppointmentsForDay(state, day) {
  //.find() returns the first element that passes a test (selectedDay.name === day)
  const appointmentsArray = state.days.find((selectedDay) => selectedDay.name === day);
  //initialize empty array
  const appointmentsData = [];
  if (appointmentsArray) {
    //map appointments to array
    appointmentsArray.appointments.map((appointmentId) => appointmentsData.push(state.appointments[appointmentId]));
  }
  return appointmentsData;
};

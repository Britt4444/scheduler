
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

export function getInterview(state, interview) {
  //return null if interview is not booked
  if(!interview) {
    return null;
  }
  // change interview.id to interviewer name
  interview.interviewer = state.interviewers[interview.interviewer];
  // return newly structured interview obj
  return interview;
};

export function getInterviewersForDay(state, day) {
  if(!state.days) {
    return null;
  }
  const appointmentsArray = state.days.find((selectedDay) => selectedDay.name === day);
  console.log(appointmentsArray);
  const interviewersData = [];
  if (appointmentsArray) {
      appointmentsArray.interviewers.map((interviewerId) =>
        interviewersData.push(state.interviewers[interviewerId])
      );
  }
  console.log(interviewersData);
  return interviewersData;
}


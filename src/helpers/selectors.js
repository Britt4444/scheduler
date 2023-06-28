
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
  // interview.interviewer id = interviewers id 
  interview.interviewer = state.interviewers[interview.interviewer];
  // return newly structured interview obj
  return interview;
};

export function getInterviewersForDay(state, day) {
  if(!state.days) {
    return null;
  }
  const appointmentsArray = state.days.find((selectedDay) => selectedDay.name === day);
  if (appointmentsArray) {
    const interviewersData = appointmentsArray.interviewers.map((interviewerId) => {
        return (state.interviewers[interviewerId])
    });
    return interviewersData;
  }
}


// import { useReducer } from "react";

// useReducer dispatch action types:
export const SET_DAY              = "SET_DAY";
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_INTERVIEW        = "SET_INTERVIEW";
export const UPDATE_SPOTS         = "UPDATE_SPOTS";

export default function reducer(state, action) {
  switch (action.type) {
    
    default:
    throw new Error(
      `useApplicationData: tried to reduce with unsupported action type: ${action.type}`
    );
  }

  // const [state, setState] = useReducer({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {}
  // })

  // const setDay = day => setState({ ...state, day });

  // //function to update spots remaining
  // const updateSpots = (selectedDay, day, appointment, addSpots = true) => {
  //   let spot = day.spots;
  //   if (selectedDay.day === day.name) {
  //     if (addSpots) {
  //       return spot + 1;
  //     }
  //     if (state.appointments[appointment.id].interview !== null) {
  //       return spot;
  //     }
  //     if (!addSpots) {
  //       return spot - 1;
  //     }
  //   }
  //   return spot;
  // }

  // //persist data via put request to update database with interview 
  // async function bookInterview(id, interview) {
  //   await axios.put(`/api/appointments/${id}`, {
  //     interview
  //   })
  //     .then(() => {
  //       const appointment = {
  //         ...state.appointments[id],
  //         interview: { ...interview }
  //       };
  //       const appointments = {
  //         ...state.appointments,
  //         [id]: appointment
  //       };
  //       const spotsLeft = state.days.map((day) => {
  //         return {
  //           ...day,
  //           spots: updateSpots(state, day, appointment, false)
  //         }
  //       });
  //       setState({
  //         ...state,
  //         appointments,
  //         days: spotsLeft
  //       });
  //     })
  // };

  // //cancel interview
  // function cancelInterview(id) {
  //   return axios.delete(`/api/appointments/${id}`)
  //     .then(() => {
  //       const appointment = {
  //         ...state.appointments[id],
  //         interview: null,
  //       };
  //       const appointments = {
  //         ...state.appointments,
  //         [id]: appointment,
  //       };
  //       const spotsLeft = state.days.map((day) => {
  //         return {
  //           ...day,
  //           spots: updateSpots(state, day, appointment, true)
  //         }
  //       });
  //       setState({
  //         ...state,
  //         appointments,
  //         days: spotsLeft
  //       });
  //     })
  // }
}
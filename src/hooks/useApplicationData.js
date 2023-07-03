import { useState, useEffect } from 'react';
import axios from 'axios';


export default function useApplicationData(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = day => setState({ ...state, day });

  //function to update spots remaining
  const updateSpots = (state, day, appointment, addSpots = true) => {
    let spots = day.spots;
    if (addSpots) {
      return spots +=1;
    }
    if (state.appointments[appointment.id].interview !== null) {
      return spots;
    }
    if (!addSpots) {
      return spots -=1;
    }
    return spots;
  }

  //persist data via put request to update database with interview 
  function bookInterview(id, interview) {
    return axios.put(`/api/appointments/${id}`, {
      interview
    })
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview }
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        const spotsLeft = state.days.map((day)=>{
          return {
            ...day,
            spots: updateSpots(state, day, appointment, false)
          }
        });
        setState({
          ...state,
          appointments,
          days: spotsLeft
        });
      })
  };

  //cancel interview
  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: null,
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment,
        };
        const spotsLeft = state.days.map((day)=>{
          return {
            ...day,
            spots: updateSpots(state, day, appointment, true)
          }
        });
        setState({
          ...state,
          appointments,
          days: spotsLeft
        });
      })
  }

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, [])

  return { state, setDay, bookInterview, cancelInterview };
}
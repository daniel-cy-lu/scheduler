import { useState, useEffect } from "react";
import axios from "axios";


//customer hook that returns { state, setDay, bookInterview, cancelInterview } for Application.js
export default function useApplicationData() {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({...state, day});

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() =>   
         setState((prev) => ({...prev, appointments})
      )
    )
  };

  function cancelInterview(id) {
    const cancelAppointment = {
      ...state.appointments[id],
      interview : null
    }

    const appointments = {
      ...state.appointments,
      [id] : cancelAppointment
    }

    return axios.delete(`/api/appointments/${id}`)
    .then(()=> 
      setState({...state, appointments})
    )
  }

  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers")
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, [])

  return { state, setDay, bookInterview, cancelInterview };
} 


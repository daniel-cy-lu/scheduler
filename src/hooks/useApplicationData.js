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

  function countSpots(appointments) {
    let idx = 0;
    let dayObj = {};
    // for each existing interview, we wiil take 1 away from remain 
    let remain = 5;

    //keep track of the index and store a copy of day object that is a match as state.day
    for (let i = 0; i < state.days.length; i++) {
      if (state.days[i].name === state.day) {
        idx = i;
        dayObj = state.days[i]; 
      }
    }

    //loop through appointment of the day and check if appointment are booked (interview exist or not). We count with remain variable
    for (let appointment of dayObj.appointments) {
      if (appointments[appointment].interview) {
        remain -= 1;
      }
    }
    
    let spotsUpdatedDayObj = {...dayObj, spots : remain};
    let spotsUpdatedDaysArr = [...state.days];
    spotsUpdatedDaysArr[idx] = spotsUpdatedDayObj;
   
    return spotsUpdatedDaysArr;
  }



  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    let updatedDays = countSpots(appointments);

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() =>   
        setState((prev) => ({...prev, appointments, days : updatedDays})),        
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

    let updatedDays = countSpots(appointments);

    return axios.delete(`/api/appointments/${id}`)
    .then(()=> 
      setState((prev) => ({...prev, appointments, days : updatedDays}))
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


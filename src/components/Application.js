import React, {useState, useEffect} from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview } from "helpers/selectors"


export default function Application(props) {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const setDay = day => setState({...state, day});

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const parsedAppointments = dailyAppointments.map(appointment => { 
    const interview = getInterview(state, appointment.interview);
    return (<Appointment {...appointment} key={appointment.id} interview={interview}/> )})

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

  return (
    <main className="layout">
      {false && <h1>Daniel</h1>}
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList 
            days={state.days}
            value={state.day}
            onChange={setDay}
           
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {parsedAppointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

import React, {useState, useEffect} from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {} 
  });
  
  const dailyAppointments = [];
  const setDay = day => setState({...state, day});
  const setDays = days => setState(prev => ({...prev, days}));

  const parsedAppointments = dailyAppointments.map(appointment => <Appointment {...appointment} key={appointment.id} /> )

  useEffect(() => {
    axios.get("api/days")
    .then((res) => {
      setDays(res.data);
    })
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

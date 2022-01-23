export default function getAppointmentsForDay(state, day) {
  const appointmentArr = [];
  
  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      for (let appID of stateDay.appointments) {
        for (let key in state.appointments) {
          if (appID.toString() === key) {
            appointmentArr.push(state.appointments[key])
          }
        }
      }
    }
  };
  
  
  return appointmentArr;
}
export function getAppointmentsForDay(state, day) {
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

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  const interviewerID = interview.interviewer;
  const interviewerObj = state.interviewers[interviewerID];

  return {...interview, interviewer : interviewerObj};
}

export function getInterviewersForDay(state, day) {
  const interviewersArr = [];
  
  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      for (let appID of stateDay.interviewers) {
        for (let key in state.interviewers) {
          if (appID.toString() === key) {
            interviewersArr.push(state.interviewers[key])
          }
        }
      }
    }
  };
  return interviewersArr;
}
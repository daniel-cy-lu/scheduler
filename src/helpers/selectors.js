// export function getAppointmentsForDay(state, day) {
//   const appointmentArr = [];
  
//   for (let stateDay of state.days) {
//     if (stateDay.name === day) {
//       for (let appID of stateDay.appointments) {
//         for (let key in state.appointments) {
//           if (appID.toString() === key) {
//             appointmentArr.push(state.appointments[key])
//           }
//         }
//       }
//     }
//   };
//   return appointmentArr;
// }

export function getAppointmentsForDay(state, day) {
  let appointmentArr = [];
  for (let stateDay of state.days) {
    if (stateDay.name === day) {
      appointmentArr = stateDay.appointments;
    }
  }
  
  if (appointmentArr.length > 0) {
    let filteredArr = appointmentArr.map((app) => state.appointments[app])
    return filteredArr;
  } 
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

// export function getInterviewersForDay(state, day) {
//   const interviewersArr = [];
  
//   for (let stateDay of state.days) {
//     if (stateDay.name === day) {
//       for (let appID of stateDay.interviewers) {
//         for (let key in state.interviewers) {
//           if (appID.toString() === key) {
//             interviewersArr.push(state.interviewers[key])
//           }
//         }
//       }
//     }
//   };
//   return interviewersArr;
// }

  export function getInterviewersForDay(state, day) {
    let arr = [];

    for (let stateDay of state.days) {
      if (stateDay.name === day) {
        arr = stateDay.interviewers;
      }
    }

    if (arr.length > 0) {
      let filteredArr = arr.map((int) => state.interviewers[int]);
      return filteredArr;
    }
    return arr;
  }
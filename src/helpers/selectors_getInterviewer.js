export default function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  const interviewerID = interview.interviewer;
  const interviewerObj = state.interviewers[interviewerID];

  return {...interview, interviewer : interviewerObj};
}
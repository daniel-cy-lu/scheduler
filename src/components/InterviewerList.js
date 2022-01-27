import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import propTypes from "prop-types";

export default function InterviewerList(props) {
  
  
  const parsedInterviewers = props.interviewers.map(interviewer => <InterviewerListItem 
    key={interviewer.id} 
    setInterviewer={() => props.onChange(interviewer.id)} 
    name={interviewer.name}
    avatar={interviewer.avatar} 
    selected={props.value === interviewer.id} 
    />);

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {parsedInterviewers}
      </ul>
    </section>
  )
}

InterviewerList.propTypes = {
  interviewers : propTypes.array.isRequired
};





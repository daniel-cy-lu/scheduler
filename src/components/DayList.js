import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  
  const parsedDays = props.days.map(day => <DayListItem setDay={props.onChange} selected={props.value === day.name} key={day.id} {...day} />);
  return (
    <ul>
      {parsedDays}
    </ul>
  )
}
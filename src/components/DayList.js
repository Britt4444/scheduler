import React from "react";
import DayListItem from "./DayListItem.js";
// const { day, setDay } = props;

export default function DayList(props) {
  const dayListItems = (props.days || []).map((day) =>
  <DayListItem 
    key={day.id}
    name={day.name}
    spots={day.spots} 
    selected={props.day === day.name}
    setDay={() => props.setDay(day.name)}
  />
  )
  return (
    <ul>{dayListItems}</ul>
  );
};

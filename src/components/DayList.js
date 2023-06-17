import React from "react";
import DayListItem from "./DayListItem.js";
// const { day, setDay } = props;

export default function DayList(props) {
  const dayListItems = (props.days || []).map((day) =>
  <DayListItem 
    key={day.id}
    name={day.name}
    spots={day.spots} 
    selected={props.value === day.name}
    setDay={() => props.onChange(day.name)}
  />
  )
  return (
    <ul>{dayListItems}</ul>
  );
};

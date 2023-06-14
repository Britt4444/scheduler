import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";

export default function DayListItem(props) {

  let dayListItemClass = classNames(
    'day-list__item', {
    "--selected": props.selected,
    "--full": !props.spots
 });
  return (
    <li
    className={dayListItemClass}
    onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}
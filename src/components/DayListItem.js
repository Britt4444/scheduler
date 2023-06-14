import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";


const formatSpots = function(spots) {
  return (
    (!spots || (spots === 0)) ? "no spots remaining": `${spots} spot${spots === 1 ? "" : "s"} remaining`
  );
};

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
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
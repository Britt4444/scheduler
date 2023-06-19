import React from "react";
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

export default function Appointment(props) {
  return (
    <article className='appointment'>
      <Header time={props.time}></Header>
      {props.interview 
      ?
      <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer.name}  
      >
      </Show> 
      :
      <Empty className='appointment__add'></Empty>
      }
    </article>
  );
};
import React from "react";
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from "./Form";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = ({
      student: name,
      interviewer
    });
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW));
  }

  function cancel() {
    transition(DELETING);
    props.cancelInterview(props.id)
    .then(() => transition(DELETING))
    .then(() => transition(EMPTY));
  }

  return (
    <article className='appointment'>
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview && props.interview.student}
          interviewer={props.interview && props.interviewers.name}
          onDelete={() => {transition(CONFIRM)}}
        >
        </Show>
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        >
        </Form>
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === CONFIRM && (
      <Confirm 
      message={"Are you sure you would like to delete?"}
      onCancel={back}
      onConfirm={() => cancel(props.id)}
      ></Confirm>
    )}
      {mode === DELETING && <Status message={"Deleting"} />}
    </article>
  );
};
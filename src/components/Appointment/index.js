import React from "react";
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from "./Form";
import Status from "./Status";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

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
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function cancel() {
    transition(DELETING);
    props.cancelInterview(props.id)
      .then(() => transition(DELETING))
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  }

  return (
    <article className='appointment'>
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview && props.interview.student}
          // below crashes the app after 4-6 day clicks - cannot read properties of "name" after saving edit
          interviewer={props.interview && props.interview.interviewer.name}
          onDelete={() => transition(CONFIRM)}
          // still not working!
          onEdit={() => transition(EDIT)}
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
      {mode === EDIT && (
        <Form
          student={props.interview && props.interview.student}
          interviewer={props.interview && props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        >
        </Form>
      )}
      {mode === ERROR_SAVE && (
      <Error 
        message={"Unable to save appointment"}
        // add condition to error if interview already exists
        onClose={() => props.interview ? transition(SHOW): transition(EMPTY)}
      >
      </Error>)
      }
      {mode === ERROR_DELETE && (
      <Error 
        message={"Unable to delete appointment"}
        onClose={() => transition(SHOW)}
      >
      </Error>
      )}
    </article>
  );
};
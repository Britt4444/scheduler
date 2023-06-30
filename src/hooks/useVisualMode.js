import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (mode !== newMode) {
      setMode(newMode);
    }
    (replace ? setHistory(history) : history.push(newMode));
  }

  function back() {
    if (history.length === 1) {
      return;
    }
    history.pop();
    setHistory(prev => ([...prev, mode]))
    setMode(history[history.length - 1]);
  }

  return { mode, transition, back };

};
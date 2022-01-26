import { useState } from "react";


export default function useVisualMode(init) {
   const [mode, setMode] = useState(init);
   const [history, setHistory] = useState([init]);

   function transition(value, replace = false) {
    setMode(value);
    if (replace) {
      setHistory([...history.slice(0, history.length -1), value]);
    } else {
      setHistory([...history, value]);
    }
  };
   
  function back() {
    if (history.length <= 1) {
      return;
    }
    setMode(history[history.length - 2]);
    setHistory([...history.slice(0, history.length -1)]);
   }
   
   return { mode, transition, back }
}




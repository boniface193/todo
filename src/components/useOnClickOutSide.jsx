import { useEffect } from "react";

const useOnClickOutSide = (ref, currentState, updater) => {
  useEffect(() => {
    const handler = (event) => {
      if (currentState && ref.current && !ref.contains(event.target)) {
        updater(false)
      };
    };
    document.addEventListener('mousedown', handler)
    return (
      document.addEventListener('mousedown', handler)
    )
  }, [ref, currentState, updater])
}
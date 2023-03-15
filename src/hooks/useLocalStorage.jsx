import { useState, useEffect } from "react";

// This is a custom hook that will save the value of a state variable to local storage
function getSavedValue(key, initialValue) {
  // Get from local storage by key
  const savedValue = JSON.parse(localStorage.getItem(key));
  // If initial value is a function then execute it
  if (savedValue) return savedValue;
  // Otherwise return initial value
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

// This is the custom hook
export default function useLocalStorage(key, initialValue) {
  // State to store our value
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    // Save state to local storage on change
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

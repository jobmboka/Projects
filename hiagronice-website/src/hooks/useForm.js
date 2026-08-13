import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function reset() {
    setValues(initialValues);
    setStatus("idle");
  }

  return { values, setValues, handleChange, status, setStatus, reset };
}

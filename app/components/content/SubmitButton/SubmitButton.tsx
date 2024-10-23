import React from "react";
import { useFormStatus } from "react-dom";

import styles from "./styles.module.css";

type Props = {
  children: string;
};

export const SubmitButton = ({ children = "" }: Props) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${styles.button} ${pending ? styles.buttonDisabled : ""}`}
      disabled={pending}
    >
      {children}
    </button>
  );
};

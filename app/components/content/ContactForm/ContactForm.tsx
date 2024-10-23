"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useFormState } from "react-dom";

import { submitForm } from "actions/submitForm";
import { Input } from "components/content/Input/Input";
import { SubmitButton } from "components/content/SubmitButton/SubmitButton";

import styles from "./styles.module.css";

export const ContactForm = () => {
  const initialState = {
    email: "",
    name: "",
    message: "",
    errors: { name: [], email: [], message: [] },
  };

  const [state, formAction] = useFormState(submitForm, initialState);

  return state.success ? (
    <p className={styles.successMsg}>
      <CheckCircleIcon className={styles.successMsgIcon} />
      <span>Your form has been submitted successfully. Thanks!</span>
    </p>
  ) : (
    <form action={formAction}>
      <Input
        label="Name"
        name="name"
        placeholder="John Doe"
        errors={state?.errors?.name}
      />

      <Input
        label="Email"
        name="email"
        placeholder="John@Doe.com"
        errors={state?.errors?.email}
      />

      <Input
        type="textarea"
        label="Your message"
        name="message"
        placeholder="Let us know your thoughts..."
        errors={state?.errors?.message}
      />

      <SubmitButton>Submit form</SubmitButton>
    </form>
  );
};

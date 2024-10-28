"use client";

import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useCallback, useState } from "react";
import { useFormState } from "react-dom";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

import { submitForm } from "actions/submitForm";
import { Input } from "components/content/Input/Input";
import { SubmitButton } from "components/content/SubmitButton/SubmitButton";
import { ContactFormStateProps } from "types";

import styles from "./styles.module.css";

const initialState = {
  email: "",
  name: "",
  message: "",
  errors: {
    message: [],
    email: [],
    name: [],
  },
};

const addRecaptcha =
  (token: string) =>
  async (prevState: ContactFormStateProps, formData: FormData) => {
    formData.set("captcha", token);
    return submitForm(prevState, formData);
  };

export const ContactForm = () => {
  const [token, setToken] = useState("");
  const [state, formAction] = useFormState(addRecaptcha(token), initialState);

  const onVerify = useCallback((token: string) => setToken(token), []);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    >
      <GoogleReCaptcha onVerify={onVerify} />
      {state.success ? (
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

          {state.error && (
            <p className={styles.errorMsg}>
              <ExclamationCircleIcon className={styles.errorMsgIcon} />
              <span>{state.error}</span>
            </p>
          )}

          <SubmitButton>Submit form</SubmitButton>
        </form>
      )}
    </GoogleReCaptchaProvider>
  );
};

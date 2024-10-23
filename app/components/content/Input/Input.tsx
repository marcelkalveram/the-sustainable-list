import { ExclamationCircleIcon } from "@heroicons/react/16/solid";

import styles from "./styles.module.css";

type Props = {
  type?: "input" | "textarea";
  name: string;
  label: string;
  placeholder: string;
  errors?: string[];
};

export const Input = ({
  type = "input",
  name,
  label,
  placeholder,
  errors,
}: Props) => {
  const isTextarea = type === "textarea";
  const Component = isTextarea ? "textarea" : "input";

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Component
        name={name}
        placeholder={placeholder}
        className={styles.input}
        {...(isTextarea ? { rows: 8 } : { type: "text" })}
      />
      {errors &&
        errors.map((error) => (
          <p key={error} className={styles.errorMsg}>
            <ExclamationCircleIcon className={styles.errorMsgIcon} />
            <span>{error}</span>
          </p>
        ))}
    </div>
  );
};

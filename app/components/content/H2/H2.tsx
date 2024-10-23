import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

export const H2 = ({ children }: Props) => (
  <h2 className={styles.text}>{children}</h2>
);

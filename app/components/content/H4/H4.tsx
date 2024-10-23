import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  id?: string;
};

export const H4 = ({ children, ...rest }: Props) => (
  <h4 className={styles.text} {...rest}>
    {children}
  </h4>
);

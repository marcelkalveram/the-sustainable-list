import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  id?: string;
};

export const H3 = ({ children, ...rest }: Props) => (
  <h3 className={styles.text} {...rest}>
    {children}
  </h3>
);

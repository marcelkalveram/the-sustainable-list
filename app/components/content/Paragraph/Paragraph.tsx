import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  bottomGap?: boolean;
};

export const Paragraph = ({ children, bottomGap = false }: Props) => (
  <p
    className={`${styles.paragraph} ${bottomGap ? styles.paragraphBottomGap : ""}`}
  >
    {children}
  </p>
);

import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

export const Article = ({ children }: Props) => (
  <article className={styles.article}>{children}</article>
);

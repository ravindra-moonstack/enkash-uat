import styles from "./heading.module.scss";

export interface HeadingProps {
  title: string;
}

const H1 = ({ title }: HeadingProps) => {
  return <div className={`${styles.h0} color-white`}>{title}</div>;
};

export default H1;
1;

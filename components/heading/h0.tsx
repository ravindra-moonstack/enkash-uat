import styles from "./heading.module.scss";

export interface HeadingProps {
  title: string;
}

const H0 = ({ title }: HeadingProps) => {
  return <h1 className={`${styles.h0} color-white`}>{title}</h1>;
};

export default H0;
1;

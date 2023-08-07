import { ReactNode } from "react";

export interface ButtonProps {
  isDisabled?: boolean;
  containerStyles?: string;
  title: string;
  url: string;
}

export interface RootProps {
  children: ReactNode;
}

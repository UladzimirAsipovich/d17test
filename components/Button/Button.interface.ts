import type { PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface I_Button extends PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
  theme?: "primary" | "success" | "info" | "warn" | "danger" | "basic";
  secondary?: boolean | undefined;
  outline?: boolean | undefined;
  outlineReverse?: boolean | undefined;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  as?: "button" | "div";
};
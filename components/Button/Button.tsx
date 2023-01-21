import { createElement } from 'react';
import type { FC } from 'react';
import type { I_Button } from './Button.interface';
import style from './Button.module.css';


const Button: FC<I_Button> = ({
  children,
  theme = "basic",
  secondary,
  outline,
  outlineReverse,
  size = 'md',
  as = "button",
  ...params
}): JSX.Element => {

  return createElement(as, {
    ...params, className: `
        ${style[as]} ${style[size]} ${style[theme]} 
        ${secondary ? style.secondary : ''} 
        ${outline ? style.outline : ''} 
        ${outlineReverse ? style.outlineReverse : ''} 
        ${params.className ? params.className : ''}
      `}, children);
};

export default Button;
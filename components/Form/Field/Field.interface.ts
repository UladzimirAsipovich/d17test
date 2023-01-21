import type { DetailedHTMLProps, HTMLAttributes, Dispatch, HTMLInputTypeAttribute, SetStateAction, ChangeEventHandler } from 'react';

export interface I_Field extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: HTMLInputTypeAttribute | undefined;
  label?: string | undefined;
  helpLabel?: { ok: string, wrong: string } | undefined;
  name: string;
  minLength?: number | undefined;
  maxLength?: number | undefined;
  required?: boolean | undefined;
  pattern?: RegExp | undefined;
  placeholder?: string | undefined;
  toClean?: number | undefined;
  toRequired?: Dispatch<SetStateAction<Object>> | undefined;
}

export interface I_Checker extends ChangeEventHandler<HTMLInputElement>, ChangeEventHandler<HTMLTextAreaElement> { }
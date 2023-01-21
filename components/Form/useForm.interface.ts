export type T_useForm = () => {
  clean: number;
  setClean: React.Dispatch<React.SetStateAction<number>>;
  valid: boolean;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
  setRequiredFields: React.Dispatch<React.SetStateAction<Object>>;
  cleaner: React.MouseEventHandler<HTMLButtonElement>;
  resetForm: React.FormEventHandler<HTMLFormElement>;
}
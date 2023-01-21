import { useEffect, useState } from 'react';
import type { T_useForm } from './useForm.interface';


const useForm: T_useForm = () => {

  const [clean, setClean] = useState<number>(0);
  const [valid, setValid] = useState<boolean>(false);

  const [requiredFields, setRequiredFields] = useState<Object>({});

  const cleaner: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setClean((clean + 1));
    setValid(false);

  };

  const resetForm: React.FormEventHandler<HTMLFormElement> = (element) => {
    setClean((clean + 1));
    setValid(false);
    (element.target as HTMLFormElement).reset();
  };

  useEffect(() => {
    let isValid: boolean = false;

    if (Object.values(requiredFields).length) {
      isValid = Object.values(requiredFields).every((el) => el === true);
    }

    setValid(isValid);

  }, [requiredFields]);

  return { clean, setClean, valid, setValid, setRequiredFields, cleaner, resetForm };
};

export default useForm;
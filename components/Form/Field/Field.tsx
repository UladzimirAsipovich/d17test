import React, { useEffect, useState } from 'react';
import type { I_Field, I_Checker } from './Field.interface';
import { BLR_PHONE, EMAIL_REGEXP, ONLY_RU_ENG_LETTERS_REGEXP, SAFETY_RU_ENG_TEXT_REGEXP } from '../../../middleware/_VAR';
import styles from './Field.module.css';


const Field: React.FC<I_Field> = (props): JSX.Element => {

  const [wrong, setWrong] = useState<boolean>(false); // Означает, что поле подвергалось валидации и есть статический результат
  const [checked, setChecked] = useState<boolean>(false); // Означает, что значение поля проверено

  useEffect(() => {
    if (props.toClean !== undefined) {
      setChecked(false);
      setWrong(false);

      if (props.required && props.toRequired) {
        props.toRequired((prevState) => {
          return { ...prevState, [props.name]: false };
        });
      }
    }

  }, [props.toClean]);

  useEffect(() => {
    if (props.required && props.toRequired) {
      props.toRequired((prevState) => {
        return { ...prevState, [props.name]: false };
      });
    }
  }, []);

  const checker: I_Checker = ({ currentTarget: { value } }: any): void => {
    if (value.length === 0) {
      setChecked(false);
      setWrong(false);
      return;
    }

    let testResult: boolean = false;

    if (props.pattern && (props.pattern instanceof RegExp)) {
      testResult = props.pattern.test(value);
    } else {
      // default checking by input type
      switch (props.type) {
        case 'text': {
          testResult = ONLY_RU_ENG_LETTERS_REGEXP().test(value);
          break;
        }
        case 'phone': {
          testResult = BLR_PHONE.test(value);
          break;
        }
        case 'email': {
          testResult = EMAIL_REGEXP.test(value);
          break;
        }
        case 'textarea': {
          testResult = SAFETY_RU_ENG_TEXT_REGEXP().test(value);
          break;
        }
        default: {
          testResult = true;
        }
      }
    }

    if (testResult) {
      !checked && setChecked(true);
      wrong && setWrong(false);

      if (props.required && props.toRequired) {
        props.toRequired((prevState) => {
          return { ...prevState, [props.name]: true };
        });
      }

    } else {
      checked && setChecked(false);
      !wrong && setWrong(true);

      if (props.required && props.toRequired) {
        props.toRequired((prevState) => {
          return { ...prevState, [props.name]: false };
        });
      }
    }
  };

  return (
    <div className={`${styles.field} ${wrong ? styles.wrong : ''}`}>
      {props.label ? (<label htmlFor={props.name} className={styles.name}>{props.label}</label>) : ''}
      <span className={styles.help}>
        {wrong ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_1785)">
              <path d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 9.99999C18.3332 5.39762 14.6022 1.66666 9.99984 1.66666C5.39746 1.66666 1.6665 5.39762 1.6665 9.99999C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333Z" stroke="#FF2828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 6.66666V9.99999" stroke="#FF2828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 13.3333H10.0083" stroke="#FF2828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_1785">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : null}
        {wrong ? props.helpLabel?.wrong : props.helpLabel?.ok}
      </span>

      {
        props.type === 'textarea' ? (
          <textarea
            name={props.name}
            className={styles.field_input}
            id={props.name}
            minLength={props.minLength ?? 2}
            maxLength={props.maxLength ?? 250}
            defaultValue=""
            placeholder={props.placeholder ?? ''}
            onChange={checker}
          />
        ) : null
      }

      {
        props.type === 'file' ? (
          <input
            className={styles.field_input}
            type={props.type ?? 'file'}
            name={props.name}
            id={props.name}
            defaultValue=""
            placeholder={props.placeholder ?? ''}
            onChange={checker}
          />
        ) : null
      }

      {
        (props.type !== 'textarea' && props.type !== 'file') ? (
          <input
            className={styles.field_input}
            type={props.type ?? 'text'}
            name={props.name}
            id={props.name}
            minLength={props.minLength ?? 2}
            maxLength={props.maxLength ?? 50}
            defaultValue=""
            placeholder={props.placeholder ?? ''}
            onChange={checker}
          />
        ) : null
      }
    </div>
  );
};

export default Field;
import Button from '../Button/Button';
import Field from '../Form/Field/Field';
import useForm from '../Form/useForm';
import { useRef } from 'react';
import type { I_RegularPatterns, I_FormSearch, T_searchArticles } from './FormSearch.interface';


// Компонент формы

const FormSearch: React.FC<I_FormSearch> = (props): JSX.Element => {

  const { clean, setRequiredFields, resetForm, valid, setValid } = useForm();

  const RegularPatternsRef = useRef<I_RegularPatterns>({
    searchArticles: /^((\d{10,13})\n?){1,}$/i,
    // [ otherFieldName ]: RegExp
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const fieldData = (e.target as HTMLFormElement).searchArticles.value;
    const sendingArticles: T_searchArticles = { searchArticles: [] };

    if (RegularPatternsRef.current.searchArticles.test(fieldData)) {
      sendingArticles.searchArticles = fieldData.split('\n');
    } else {
      alert('Список артикулов должен состоять только из числовых групп, причем каждая группа должна начинаться с новой строки.');
    }

    try {

      setValid(false);

      const Register = await fetch('https://germsp.ru/test-search-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': 'Bearer Vdhgor7ChDlFoNm7JezbOpwicH2RRT2s'
        },
        body: JSON.stringify(sendingArticles),
      });

      if (!Register.ok || Register.status !== 200) throw 'Error Connection';

      const result = await Register.json();

      if (props.extractResult) {
        props.extractResult(result);
      }

      resetForm(e);

    } catch (error) {
      console.error(error);

      resetForm(e);

      alert(error);
    }
  };

  return (
    <form name="searchArticlesForm" onSubmit={handleSubmit}>
      <fieldset className='flex flex-wrap -mx-2'>
        <div className="flex-1 h-full mx-2 mb-4 basis-72 sm:mb-0">
          <Field
            helpLabel={{ ok: '', wrong: 'Список артикулов должен состоять только из числовых групп, причем каждая группа должна начинаться с новой строки.' }}
            name="searchArticles"
            type='textarea'
            required
            maxLength={5000}
            placeholder={`Для поиска введите один или несколько артикулов в столбик`}
            toClean={clean}
            toRequired={setRequiredFields}
            pattern={RegularPatternsRef.current.searchArticles}
          />
        </div>
      </fieldset>
      <div className="flex mt-4 flex-nowrap font-oswald">
        <Button size='lg' theme='info' type='submit' title='Send Form' disabled={!valid}>Поиск</Button>
      </div>
    </form>
  );
};

export default FormSearch;
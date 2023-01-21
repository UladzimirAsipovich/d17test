import type { NextPage } from 'next';
import { useState } from 'react';
import FormSearch from '../components/FormSearch/FormSearch';
import type { T_articleData } from '../components/FormSearch/FormSearch.interface';
import MetaHead from '../components/MetaHead/MetaHead';
import Table from '../components/Table/Table';


const Index: NextPage = (): JSX.Element => {

  const [articleData, setArticleData] = useState<T_articleData>([] as T_articleData);

  return (
    <main className='p-4 sm:p-16'>

      <MetaHead title={'Vladimir Osipovich - Тестовое задание'} />

      <section className='mx-auto max-w-7xl'>
        <header className='mb-5 text-3xl font-semibold font-montserrat text-dm-header-txt-clr'>
          <h1>Товары</h1>
        </header>
        <div className='max-w-lg mb-12'>
          <FormSearch extractResult={setArticleData} />
        </div>

        {
          articleData.length ? (
            <div className='overflow-hidden bg-white rounded'>
              <div className='max-h-screen overflow-auto sm:max-h-96'>

                <Table articleData={articleData} />

              </div>
            </div>
          ) : (<p className='text-xl font-light text-center font-montserrat'>
            Что бы отобразить результаты поиска введите данные артикулов в поле ввода.
          </p>)
        }

      </section>
    </main>
  );
};

export default Index;

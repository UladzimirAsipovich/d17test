import type { I_Table, T_TableCellsHeader } from './Table.interface';

const tableCellsHeader: T_TableCellsHeader = ['№', 'Артикул', 'Название', 'Бренд', 'Цена, руб', 'Количество'];

const Table: React.FC<I_Table> = (props) => {

  return (
    <table className="relative w-full border-collapse table-auto border-slate-400">
      <thead className='sticky top-0 w-full bg-white'>
        <tr className='p-2 text-sm font-semibold text-left uppercase font-montserrat text-dm-table-txt-clr'>
          {
            tableCellsHeader.map((tableHead, ind) => (
              <th key={tableHead + ind}><span className='inline-block p-3'>{tableHead}</span></th>
            ))
          }
        </tr>
      </thead>
      <tbody className='pt-6 font-inter'>
        {
          props.articleData.map((el, ind) => {
            return (
              <tr key={el.article} className={'border-b-2 border-b-[#f5f4f6]'}>
                {/* TODO <td></td> можно вынести в отдельный компонент*/}
                <td><span className='inline-block p-3 text-sm font-normal text-dm-table-txt-clr'>{ind + 1}</span></td>
                <td><span className='inline-block p-3 text-sm font-normal text-dm-table-txt-clr'>{el.id}</span></td>
                <td><span className='inline-block p-3 text-sm font-normal text-dm-table-txt-clr'>{el.article}</span></td>
                <td><span className='inline-block p-3 text-sm font-normal text-dm-table-txt-clr'>{el.name}</span></td>
                <td><span className='inline-block p-3 text-sm font-normal text-dm-table-txt-clr'>{el.brand?.name}</span></td>
                <td><span className='inline-block p-3 text-sm font-normal text-dm-table-txt-clr'>{el.price}</span></td>
                <td><span className='inline-block p-3 text-sm font-normal text-dm-table-txt-clr'>{el.quantity}</span></td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
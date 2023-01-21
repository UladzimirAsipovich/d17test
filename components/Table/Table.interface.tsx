import type { T_articleData } from '../FormSearch/FormSearch.interface';

// Кортеж - ['№', 'Артикул', 'Название', 'Бренд', 'Цена, руб', 'Количество'];
export type T_TableCellsHeader = string[];

export interface I_Table {
  tableCellsHeader?: T_TableCellsHeader;
  articleData: T_articleData;
}




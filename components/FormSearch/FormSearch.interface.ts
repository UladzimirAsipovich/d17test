// Интерфейсы, связанные с формой

interface I_Brand {
  id: number,
  name: string;
}

interface I_article extends I_Brand {
  id: number,
  article: string;
  brand: I_Brand | null;
  price: number;
  quantity: number;
}

export type T_articleData = I_article[];

export type T_searchArticles = { searchArticles: number[] };

export interface I_RegularPatterns {
  [FieldName: string]: RegExp
}

export interface I_FormSearch {
  extractResult?: React.Dispatch<React.SetStateAction<T_articleData>> | undefined;
}
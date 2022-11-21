export interface IBook {
  id: string,
  title: string,
  authors: string[],
  publisher: string,
  publishedDate: string,
  pageCount: number,
  img: string,
  rating: number[],
  description: string,
  language: string,
  categories: string[],
  isbn?: string
}
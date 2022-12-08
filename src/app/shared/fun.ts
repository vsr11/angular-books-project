import { IBook } from "./interfaces";

export const Fun = {
  sortBy(data: IBook[], sort: string): IBook[]{
    if (sort === "most-read") {
      data.sort((item1, item2) => item2.count-item1.count);
    }
      if (sort === "highest-rated") {
      data.sort((item1, item2) => item2.avg-item1.avg);
    }
    return data;
},

extactBookData(bookObj: any, extraDataToAdd = {}): IBook{
  const newData = bookObj?.items?.[0];
  const onebook = {
    id: newData?.id,
    title: newData?.volumeInfo?.title,
    authors: newData?.volumeInfo?.authors,
    publisher: newData?.volumeInfo?.publisher,
    publishedDate: newData?.volumeInfo?.publishedDate,
    pageCount: newData?.volumeInfo?.pageCount,
    img: newData?.volumeInfo?.imageLinks?.thumbnail || "",
    description: newData?.volumeInfo?.description,
    language: newData?.volumeInfo?.language,
    categories: [],
    avg:0,
    count:0,
        ...extraDataToAdd,
  };
  return onebook;
},

}
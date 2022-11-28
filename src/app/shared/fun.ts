import { IBook } from "./interfaces";

export const Fun = {  

// ratingCount(arr:number[]) :number{
//     return arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
//   },
  
//  averageRating(arr:number[]):number{
//     if (this.ratingCount(arr) === 0) {
//       return 0;
//     } else {
//       return (
//         (arr[0] * 5 + arr[1] * 4 + arr[2] * 3 + arr[3] * 2 + arr[4]) /
//         this.ratingCount(arr)
//       );
//     }
//   },

  sortBy(data: IBook[], sort: string): IBook[]{
    if (sort === "most-rated") {
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
    // rating: [0, 0, 0, 0, 0],
    avg:0,
    count:0,
        ...extraDataToAdd,
  };
  return onebook;
},

}
import { Product } from "../types/products";
// Product import해야함
// products: 는 타입스크립트 정의한거를 가져와서 쓴다는 의미(:까지임)
export const products: Product[] = [
    // 타입스크립트에 형식대로 작성되어야한다
  {
    id: 1,
    name: "패딩",
    price: 100000,
    image: "/img1.jpg",
    description:"패딩 구~웃!"
  },
    {
    id: 2,
    name: "운동화",
    price: 5000000,
    image: "/img2.jpeg",
    description:"운동화 예쁘다!"
  },
];

import Image from "next/image";
import { Product } from "../types/products";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    // 상품 하나에 링크 연결하기-상세페이지 넘어가기
   < Link href={`/product/${product.id}`}>
    <div  className=" py-10 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h3>상품이름:{product.name}</h3>
      <p>가격:{product.price.toLocaleString()}원</p>
      <Image width={300} height={300} src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
    </Link>
  );
}

import { products } from "@/app/data/product";
import { Product } from "@/app/types/products";
import Image from "next/image";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item:Product)=> item.id === Number(id))
  if(!product) return <div>상품이 없어!~</div>
  return (
    <div  className="py-10 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>{product.name}</h1>
       <p>가격:{product.price.toLocaleString()}원</p>
            <Image width={300} height={300} src={product.image} alt={product.name} />
            <p>{product.description}</p>
    </div>
  );
}

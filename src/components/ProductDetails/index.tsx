import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: [];
  tags: [];
}

function ProductDetails({ product }: { product: IProduct }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetails;

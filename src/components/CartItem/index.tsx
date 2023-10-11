import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useEffect, useState } from "react";

interface ICartItem {
  id: number;
  quantity: number;
}

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

function CartItem({ id }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  useEffect(() => {
    const url = `https://api.noroff.dev/api/v1/online-shop/${id} `;
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  if (isLoading) {
    return <div>Page is loading</div>;
  }

  if (isError || !product) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <img src={product.imageUrl} alt="product picture" />
      <div>
        <Link to={`/product/${id}`}>
          <h2>{product.title}</h2>{" "}
        </Link>
        <p>Code:{product.id}</p>
        <div>{product.discountedPrice} kr</div>
      </div>

      <div>
        <button onClick={() => increaseCartQuantity(id)}>Add item</button>
        <div>{getItemQuantity(id)}</div>
        <button onClick={() => decreaseCartQuantity(id)}>Remove item</button>
      </div>

      <button onClick={() => removeFromCart(id)}>Remove all items</button>
    </div>
  );
}

export default CartItem;

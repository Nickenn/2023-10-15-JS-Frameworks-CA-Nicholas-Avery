import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "../../components/CartItem";
import { useApi } from "../../hooks/useApi";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

function Checkout() {
  const { cartItems, removeAllCartItems } = useShoppingCart();
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );
  const products = data as IProduct[];

  if (isLoading) {
    return <div>Page is loading</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      const item = products.find((i) => i.id === cartItem.id);
      return total + (item?.discountedPrice || 0) * cartItem.quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };

  return (
    <main>
      <h2>Your Shopping Cart</h2>
      <section>
        {cartItems.length === 0 ? (
          <div>
            <h3>Your Shopping Cart is empty.</h3>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        )}
        <div>
          <h2>Checkout Summary:</h2>
          <div>Subtotal: {getTotalPrice()} NOK </div>
          <div>Shipping: 169 NOK</div>
          <h3>
            Total price: <span>{getTotalPrice()}</span>{" "}
          </h3>
          <Link to="/checkout/success">
            <button onClick={() => removeAllCartItems()}>
              COMPLETE CHECKOUT
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Checkout;

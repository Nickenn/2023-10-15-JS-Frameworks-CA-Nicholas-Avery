import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <main>
      <div>
        <h1>Congratulations on your purchase!</h1>
        <div>
          <p>Youre order number is: 0769053</p>
          <p>
            An email has been sent to you with your order confirmation and
            tracking information.
          </p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
export default CheckoutSuccess;

import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

function Header() {
  const { cartQuantity } = useShoppingCart();
  return (
    <header>
        <Link>Company name and Logo</Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</Navlink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

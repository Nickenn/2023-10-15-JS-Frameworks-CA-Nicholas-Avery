import { Link } from "react-router-dom";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

interface IProductListProps {
  products: IProduct[];
}

function ProductList({ products }: IProductListProps) {
  const productItem = products.map((product) => {
    const { id, imageUrl, title, price, discountedPrice } = product;
    const discount = discountedPrice < price;
    const discountValue = (((price - discountedPrice) / price) * 100).toFixed(
      0
    );

    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt="product image" />
        </Link>
        <div>
          <h2>{title}</h2>
          {discount ? (
            <div>
              <span>{discountedPrice} kr</span>
              <span>{price} kr</span>
              <div>{discountValue} %</div>
            </div>
          ) : (
            <div>
              <span> {discountedPrice} kr</span>
            </div>
          )}

          <Link to={`/product/${id}`}>View product</Link>
        </div>
      </div>
    );
  });
  return <section>{productItem}</section>;
}

export default ProductList;

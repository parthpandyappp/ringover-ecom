import { ImCancelCircle } from "react-icons/im";
import { useProductData } from "context";

const CartProduct = ({ product }) => {
  const { dispatch } = useProductData();
  return (
    <div className="cart-product">
      <div class="cartproduct-preview">
        <img
          src={product.imgSrc.link}
          alt={product.imgSrc.alt}
          className="product-md"
        />
        <ImCancelCircle
          className="btn-cancel"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: { product },
            })
          }
        />
      </div>

      <div className="card-details">
        <div>
          <p className="text-md">{product.name}</p>
          <p className="text-sm">By {product.brand}</p>
        </div>

        <div>
          <p className="text-sm">Rs. {product.price}/-</p>
        </div>
      </div>
    </div>
  );
};

export { CartProduct };

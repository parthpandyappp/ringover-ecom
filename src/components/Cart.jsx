import { useProductData } from "context";
import { FiShoppingBag } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";
import { CartProduct } from "./CartProduct";

const Cart = () => {
  const { state } = useProductData();
  return (
    <aside class="flex-aside">
      <div class="feature-utils">
        <h5>CART ( {state.cart.length} )</h5>
        <FiShoppingBag className="text-lg" />
      </div>
      <div class="feature-hero">
        {state.cart.length ? (
          state.cart.map((item) => {
            return <CartProduct product={item.product} key={item.product.id} />;
          })
        ) : (
          <p class="text-sm">What's stopping you designer?</p>
        )}
      </div>
      <div class="feature-hero">
        <div class="feature-pills">
          <p class="text-sm items-center">
            <span>
              <GoLocation className="text-md" />
            </span>
            Home
          </p>
          <p class="text-sm items-center">
            <span>
              <AiOutlineCalendar className="text-md" />
            </span>
            Select date
          </p>
        </div>
        <button class="btn btn-tertiary">Order</button>
      </div>
    </aside>
  );
};

export { Cart };

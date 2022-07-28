import { useProductData } from "context";
import { FiShoppingBag } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

// const Cart = () => {
//   const { state } = useProductData();
//   console.log("from itself cart: ", state.cart);
//   return (
//     <div>
//       <h1>Cart</h1>
//       {state.cart &&
//         state.cart.map((item, index) => {
//           return (
//             <div key={index}>
//               <p>{item.product.name}</p>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

const Cart = () => {
  const { state, dispatch } = useProductData();
  console.log("from itself cart: ", state.cart);
  return (
    <aside class="flex-aside">
      <div class="feature-utils">
        <h5>CART ( {state.cart.length} )</h5>
        <FiShoppingBag className="text-lg" />
      </div>
      <div class="feature-hero">
        {state.cart.length ? (
          state.cart.map((item) => {
            return (
              <div class="card" key={item.product.id}>
                <img
                  src={item.product.imgSrc.link}
                  alt={item.product.imgSrc.alt}
                  class="product-md"
                />
                <div class="card-details">
                  <p class="text-md">{item.product.name}</p>
                  <p class="text-sm">{item.product.price}</p>
                </div>
                <button
                  class="btn btn-secondary"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: { product: item.product },
                    })
                  }
                >
                  remove from cart
                </button>
              </div>
            );
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

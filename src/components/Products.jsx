import { useProductData } from "context";
import { ProductCard } from "components";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
// const Products = ({ productList }) => {
//   const { dispatch } = useProductData();
//   return (
//     <div className="products-container">
//       <h1>Products</h1>
//       <div className="products-list">
//         {productList &&
//           productList.map((product, index) => {
//             return (
//               <div className="product-card" key={index}>
//                 <img src={product.imgSrc.url} alt={product.imgSrc.alt} />
//                 <p>{product.name}</p>
//                 <p>{product.price}</p>
//                 <button
//                   onClick={() =>
//                     dispatch({ type: "ADD_TO_CART", payload: { product } })
//                   }
//                 >
//                   Add to cart
//                 </button>
//                 <button
//                   onClick={() =>
//                     dispatch({ type: "REMOVE_FROM_CART", payload: { product } })
//                   }
//                 >
//                   Remove from cart
//                 </button>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

const Products = ({ productList }) => {
  const { dispatch } = useProductData();
  return (
    <article class="flex-article">
      <div class="feature-utils">
        <h5>SHOES</h5>
        <div class="feature-options">
          <BsSearch className="text-md" />
        </div>
      </div>
      <div class="card-container">
        {productList &&
          productList.map((product) => (
            <Link to={`/store/${product.id}`} className="no-decoration">
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
      </div>
    </article>
  );
};

export { Products };

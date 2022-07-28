import { ProductCard } from "components";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Products = ({ productList }) => {
  return (
    <article className="flex-article">
      <div className="feature-utils">
        <h5>SHOES</h5>
        <div className="feature-options">
          <BsSearch className="text-md" />
        </div>
      </div>
      <div className="card-container">
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

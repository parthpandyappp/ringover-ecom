import { Link } from "react-router-dom";
import { useProductData } from "context";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const SingleProduct = ({ product }) => {
  const { dispatch } = useProductData();
  return (
    <article class="flex-article">
      <div class="feature-pills">
        <Link to="/store" className="mo-decoration">
          <IoIosArrowBack className="cursor-pointer" />
        </Link>
        <h5>{product.name}</h5>
      </div>
      <div class="product-container">
        <div class="product-preview">
          <img
            src={product.imgSrc.link}
            alt={product.imgSrc.alt}
            class="product-bg"
          />
          <div class="feature-pills">
            <p class="text-sm">Rate the product</p>
            <div class="ratings">
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md" />
              <AiOutlineStar className="text-md" />
            </div>
          </div>
        </div>
        <div class="product-min-preview">
          <img
            src={product.imgSrc.link}
            alt={product.imgSrc.alt}
            class="product-md"
          />
          <img
            src={product.imgSrc.link}
            alt={product.imgSrc.alt}
            class="product-md"
          />
          <img
            src={product.imgSrc.link}
            alt={product.imgSrc.alt}
            class="product-md"
          />
        </div>
        <div class="product-feature">
          <div class="detail-section">
            <p class="text-md">{product.name}</p>
            <p class="text-sm">By {product.brand}</p>
          </div>
          <div class="detail-section">
            <div class="ratings">
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md" />
              <AiOutlineStar className="text-md" />
            </div>
            <p class="text-sm">80 reviews</p>
          </div>
          <div class="detail-section">
            <p class="text-sm">Rs. {product.price}/-</p>
            <p class="text-xs">
              Get an exclusive 20% off shopping with HDFC bank
            </p>
          </div>
          <div class="specs">
            <div class="spec-hero">
              <p class="text-md">Front&ensp;</p>
              <div class="genre">
                <p class="genre-1"></p>
                <p class="genre-2"></p>
                <p class="genre-3"></p>
              </div>
            </div>
            <div class="spec-hero">
              <p class="text-md">Middle&ensp;</p>
              <div class="genre">
                <p class="genre-1"></p>
                <p class="genre-2"></p>
                <p class="genre-3"></p>
              </div>
            </div>
            <div class="spec-hero">
              <p class="text-md">Back&ensp;</p>
              <div class="genre">
                <p class="genre-1"></p>
                <p class="genre-2"></p>
                <p class="genre-3"></p>
              </div>
            </div>
            <div class="spec-hero">
              <p class="text-md">Sole&ensp;</p>
              <div class="genre">
                <p class="genre-1"></p>
                <p class="genre-2"></p>
                <p class="genre-3"></p>
              </div>
            </div>
            <div class="spec-hero">
              <p class="text-md">Size</p>
              <div class="genre">
                <p class="genre-1 sizes">7</p>
                <p class="genre-2 sizes">8</p>
                <p class="genre-3 sizes">9</p>
                <p class="genre-3 sizes">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-h">
        <button class="btn btn-secondary">share design</button>
        <button
          class="btn btn-primary"
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", payload: { product } })
          }
        >
          add to cart
        </button>
      </div>
    </article>
  );
};

export { SingleProduct };

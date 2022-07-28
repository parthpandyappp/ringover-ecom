import { Link } from "react-router-dom";
import { useProductData } from "context";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const SingleProduct = ({ product }) => {
  const { dispatch } = useProductData();
  return (
    <article className="flex-article">
      <div className="feature-pills">
        <Link to="/store" className="mo-decoration">
          <IoIosArrowBack className="cursor-pointer" />
        </Link>
        <h5>{product.name}</h5>
      </div>
      <div className="product-container">
        <div className="product-preview">
          <img
            src={product.imgSrc.link}
            alt={product.imgSrc.alt}
            className="product-bg"
          />
          <div className="feature-pills">
            <p className="text-sm">Rate the product</p>
            <div className="ratings">
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md" />
              <AiOutlineStar className="text-md" />
            </div>
          </div>
        </div>
        <div className="product-min-preview">
          <img
            src={product.imgSrc.link}
            alt={product.imgSrc.alt}
            className="product-md"
          />
          <img
            src={product.imgSrc.link}
            alt={product.imgSrc.alt}
            className="product-md"
          />
          <img
            src={product.imgSrc.link}
            alt={product.imgSrc.alt}
            className="product-md"
          />
        </div>
        <div className="product-feature">
          <div className="detail-section">
            <p className="text-md">{product.name}</p>
            <p className="text-sm">By {product.brand}</p>
          </div>
          <div className="detail-section">
            <div className="ratings">
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md checked" />
              <AiOutlineStar className="text-md" />
              <AiOutlineStar className="text-md" />
            </div>
            <p className="text-sm">80 reviews</p>
          </div>
          <div className="detail-section">
            <p className="text-sm">Rs. {product.price}/-</p>
            <p className="text-xs">
              Get an exclusive 20% off shopping with HDFC bank
            </p>
          </div>
          <div className="specs text-right">
            <div className="spec-hero text-right">
              <p className="text-md">Front</p>
              <div className="genre">
                <p className="genre-1"></p>
                <p className="genre-2"></p>
                <p className="genre-3"></p>
              </div>
            </div>
            <div className="spec-hero ">
              <p className="text-md">Middle</p>
              <div className="genre">
                <p className="genre-1"></p>
                <p className="genre-2"></p>
                <p className="genre-3"></p>
              </div>
            </div>
            <div className="spec-hero ">
              <p className="text-md">Back</p>
              <div className="genre">
                <p className="genre-1"></p>
                <p className="genre-2"></p>
                <p className="genre-3"></p>
              </div>
            </div>
            <div className="spec-hero ">
              <p className="text-md">Sole</p>
              <div className="genre">
                <p className="genre-1"></p>
                <p className="genre-2"></p>
                <p className="genre-3"></p>
              </div>
            </div>
            <div className="spec-hero ">
              <p className="text-md">Size</p>
              <div className="genre">
                <p className="genre-1 sizes">7</p>
                <p className="genre-2 sizes">8</p>
                <p className="genre-3 sizes">9</p>
                <p className="genre-3 sizes">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-h">
        <button className="btn btn-secondary">share design</button>
        <button
          className="btn btn-primary"
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

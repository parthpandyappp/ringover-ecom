const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.imgSrc.link}
        alt={product.imgSrc.alt}
        className="product-md"
      />
      <div className="card-details">
        <p className="text-md">{product.name}</p>
        <p className="text-sm">Rs. {product.price}/-</p>
      </div>
    </div>
  );
};

export { ProductCard };

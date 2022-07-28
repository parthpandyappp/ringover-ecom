const ProductCard = ({ product }) => {
  return (
    <div class="card">
      <img
        src={product.imgSrc.link}
        alt={product.imgSrc.alt}
        class="product-md"
      />
      <div class="card-details">
        <p class="text-md">{product.name}</p>
        <p class="text-sm">{product.price}</p>
      </div>
    </div>
  );
};

export { ProductCard };

import { Cart, SingleProduct } from "components";
import { useProductData } from "context";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { pid } = useParams();
  const { state } = useProductData();

  const productObj = state.products.find((product) => product.id === pid);

  return (
    <main className="flex-main">
      <SingleProduct product={productObj} />
      <Cart />
    </main>
  );
};

export { SingleProductPage };

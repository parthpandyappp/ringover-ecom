import { useReducer } from "react";
import { useProductData } from "context";
import { productReducer, initialActionObj } from "reducers";
import { Products, Filters, Cart } from "components";
import { getFilteredByPrice, getSortedData } from "helpers";

const Store = () => {
  const [filters, filterDispatch] = useReducer(
    productReducer,
    initialActionObj
  );
  const { state } = useProductData();
  let productList = getFilteredByPrice(state.products, filters.priceRange);
  productList = getSortedData(productList, filters.sortBy);
  console.log("Gajab cart: ", state.cart);
  return (
    <main className="flex-main">
      <Filters filterDispatch={filterDispatch} filters={filters} />
      <Products productList={productList} />
      <Cart />
    </main>
  );
};

export { Store };

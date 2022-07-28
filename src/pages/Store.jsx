import { useReducer } from "react";
import { useProductData } from "context";
import { Products, Filters, Cart } from "components";
import { productReducer, initialActionObj } from "reducers";
import { getFilteredByPrice, getSortedData } from "helpers";

const Store = () => {
  const [filters, filterDispatch] = useReducer(
    productReducer,
    initialActionObj
  );

  const { state } = useProductData();
  let productList = getFilteredByPrice(state.products, filters.priceRange);
  productList = getSortedData(productList, filters.sortBy);

  return (
    <main className="flex-main">
      <Filters filterDispatch={filterDispatch} filters={filters} />
      <Products productList={productList} />
      <Cart />
    </main>
  );
};

export { Store };

import { FiFilter } from "react-icons/fi";
// const Filters = ({ filters, filterDispatch }) => {
//   return (
//     <div className="filters">
//       <div className="filter-section">
//         <h3>Sort By</h3>
//         <label>
//           <input
//             type="radio"
//             name="sort-price"
//             onChange={() =>
//               filterDispatch({
//                 type: "SORT_BY",
//                 payload: "LOW_TO_HIGH",
//               })
//             }
//             checked={filters.sortBy && filters.sortBy.includes("LOW_TO_HIGH")}
//           />
//           LOW TO HIGH
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="sort-price"
//             onChange={() =>
//               filterDispatch({
//                 type: "SORT_BY",
//                 payload: "HIGH_TO_LOW",
//               })
//             }
//             checked={filters.sortBy && filters.sortBy.includes("HIGH_TO_LOW")}
//           />
//           HIGH TO LOW
//         </label>
//       </div>
//       <div className="filter-section">
//         <h3>Filter by Price</h3>
//         <label>
//           <input
//             type="checkbox"
//             name="fl-price"
//             onChange={() =>
//               filterDispatch({
//                 type: "FILTER_BY_PRICE",
//                 payload: "PRICE_RANGE_1500_2000",
//               })
//             }
//             checked={
//               filters.priceRange &&
//               filters.priceRange.includes("PRICE_RANGE_1500_2000")
//             }
//           />
//           1500-2000
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="fl-price"
//             onChange={() =>
//               filterDispatch({
//                 type: "FILTER_BY_PRICE",
//                 payload: "PRICE_RANGE_2000_2500",
//               })
//             }
//             checked={
//               filters.priceRange &&
//               filters.priceRange.includes("PRICE_RANGE_2000_2500")
//             }
//           />
//           2000-2500
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="fl-price"
// onChange={() =>
//   filterDispatch({
//     type: "FILTER_BY_PRICE",
//     payload: "PRICE_RANGE_2500_3500",
//   })
// }
// checked={
//   filters.priceRange &&
//   filters.priceRange.includes("PRICE_RANGE_2500_3500")
// }
//           />
//           2500-3500
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="fl-price"
//             onChange={() =>
//               filterDispatch({
//                 type: "FILTER_BY_PRICE",
//                 payload: "PRICE_RANGE_3500_6000",
//               })
//             }
//             checked={
//               filters.priceRange &&
//               filters.priceRange.includes("PRICE_RANGE_3500_6000")
//             }
//           />
//           3500-6000
//         </label>
//         <button onClick={() => filterDispatch({ type: "CLEAR", payload: "" })}>
//           Clear
//         </button>
//       </div>
//     </div>
//   );
// };

const Filters = ({ filters, filterDispatch }) => {
  return (
    <div class="flex-nav">
      <div class="feature-utils">
        <h5>FILTERS</h5>
        <FiFilter />
      </div>

      <div class="filters">
        <div class="filter-section">
          <h6>Sort By</h6>
          <label class="filter-option">
            <input
              type="radio"
              name="sort-price"
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY",
                  payload: "LOW_TO_HIGH",
                })
              }
              checked={filters.sortBy && filters.sortBy.includes("LOW_TO_HIGH")}
            />
            LOW TO HIGH
          </label>
          <label class="filter-option">
            <input
              type="radio"
              name="sort-price"
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY",
                  payload: "HIGH_TO_LOW",
                })
              }
              checked={filters.sortBy && filters.sortBy.includes("HIGH_TO_LOW")}
            />
            HIGH TO LOW
          </label>
        </div>
        <div class="filter-section">
          <h6>Filter by Price</h6>
          <label class="filter-option">
            <input
              type="radio"
              name="fl-price"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_PRICE",
                  payload: "PRICE_RANGE_1500_2000",
                })
              }
              checked={
                filters.priceRange &&
                filters.priceRange.includes("PRICE_RANGE_1500_2000")
              }
            />
            1500-2000
          </label>
          <label class="filter-option">
            <input
              type="radio"
              name="fl-price"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_PRICE",
                  payload: "PRICE_RANGE_2000_2500",
                })
              }
              checked={
                filters.priceRange &&
                filters.priceRange.includes("PRICE_RANGE_2000_2500")
              }
            />
            2000-2500
          </label>
          <label class="filter-option">
            <input
              type="radio"
              name="fl-price"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_PRICE",
                  payload: "PRICE_RANGE_2500_3500",
                })
              }
              checked={
                filters.priceRange &&
                filters.priceRange.includes("PRICE_RANGE_2500_3500")
              }
            />
            2500-3500
          </label>
          <label class="filter-option">
            <input
              type="radio"
              name="fl-price"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_PRICE",
                  payload: "PRICE_RANGE_3500_6000",
                })
              }
              checked={
                filters.priceRange &&
                filters.priceRange.includes("PRICE_RANGE_3500_6000")
              }
            />
            3500-6000
          </label>
        </div>
        <div class="filter-section">
          <h6>Color</h6>
          <div class="colors">
            <p class="box-color-1"></p>
            <p class="box-color-2"></p>
            <p class="box-color-3"></p>
            <p class="box-color-4"></p>
          </div>
        </div>
        <div class="filter-section">
          <h6>Type</h6>
          <label class="filter-option">
            <input type="radio" name="fl-price" />
            Loafers
          </label>
          <label class="filter-option">
            <input type="radio" name="fl-price" />
            Sneakers
          </label>
        </div>
        <button
          class="btn btn-primary"
          onClick={() => filterDispatch({ type: "CLEAR", payload: "" })}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export { Filters };

const productReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY":
            return { ...state, sortBy: action.payload };
        case "FILTER_BY_PRICE":
            return { ...state, priceRange: action.payload };
        case "FILTER_BY_CATEGORY":
            return { ...state, category: action.payload };
        case "FILTER_BY_RATINGS":
            return { ...state, ratings: action.payload };
        case "CLEAR":
            return {
                sortBy: null,
                priceRange: null,
                category: null,
                ratings: null,
            };
        default:
            return state;
    }
};

const initialActionObj = {
    sortBy: null,
    priceRange: null,
    category: null,
    ratings: null,
}

export { productReducer, initialActionObj };
const getFilteredByPrice = (data, priceRange) => {
    if (priceRange === "PRICE_RANGE_1500_2000") {
        return [...data].filter((item) => item.price >= 1500 && item.price < 2000);
    } else if (priceRange === "PRICE_RANGE_2000_2500") {
        return [...data].filter((item) => item.price >= 2000 && item.price < 2500);
    } else if (priceRange === "PRICE_RANGE_2500_3500") {
        return [...data].filter((item) => item.price >= 2500 && item.price < 3500);
    } else if (priceRange === "PRICE_RANGE_3500_6000") {
        return [...data].filter((item) => item.price >= 3500 && item.price <= 6000);
    } else {
        return data;
    }
};

const getSortedData = (data, sortBy) => {
    if (sortBy == "LOW_TO_HIGH") {
        return [...data].sort((a, b) => a.price - b.price)
    }
    else if (sortBy == "HIGH_TO_LOW") {
        return [...data].sort((a, b) => b.price - a.price)
    }
    else {
        return data
    }
}

export { getFilteredByPrice, getSortedData };
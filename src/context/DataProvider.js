import { useContext, createContext, useReducer } from "react";
import { productData, team } from "db"

const dataContext = createContext(null);

const DataProvider = ({ children }) => {
    const dataReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                return { ...state, cart: [...state.cart, action.payload] };
            case "REMOVE_FROM_CART":
                return {
                    ...state, cart: state.cart.filter((product) =>
                        product.product.id !== action.payload.product.id
                    )
                }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(dataReducer, {
        products: productData,
        team,
        cart: [],
    })
    return (
        <dataContext.Provider value={{ state, dispatch }}>
            {children}
        </dataContext.Provider>
    )
}

const useProductData = () => useContext(dataContext);

export { useProductData, DataProvider };
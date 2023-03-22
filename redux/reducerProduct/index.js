const initialState = { loading: true, data: null, error: {} };

export const ProductsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_ALL_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case "GET_ALL_PRODUCTS_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: payload,
      };
    default:
      return {
        state,
      };
  }
};

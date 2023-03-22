// src/actions/productActions.js

import axios from "axios";

// export const getProducts =
//   ({ category, page, limit }) =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: "PRODUCTS_REQUEST" });

//       const { data } = await axios.get(
//         `https://coffeshop-be.cyclic.app/api/v1/Products`,
//         {
//           params: {
//             category: category,
//             page: page,
//             limit: limit,
//           },
//         }
//       );

//       dispatch({ type: "PRODUCTS_SUCCESS", payload: data.data });
//     } catch (error) {
//       dispatch({ type: "PRODUCTS_FAIL", payload: error.message });
//     }
//   };

const getAllProductsRequest = () => {
  return {
    type: "GET_ALL_PRODUCTS_REQUEST",
  };
};

const getAllProductsSuccess = (data) => {
  return {
    type: "GET_ALL_PRODUCTS_SUCCESS",
    payload: data,
  };
};

const getAllProductsFail = (err) => {
  return {
    type: "GET_ALL_PRODUCTS_FAIL",
    payload: err,
  };
};

export const getAllProducts = ({ category, page, limit }) => {
  return (dispatch) => {
    dispatch(getAllProductsRequest());
    return axios
      .get(`https://coffeshop-be.cyclic.app/api/v1/Products`, {
        params: {
          category: category,
          page: page,
          limit: limit,
        },
      })
      .then((res) => {
        dispatch(getAllProductsSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllProductsFail(err.response.data));
      });
  };
};

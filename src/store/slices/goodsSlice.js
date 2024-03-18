import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchGoods = createAsyncThunk("fetchGoods", async () => {
//   const { data } = await fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => json);

//   return data;
// });

const initialState = {
  cart: [],
  basket: [],
  totalPrice: 0,
  totalItems: 0,
  isLoading: false,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    addCart(state, action) {
      const item = {
        count: 1,
        ...action.payload,
      };
      const findedItem = state.cart.find(({ id }) => id === item.id);

      if (findedItem) {
        findedItem.count += 1;
        state.cart = state.cart.map((cartItem) =>
          cartItem.id === findedItem.id ? findedItem : cartItem
        );
      } else {
        state.cart.push(item);
      }
    },
    addCount(state, action) {
      state.totalItems += 1;
    },
    countTotalPrice(state, action) {},
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchGoods.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchGoods.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.goods = action.payload;
  //     });
  // },
});

export const { addCart, addCount } = goodsSlice.actions;
export default goodsSlice.reducer;

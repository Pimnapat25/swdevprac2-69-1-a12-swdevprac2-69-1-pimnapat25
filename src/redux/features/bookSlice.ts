import { BookingItem } from "../../../interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const { venue, bookDate } = action.payload;
      const index = state.bookItems.findIndex(
        (item) => item.venue === venue && item.bookDate === bookDate,
      );
      if (index >= 0) {
        state.bookItems[index] = action.payload;
      } else {
        state.bookItems.push(action.payload);
      }
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const { nameLastname, tel, venue, bookDate } = action.payload;
      state.bookItems = state.bookItems.filter(
        (item) =>
          !(
            item.nameLastname === nameLastname &&
            item.tel === tel &&
            item.venue === venue &&
            item.bookDate === bookDate
          ),
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;

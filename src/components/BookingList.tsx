"use client";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import { AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  if (bookItems.length === 0) {
    return (
      <div className="px-6 py-16 text-center text-gray-700">
        No Venue Booking
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4 px-6 py-16">
      {bookItems.map((item) => (
        <div
          key={`${item.venue}-${item.bookDate}`}
          className="rounded bg-slate-200 px-5 py-3 text-gray-900"
        >
          <div>{item.nameLastname}</div>
          <div>{item.tel}</div>
          <div>{item.venue}</div>
          <div>{item.bookDate}</div>
          <button
            type="button"
            className="mt-2 rounded bg-sky-600 px-3 py-1 text-white hover:bg-indigo-600"
            onClick={() => dispatch(removeBooking(item))}
          >
            Remove Booking
          </button>
        </div>
      ))}
    </div>
  );
}

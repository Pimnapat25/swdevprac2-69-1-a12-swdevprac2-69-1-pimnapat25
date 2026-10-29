"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Dayjs } from "dayjs";
import DateReserve from "@/components/DateReserve";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();

  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const makeBooking = () => {
    if (!nameLastname || !tel || !venue || !bookDate) return;
    dispatch(
      addBooking({
        nameLastname,
        tel,
        venue,
        bookDate: bookDate.format("YYYY/MM/DD"),
      }),
    );
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Venue Booking</h1>

      <form className="mt-8 flex max-w-sm flex-col gap-6">
        <DateReserve
          venue={venue}
          onDateChange={setBookDate}
          onNameChange={setNameLastname}
          onTelChange={setTel}
          onVenueChange={setVenue}
        />
        <Button
          type="button"
          name="Book Venue"
          variant="contained"
          onClick={makeBooking}
        >
          Book Venue
        </Button>
      </form>
    </main>
  );
}

"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Dayjs } from "dayjs";

type DateReserveProps = {
  onDateChange: (value: Dayjs | null) => void;
  onNameChange: (value: string) => void;
  onTelChange: (value: string) => void;
  onVenueChange: (value: string) => void;
  venue: string;
};

export default function DateReserve({
  onDateChange,
  onNameChange,
  onTelChange,
  onVenueChange,
  venue,
}: DateReserveProps) {
  return (
    <div className="flex flex-col gap-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Reservation Date" onChange={onDateChange} />
      </LocalizationProvider>

      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
        onChange={(e) => onNameChange(e.target.value)}
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
        onChange={(e) => onTelChange(e.target.value)}
      />

      <FormControl variant="standard">
        <InputLabel id="venue-label">Venue</InputLabel>
        <Select
          id="venue"
          labelId="venue-label"
          value={venue}
          onChange={(e) => onVenueChange(e.target.value)}
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

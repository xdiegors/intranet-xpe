import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Paper } from "@mui/material";

export default function Calendar() {
  return (
    <Paper sx={{ backgroundColor: "white", marginBottom: 3 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar />
      </LocalizationProvider>
    </Paper>
  );
}

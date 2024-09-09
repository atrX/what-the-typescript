import { format as _formatDate } from "date-fns";

const DATE_FORMATS = {
  iso: "yyyy-MM-dd'T'HH:mm:ss",
  isoShort: "yyyy-MM-dd",
  short: "dd/MM/yyyy",
};

// [x] 1) `formatDate` formats a date as a given predefined format (e.g. `short`)
// [ ] 2) `formatDate` provides autocompletion on the `format` parameter
//         => union of all predefined formats
// [ ] 3) `formatDate` formats a date as any arbitrary format
//         if no matching predefined format is found
export const formatDate = (date: Date, format: string) => {
  const formatString = DATE_FORMATS[format];
  return _formatDate(date, formatString);
};

const date = new Date(2024, 8, 16);
const formattedDate = formatDate(date, "short");
console.log(formattedDate);

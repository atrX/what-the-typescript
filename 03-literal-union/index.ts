import { format as _formatDate } from "date-fns";
import { Primitive } from "./utils";

const DATE_FORMATS = {
  iso: "yyyy-MM-dd'T'HH:mm:ss",
  isoShort: "yyyy-MM-dd",
  short: "dd/MM/yyyy",
};

type DateFormat = keyof typeof DATE_FORMATS;

// TODO: make this generic
export const formatDate = (date: Date, format: DateFormat | (string & {})) => {
  const formatString = DATE_FORMATS[format] ?? format;
  return _formatDate(date, formatString);
};

const date = new Date(2024, 8, 16);
const formattedDate = formatDate(date, "");
console.log(formattedDate);

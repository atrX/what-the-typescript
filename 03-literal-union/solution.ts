import { format as _formatDate } from "date-fns";
import { Primitive } from "./utils";

const DATE_FORMATS = {
  iso: "yyyy-MM-dd'T'HH:mm:ss",
  isoShort: "yyyy-MM-dd",
  short: "dd/MM/yyyy",
};

type DateFormat = keyof typeof DATE_FORMATS;
type LiteralUnion<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & Record<never, never>);

export const formatDate = (
  date: Date,
  format: LiteralUnion<DateFormat, string>
) => {
  const formatString = DATE_FORMATS[format] ?? format;
  return _formatDate(date, formatString);
};

const date = new Date(2024, 8, 16);
const formattedDate = formatDate(date, "short");
console.log(formattedDate);

import moment from "moment";

export const shortDate = (d) => {
  return moment(d).format("DD MMM, YYYY");
}
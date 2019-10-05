import moment from "moment";

/**
 * 
 * @param {string | Date} d
 * @return {string} 
 */
export const shortDate = (d) => {
  if(typeof(d)==="string") d = new Date(d);
  return moment(d).format("DD MMM, YYYY");
}

export const convertDate = (date) => {
  let yyyy = date.getFullYear().toString();
  let mm = (date.getMonth()+1).toString();
  let dd  = date.getDate().toString();
  let mmChars = mm.split('');
  let ddChars = dd.split('');
  let minutes = date.getMinutes().toString();
  let minutesChars = minutes.split('');
  let hours = date.getHours().toString();
  let hoursChars = hours.split('');
  return (ddChars[1]?dd:"0"+ddChars[0]) + '.' + (mmChars[1]?mm:"0"+mmChars[0]) + '.' + yyyy + ' '  + (hoursChars[1]?hours:"0"+hoursChars[0]) + ':' + (minutesChars[1]?minutes:"0"+minutesChars[0]);
}
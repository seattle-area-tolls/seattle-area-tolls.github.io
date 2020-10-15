
import Holidays from 'date-holidays';
const data = require('./data/data.json');


const isSpecialDay = (today = new Date()) => {
  if (today.getDay() === 6 || today.getDay() === 0) {
    return true;
  }

  var hd = new Holidays('US')
  const applicable = [
      "New Years",
      "Memorial Day",
      "Independence Day",
      "Labor Day",
      "Thanksgiving",
      "Christmas Day"
    ];
  return hd.isHoliday(today) && applicable.indexOf(hd.isHoliday(today).name) >= 0;
};

const getRelevantTable = async type => {
  const {
    hourToPriceRegular,
    hourToPriceWeekendHoliday,
  } = data[type];

  if (isSpecialDay()) {
    return hourToPriceWeekendHoliday;
  } else {
    return hourToPriceRegular;
  }
};

let textAns = null;
export const getText = async type => {
  if(textAns) return textAns;
  const today = new Date();
  const table = await getRelevantTable(type);
  let ans = "";

  if (type === "520") {
    ans += "The 520 bridge costs ";
  } else {
    ans += "The 99 tunnel costs ";
  }

  ans += table[today.getHours()];
  ans += ".";

  let nextHour = (today.getHours()) % 24;
  let nextChangeFound = false;
  while(!nextChangeFound) {
    nextHour = (nextHour + 1) % 24
    if(nextHour === today.getHours()){
      return ans;
    }

    nextChangeFound = table[today.getHours()] !== table[nextHour];
  }

  ans +=
      " It will cost " +
      table[nextHour] +
      " at " +
      (nextHour == 0 ? "12" : nextHour % 12) +
      " " +
      (nextHour < 12 ? "AM" : "PM") +
      ".";
  
  return ans;
};


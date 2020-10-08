import HtmlTableToJson from 'html-table-to-json';
import Holidays from 'date-holidays';
const textToHour = text => {
  const nText = text.toLowerCase().trim();
  if (nText === "midnight") return 0;
  const parts = nText.split(" ");
  let hour = parseInt(parts[0]);
  if (parts[1] == "p.m.") hour += 12;
  return hour;
};

const buildTable = async (url, firstColName, secondColName) => {
  const raw = await (await fetch(`https://cors-anywhere.herokuapp.com/${url}`)).text();
  const converted = HtmlTableToJson.parse(raw).results;
  const hourToPriceRegular = Array.from(Array(24));
  const hourToPriceWeekendHoliday = Array.from(Array(24));
  [
    {
      table: converted[0],
      col: firstColName,
      ans: hourToPriceRegular
    },
    {
      table: converted[1],
      col: secondColName,
      ans: hourToPriceWeekendHoliday
    }
  ].forEach(({ table, col, ans }) => {
    table.forEach(row => {
      const timeParts = row[col].split("to");
      const price = row["Good To Go! Pass"];
      if (timeParts.length == 1 && timeParts[0] === "All day") {
        for (var j = 0; j < 24; j++) ans[j] = price;
        return;
      }
      let i = textToHour(timeParts[0]);
      while (i != textToHour(timeParts[1])) {
        ans[i] = price;
        i = (i + 1) % 24;
      }
    });
  });

  return { hourToPriceRegular, hourToPriceWeekendHoliday };
};

const buildTables = async (type) => {
  if(type==="520"){
    const {
      hourToPriceRegular,
      hourToPriceWeekendHoliday,
    } = await buildTable(
      "https://wsdot.wa.gov/Tolling/520/520tollrates.htm",
      "Monday - Friday",
      "Weekends and Holidays**"
    );
    return {
      hourToPriceRegular,
      hourToPriceWeekendHoliday,
    }
  } else {
    const {
      hourToPriceRegular,
      hourToPriceWeekendHoliday
    } = await buildTable(
      "https://wsdot.wa.gov/tolling/sr-99-tunnel-toll-rates",
      "Monday through Friday",
      "Weekends"
    );
    return {
      hourToPriceRegular,
      hourToPriceWeekendHoliday,
    }
  }
};

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
  } = await buildTables(type);

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


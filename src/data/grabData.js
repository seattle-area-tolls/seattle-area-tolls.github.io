const HtmlTableToJson = require('html-table-to-json');
const fetch = require('node-fetch');
const fs = require('fs');
var path = require('path');


const textToHour = text => {
  const nText = text.toLowerCase().trim();
  if (nText === "midnight") return 0;
  const parts = nText.split(" ");
  let hour = parseInt(parts[0]);
  if (parts[1] == "p.m.") hour += 12;
  return hour;
};

const buildTable = async (url, firstColName, secondColName) => {
  const raw = await (await fetch(url)).text();
  const converted = HtmlTableToJson.parse(raw).results;
  const hourToPriceRegular = Array.from(Array(24));
  const hourToPriceWeekendHoliday = Array.from(Array(24));

  const config = [
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
  ];
  
  config.forEach(({ table, col, ans }) => {
    table.forEach(row => {
      const timeParts = row[col].split("to");
      const price = row["Good To Go! Pass"];
      if (timeParts.length == 1 && timeParts[0] === "All day") {
        for (var j = 0; j < 24; j++) ans[j] = price;
        return;
      }
      let i = textToHour(timeParts[0]);
      while (i !== textToHour(timeParts[1])) {
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

(async () => {
  const data = {
    520: await buildTables('520'),
    99: await buildTables('99'),
  }
  fs.writeFileSync(path.join(__dirname,'data.json'), JSON.stringify(data));
  console.log('Bridge data downloaded');
})();
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Read CSV using stream (fs.createReadStream) as per lab instruction
const CSV_FILE = path.join(__dirname, 'input_countries.csv');
const CANADA_FILE = path.join(__dirname, 'canada.txt');
const USA_FILE = path.join(__dirname, 'usa.txt');

// a. Delete canada.txt and usa.txt if they already exist using fs module
function deleteExistingFiles() {
  [CANADA_FILE, USA_FILE].forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted existing ${path.basename(file)}`);
    }
  });
}

// Convert a row object to CSV line (country,year,population)
function rowToCsvLine(row, countryOverride = null) {
  const country = countryOverride !== null ? countryOverride : row.country;
  return `${country},${row.year},${row.population}`;
}

// Write filtered data to a file
function writeToFile(filePath, rows, countryOverride = null) {
  const header = 'country,year,population';
  const lines = [header, ...rows.map((row) => rowToCsvLine(row, countryOverride))];
  fs.writeFileSync(filePath, lines.join('\n') + '\n', 'utf8');
  console.log(`Written ${rows.length} rows to ${path.basename(filePath)}`);
}

// Main: Read CSV using stream, filter Canada and USA, write to files
function main() {
  deleteExistingFiles();

  const canadaRows = [];
  const usaRows = [];

  fs.createReadStream(CSV_FILE)
    .pipe(csv())
    .on('data', (row) => {
      if (row.country === 'Canada') {
        canadaRows.push(row);
      } else if (row.country === 'United States') {
        usaRows.push(row);
      }
    })
    .on('end', () => {
      // b. Filter data of Canada and write data to canada.txt
      writeToFile(CANADA_FILE, canadaRows, 'canada');

      // c. Filter data of United States and write data to usa.txt
      writeToFile(USA_FILE, usaRows, 'usa');

      console.log('Done.');
    })
    .on('error', (err) => {
      console.error('Error reading CSV:', err.message);
      process.exit(1);
    });
}

main();

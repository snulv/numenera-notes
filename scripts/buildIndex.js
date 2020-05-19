var fs = require("fs");

function main() {
  fs.writeFileSync("./public/fileindex.json",
    JSON.stringify({
      fileIndex:fs.readdirSync("./md").map(file => file)
    })
  );
}

main();
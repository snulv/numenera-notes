var fs = require("fs");

function main() {
  fs.writeFileSync("./dist/fileindex.json",
    JSON.stringify({
      fileIndex:fs.readdirSync("./md").map(file => file)
    })
  );
}

main();
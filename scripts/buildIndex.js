var fs = require("fs");

function main() {
  fs.writeFileSync("./public/fileindex.json",
    JSON.stringify({
      fileIndex:fs.readdirSync("./public/md").map(file => file)
    })
  );
}

main();

return 0;
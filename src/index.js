#!/usr/bin/env node
// ./src/index.js event --logo="assets/logo.png" --date="30 janvier 2020 - 20:20"
const yargs = require("yargs");

const Event = require("./Event");

(function () {
  yargs.command({
    command: "event",
    describe: "create new event post.",
    builder: {
      logo: {
        describe: "municipality logo.",
        demandOption: true,
        type: "string",
      },
      date: {
        describe: "conference date.",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      const E = new Event("assets/event.png", argv.logo, argv.date);
      E.createConference().then((path) => {
        console.log("done: ", path);
      });
    },
  });
  yargs.parse();
})();

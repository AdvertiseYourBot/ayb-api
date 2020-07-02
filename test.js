const AYB = require("./src/index");
const manager = new AYB();

manager.fetchStats().then(console.log);
manager.fetchBot("681940967615627276").then(console.log);
manager.fetchCategory("17").then(console.log);
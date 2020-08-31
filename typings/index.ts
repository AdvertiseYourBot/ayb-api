/// <reference path="index.d.ts" />

import { Manager } from "ayb-api";

const ayb = new Manager();

ayb.fetchStats().then(console.log).catch(console.error);
ayb.fetchBot("681940967615627276").then(console.log).catch(console.error);
ayb.fetchCategory("17").then(console.log).catch(console.error);

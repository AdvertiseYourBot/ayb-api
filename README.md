# ayb-api
The official AYB api wrapper

## Classes

---

#### Manager
###### Methods
- fetchStats
  - Fetch overall site statistics for ayblisting.com
  - Example: ```js

    const AYB = require("ayb-api");
    const manager = new AYB();

    manager.fetchStats().then(console.log)
    /*
      {
        bots: {
          total: data.bots,
          pending: data.pending_approvals,
          percentPending,
        },
      }
    */

  ```

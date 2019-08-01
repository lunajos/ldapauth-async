# LDAP Config Test

## Test Credentials


In `ldap_config.json` change each value to the ones you would like to check. Remember, Do not commit these credentials. 

Alternativly, you can create a file called `config.json` and store them there (this file will not be commited by default). This way you can comment and uncomment these lines in `index.js` 

```
// File not commited 
//var configs = require('./config.json');; 
// Test LDAP config  from 
// https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/ 
var configs = require('./ldap_config.json');; 


```


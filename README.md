# LDAP Config Test  Credentials 

## Overview

There is a express server running. All code is in `src/`

Configurations can be in either `config.json` or `ldap_config.json`

In `ldap_config.json` change each value to the ones you would like to check. Remember, Do not commit these credentials. 

Alternativly, you can create a file called `config.json` and store them there (this file will not be commited by default). This way you can comment and uncomment these lines in `index.js` 

```

// File not commited 
//var configs = require('./config.json');; 
// Test LDAP config  from 
// https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/ 
var configs = require('./ldap_config.json');; 


```

## Usage

Create a `config.json` file in within this project and copy the content inside of `ldap_config.json`. Replace the values with your own:

- url
- bindDN
- bindCredentials
- searchBase
- searchFilter

## Running Server

- Install Dependencies: `npm install`
- Run server: `node index.js`


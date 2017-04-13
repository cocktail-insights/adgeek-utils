# AdGeek Utility Functions

Common methods to be used in AdGeek app


# Installation

```
npm install cocktail-insights/adgeek-utils
```

# Usage/Example

```javascript
const Utils = require('adgeek-utils');
const express = require('express');

const app = express();

app.get('/<some_relative_path>', (req, res) => {
  const query = req.query;
  
  // Convert query object to query string
  const queryString = Utils.objectToQueryString(query);
});
```

# API
### Utils.objectToQueryString(obj)
Convert objects to query strings. Example: 
```javascript
const queryString = Utils.objectToQueryString({
  foo: bar, 
  foo1: bar1,
});

//=> queryString = 'foo=bar&foo1=bar1'
```

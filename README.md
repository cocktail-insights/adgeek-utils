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

### Utils.cloneObject(obj)
Create a clone of an Object. This function also inherits all it's prototypes. Example:
```javascript
//test_schema.js
import SimpleSchema from 'simple-schema';



const testSchema = new SimpleSchema({ 
  id: String,
  createdAt: Date,
});

//../index.js
// We still want to keep testSchema as is so we clone it and extend the fields
const extendedSchema = Utils.cloneObject(testSchema);
extendedSchema.extend(new SimpleSchema({updatedAt: Date}));
```

### Utils.isMobile()
This is a client side version to check if the app is running on mobile. Example:
```javascript
Utils.isMobile()
//=> true
```

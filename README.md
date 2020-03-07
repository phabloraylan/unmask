# unmask

Clear number masks.

## Install

```sh
npm install @phabloraylan/unmask
```

or

```sh
yarn add @phabloraylan/unmask
```

## Testing

```sh
npm test
```

or

```sh
yarn test
```

## Usage

```javascript
const unmask = require("@phabloraylan/unmask")

unmask("123.456.789-00")
// ---> 12345678900
```

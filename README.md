# atom-coffee2-transpiler

This project implements an [Atom package transpiler]() that transpiles your package's files with coffeescript 2.

## Usage

1. Install the package

   `npm install --save atom-coffee2-transpiler`

2. Add an `atomTranspilers` entry to your `package.json`

```javascript
{
  ...
  "atomTranspilers": [
    {
      "glob": "**/*.coffee",
      "transpiler": "atom-coffee2-transpiler"
    }
  ]
}
```

## Typescript unit tests

This repository contains a TypeScript/Jasmine project for a CalculateDueDate function.

## Manually Setting up

Run 'npm install' inside the Jasmine project folder root

The `.\Package.json` file contains scripts for executing tests.

Example:

```JSON
"scripts": {
    "test": "ts-node node_modules/jasmine/bin/jasmine --config=jasmine.json",
}
```

## Test Execution

The tests are executed using

```sh
npm t
```

(which is short for `npm run test`)

To get test coverage

```sh
npm run coverage
```

If you get error - `describe is not defined`, add jasmine as shown below in `ts.config`:

```json
"compilerOptions": {
    "types": [
      "jasmine"
    ]
}
```

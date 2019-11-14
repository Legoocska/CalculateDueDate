## CalculateDueDate in TypeScript

This repository is a fork, has been gutted & re-written. It contains a TypeScript/Jasmine project for a CalculateDueDate function. I forked so I do not have to set up from scratch, since I did not have nor the time neither the resources to do that on the computer which was available for me right now. Quick check on the parent repository should show you the differences of the projects.

The function should work given the specification states that the input is always inside the working hours. If this does not fail, the output should always be inside the working hours as well.

On paper I work in TDD every single day on an Angular project, but since usually this is not true, I did not do TDD here either.

The required function is under the path:
`⁨HelloJasmine⁩ ▸ ⁨src⁩ ▸ CalculateDueDateHelper.ts`

Unit tests are there as well, lack of time made me not do threshold limit testing which would've been nice, but I still think I managed to find some edge cases to work with.
Coverage is 100% which is easy if you have a single function served by some private ones in the class file.

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

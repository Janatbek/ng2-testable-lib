# Configuring `typescript`

Edit the `tsconfig.json` file to add the required types and `es6` interpretor.
```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "rootDir": "./src",
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es6",
      "dom"
    ],
    "skipLibCheck": true,
    "types": [
      "jasmine",
      "node"
    ]
  }
}
```

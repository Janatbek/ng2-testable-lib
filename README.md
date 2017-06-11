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
# Basic sample test

Create the `sample.spec.ts` in the `src` directory :
```typescript
import { TestBed, inject, async } from '@angular/core/testing';
import { SampleModule, SampleService } from "./";
describe('SampleTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: SampleService,
                    deps: [],
                    useFactory: () => {
                        return new SampleService()
                    }
                }
            ],
            imports: [
                SampleModule
            ]
        })
    })

    it('should expect', () => {
        expect(true).toBeTruthy()
    })

    it('should expect async', async(() => {
        setTimeout(() => {
            expect(true).toBeTruthy()
        }, 500)
    }))

    it('should inject', inject([SampleService], (service: SampleService) => {
        expect(service).toBeTruthy()
    }))
})
```
Start `Karma` :
```bash
npm test
```
The test should pass successfully :
```bash
Chrome 59.0.3071 (Linux 0.0.0): Executed 3 of 3 SUCCESS (0.568 secs / 0.56 secs)
```
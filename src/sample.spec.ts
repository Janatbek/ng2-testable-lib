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
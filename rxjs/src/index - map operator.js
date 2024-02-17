import { of, from } from "rxjs";
// pipeable operators are found in different location.. operators that can be composed can be found under the 'rxjs/operators' package
import { map } from 'rxjs/operators';

// of returns an observable
// each observable has a method called pipe.. it's a common practice to chain this method on the observable
// the observer doesnot receive the values returned by the original observable.. instead it subscribes to the observable returned by the map function
// the original observable remains unaffected
// we can subscribe to the original observer and keep our new observable by breaking the pipe into a different variable
const observable = of(1,2,3,4,5).pipe(
    // the value argument here represents a single value that is pushed by the observable
    // of operator will push one at a time
    map((value) => `$${value}`)
)

// that way we can aubacribe to both observables
// const observable = of(1,2,3,4,5)

// const numbersWithSymbol = observable.pipe(
//     // the value argument here represents a single value that is pushed by the observable
//     // of operator will push one at a time
//     map((value) => `$${value}`)
// )

const subscription = observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log('complete');
    }
})

// msg is emitted after values are emitted
console.log('hello');
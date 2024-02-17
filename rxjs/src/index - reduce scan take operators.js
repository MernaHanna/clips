import { of, interval } from "rxjs";
// pipeable operators are found in different location.. operators that can be composed can be found under the 'rxjs/operators' package
import { reduce, take, scan } from 'rxjs/operators';

// reduce operator is used to accumulate values emitted from the observables
// const observable = of(1,2,3,4,5).pipe(
//     // reduce receives a function in which we define how we would like to accumulate values and a seed argument defining the start value it is optional but we should add it
//     // the first time the function runs the accumulator argument will store the seed value
//     // the value argument will refer to the emitted value
//     // the reduce operator will not push its value but will wait for the observable to complete
//     // this may introduce a problem if the observable doesn't complete
//     reduce(
//         (accumulator, value) => accumulator + value,
//         0
//     )
// )

// const observable = interval(500).pipe(
//     // the take operator solves this problem by limiting the number of the values emitted.. thus complete the observable after that limit is reached
//     // take checks if the threshold has been met before passing the value to the reduce operator and therefore should be added before the reduce operator
//     // the interval observable returns zero as the first value and thus the result is 10
//     take(5),
//     reduce(
//         (accumulator, value) => accumulator + value,
//         0
//     )
// )

// the scan operator performs the same operation as the reduce operator.. but the accumulated value will be pushed and will not wait for the other values
const observable = interval(500).pipe(
    // the take operator solves this problem by limiting the number of the values emitted.. thus complete the observable after that limit is reached
    // take checks if the threshold has been met before passing the value to the reduce operator and therefore should be added before the reduce operator
    // the interval observable returns zero as the first value and thus the result is 10
    // the scan operator accepts the same arguments as the reduce operator
    // choosing between reduce and scan will depend on when we need the value
    take(5),
    scan(
        (accumulator, value) => accumulator + value,
        0
    )
)

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
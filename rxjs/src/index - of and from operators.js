// import { of } from "rxjs";

// // both will loop through values syncronously
// // the of operator will loop through the values passed onto it
// // the of operator has an unlimmited number of arguments
// // the values are not emitted until a subscription occurs
// // the of operator will not immediately push the values we supply into its argument
// // the of operator will complete the observable once the values have been pushed
// // the of operator is an example of the operators which performs the complete phase
// // the of operator will loop through single arguments and not through an array (it will not flatten an array)
// // const observable = of([1,2,3,4,5]);
// const observable = of(1,2,3,4,5);

import { from } from "rxjs";

// a from operator can work with complex types
// we can pass in arrays, objects, iterables and promises
// it can flatten an array by pushing each item in the array
// const observable = from([1,2,3,4,5]);
// it can even flatten a string
// const observable = from('luis');
// and even a promise
// it can wait for a promise to resolve before completing the observable
const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'))

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
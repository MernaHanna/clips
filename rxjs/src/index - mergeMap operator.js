import { fromEvent, interval } from "rxjs";
import { map, mergeMap, take, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
// the mergeMap operator will subscribe to an observable if it is returned by the function passed into it
// the subscription occurred internally.. there isn't a limit to the number of subscriptions that can be made from the mergeMap operator
// this may cause a memory leak

// ajax operator can be used for http requests.. it is a creational operator and cannot be added to the pipeline
// flattening is the idea of simplifyinga complex array
// flattening observable can subscribe to an observable emitted within a pipeline
// this can be used so that an observer won't have to handle multiple observables.. eg listening to click event.. fire http request.. handle the response.. etc

// handling click events and http requests is an async operation that should be handled using observables
const button = document.querySelector('#btn');
const observable = fromEvent(
    button, 'click'
).pipe(
    // map and mergeMap are similar
    // the main difference is that the mergeMap operator will subscribe to an observable returned by the function
    mergeMap(() => {
        // return ajax.getJSON(
        //     'https://jsonplaceholder.typicode.com/todos/1'
        // )

        // the interval operator is an example of memory leakage
        // it will continue to log the value without completion
        // if we press the button more than once this problem will compound
        // the mergeMap operator has no limit to the number of the active operators
        // we should always control the lifespan of the observable
        // we can chain another pipe function here
        return interval(1000).pipe(
            tap(console.log),
            take(5)
        );
    }),
    // this method will cause the outer observer as well as the inner observable to complete
    // if the button is clicked again after 5 values are printed nothing will happen now
    // if we need to complete the inner observable only we should move the take operator to the inside function
    // take(5)
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
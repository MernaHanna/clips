import { fromEvent, interval } from "rxjs";
import { map, concatMap, take, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
// the concatMap operator is used to queue observables
// values emitted by inner observable are push to the stream
// this operator will limit the number of active observables to one like the switchMap operator
// the main difference is that it won't cancel the previous observable but instead will place the observale in a queue
// the next observable will not be subscribed to unless the current observable is complete
// if an observable is never complete.. the newer observable will never start
// if inner observables are left unmanaged we can face a trafiic jam of observables

const button = document.querySelector('#btn');
const observable = fromEvent(
    button, 'click'
).pipe(
    concatMap(() => {
        return ajax.getJSON(
            'https://jsonplaceholder.typicode.com/todos/1'
        )

        // the interval operator is an example of memory leakage
        // it will continue to log the value without completion
        // if we press the button more than once this problem will compound
        // the mergeMap operator has no limit to the number of the active operators
        // we should always control the lifespan of the observable
        // we can chain another pipe function here
        // return interval(1000).pipe(
        //     take(5),
        //     tap({
        //         complete() {
        //             console.log('inner observable completed');
        //         }
        //     }),
        // );
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
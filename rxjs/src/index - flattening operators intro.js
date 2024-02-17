import { fromEvent } from "rxjs";
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
// ajax operator can be used for http requests.. it is a creational operator and cannot be added to the pipeline
// flattening is the idea of simplifyinga complex array
// flattening observable can subscribe to an observable emitted within a pipeline
// this can be used so that an observer won't have to handle multiple observables.. eg listening to click event.. fire http request.. handle the response.. etc

// handling click events and http requests is an async operation that should be handled using observables
const button = document.querySelector('#btn');
const observable = fromEvent(
    button, 'click'
).pipe(
    map(() => {
        return ajax.getJSON(
            'https://jsonplaceholder.typicode.com/todos/1'
        )
    })
)

const subscription = observable.subscribe({
    next: (value) => {
        value.subscribe(console.log)
    },
    complete: () => {
        console.log('complete');
    }
})

// msg is emitted after values are emitted
console.log('hello');
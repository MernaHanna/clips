import { of, from, fromEvent } from "rxjs";
// pipeable operators are found in different location.. operators that can be composed can be found under the 'rxjs/operators' package
import { map, filter } from 'rxjs/operators';
// we can get a key code from a key word statement by using fromEvent creational operator

// we can use a filter operator to stop an observable from pushing data to an observer by setting a condition
// if the condition is not met the observer will never receive the value but this doesnot mean the observable has been completed..new values can be pushed
// of returns an observable
const observable = fromEvent(document, 'keydown').pipe(
    // pressing keys will capture and log codes to the console
    map((event) => event.code),
    // we need to use filter operator to capture key codes that are not space
    // we can add additional operators to the pipe function as arguments
    // the order matters each observable will get the value from the previous observable
    // if the filter operator returns false no value will be emitted and additional operators will receive no values
    filter((code) => code === "Space")


    // this method returns the event code if it is equal to space and returns null if the value is anything else
    // this solution makes the code less readable because we added logic to the pipe
    // it also make it difficult to swap the logic eg filter besides map operator is not easily swapable.. it may disrubt the whole pipe line
    // map((event) => {
    //     return event.code === "Space" ? event.code : null;
    // })
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
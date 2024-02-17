import { Observable } from "rxjs";

// observable should be updated to push data to observers by passing a function to the new observable instance
const observable = new Observable((subscriber) => {
    // // obervers have no control over observables
    // // observer function will never run if we don't call the next function
    // subscriber.next('Hello World');
    // subscriber.error('Error!');
    // subscriber.next('test');

    // // manual termination of the observable to avoid memory leakage
    // // the complete function will prevent the observable from sending any data
    // // calling a next function after the complete function will have no effect
    // subscriber.complete();
    // subscriber.next('next');

    // subscriber.next('test');
    const id = setInterval(()=>{
        subscriber.next('test');
        console.log('leak');
    }, 1000);

    // we can complete the observable without stopping the interval
    // this causes memory leak as the interval has not stopped although the observer did
    // completing an observable doesn't mean the contents of the observable have been cleared
    // memory is still allocated for the observable.. we should clear the memory
    // subscriber.complete();

    //to clear memory
    return () => {
        clearInterval(id);
    }
});

// console.log('before');

// the relationship between observables and observers is push based
// the object we pass in can have up to three functions.. 1- for habdling emitted values | 2- for handling errors | 3- for handling the completion of the observable
// observers can be partial.. we don't have to define all three functions they are optional
const subscription = observable.subscribe({
    next: (value) => {
        // this function is responsible for handling data pushed from the observable
        // value refers to data emitted by the observable
        // next can be used to handle a stream of data.. observables don't usually push data all at once
        console.log(value);
    },
    complete: () => {
        console.log('complete called');
    },
    error: (err) => {
        // if an error is thrown rxjs will terminate the observable and no further functions can be called including the complete function or emit new values
        // the err argument will store the error produced by the observable
        console.error(err);
    }
})

setTimeout(()=>{
    // the unsubscribe function will stop an observer from listening to the observable.. but it won't stop the observable and it can be used by other observers
    // we should complete or unsubscribe to prevent memory leakage and release memory
    subscription.unsubscribe();
}, 4000);
// console.log('after');
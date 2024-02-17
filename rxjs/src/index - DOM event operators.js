import { fromEvent } from "rxjs";

// the first argument is the target which represents the element in the document the observable should watch
// the second argument is the name of the event - every js event is supported
// each subscribtion will be given its own handler.. every time we call the subscribe function a new event listener is created for each subscription
// this behaviour allows for other subscriptions to remain functional and uninterrupted
// if we do not need to listen to click events we should unsubscribe or else we may experience memory leak.. it won't automatically stop
const observable = fromEvent(
    document, 'click'
);

const subscription = observable.subscribe(
    console.log
)
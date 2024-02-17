// import { interval } from "rxjs";

// interval operator is handful for count down or delay events
// but has some limitations
// it will continuously emit values.. we may want to emit one value
// or we may want to emit a value immediately with a delay for subsequent values
// const observable = interval(1000);

import { timer } from "rxjs";

// the timer operator offers more flexibility than the interval operator
// in the first argument 0 will emit the first value immediately while 1000 will emit the first value after 1 sec
// the timer will emit only one value unless a duration is defined as a second argument (interval)
const observable = timer(0, 1000);

// passing a single function will be considered a next function
const subscription = observable.subscribe(
    console.log
)
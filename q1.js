// 1.Debounce Function: Implement a debounce function that limits the frequency 
// of a function's execution when called repeatedly within a specified time frame.
//  This is useful in scenarios like resizing or scrolling events.


function debounce(func, delay) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


function logResize() {
    console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
}

const debouncedLogResize = debounce(logResize, 500);

window.addEventListener('resize', debouncedLogResize);

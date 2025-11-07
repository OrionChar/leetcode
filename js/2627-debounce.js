var debounce = function (fn, t) {
    const startMoment = Date.now();
    let finishExecutionMoment = Date.now() + t
    let timeoutId = null

    return function (...args) {
        const executionMoment = Date.now()

        if (timeoutId && executionMoment < finishExecutionMoment) {
            clearTimeout(timeoutId)
        }

        if (executionMoment > startMoment) {
            finishExecutionMoment = executionMoment + t;
            timeoutId = setTimeout(() => fn(...args), t);
        }
    }
};
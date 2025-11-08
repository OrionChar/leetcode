class EventEmitter {

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        let callbackLocation = null

        if (eventName in this.events) {
            this.events[eventName].push(callback)
            callbackLocation = this.events[eventName].length - 1
        } else {
            this.events[eventName] = [callback]
            callbackLocation = 0
        }

        return {
            unsubscribe: () => {
                this.events[eventName][callbackLocation] = null
                return undefined
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return []
        }

        const resultsExecutions = []

        this.events[eventName].forEach(callback => {
            if (callback) {
                resultsExecutions.push(callback(...args))
            }
        });

        return resultsExecutions
    }

    events = {}
}


const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick')); // [99]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit('onClick')); // []

export default function TimeLimitedCache() {};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

TimeLimitedCache.prototype.length = 0
TimeLimitedCache.prototype.timeoutId = {}

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const isKeyExit = key in this

    if (!isKeyExit) this.length++

    this[key] = value
    
    if (isKeyExit && this.timeoutId[key]) {
        clearTimeout(this.timeoutId[key])
        delete this.timeoutId[key]
    }

    this.timeoutId[key] = setTimeout(() => {
        delete this[key];
        this.length--
    }, duration)


    return isKeyExit
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return key in this ? this[key] : -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.length
};


/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
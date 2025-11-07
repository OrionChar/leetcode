export default function initGroupBy() {
Array.prototype.groupBy = function(fn) {
    const groupedArray = {}

    this.forEach((element, index, array) => {
        const key = fn(element)
        
        if (!groupedArray[key]) {
            groupedArray[key] = new Array()
        }

        groupedArray[key].push(element)
    })

    return groupedArray
};
}
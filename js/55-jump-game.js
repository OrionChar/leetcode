/**
 * ai solution 🤖
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function canJump(numbers) {
    let maxReach = 0;
    
    for (let index = 0; index < numbers.length; index++) {
        if (index > maxReach) return false;
    
        maxReach = Math.max(maxReach, index + numbers[index]);
    
        if (maxReach >= numbers.length - 1) return true;
    }

    return true;
};




// /**
//  * my attempt 😭
//  * @param {number[]} numbers
//  * @return {boolean}
//  */
// export default function canJump(numbers) {
//     let currentPositionIndex = 0
//     let currentJumpLength = numbers[currentPositionIndex]

//     if (numbers.length > 1 && currentJumpLength === 0) {
//         return false
//     }

//     while (currentPositionIndex < numbers.length - 1) {
//         const canReachTheEnd = currentPositionIndex + currentJumpLength >= numbers.length - 1
        
//         if (canReachTheEnd) {
//             return true
//         }

//         const isThereNoChoice = currentJumpLength === 1

//         if (isThereNoChoice) {
//             currentPositionIndex += currentJumpLength
//             currentJumpLength = numbers[currentPositionIndex]
//             continue
//         }

//         let maxJumpLength = null
//         let newPositionIndex = null

//         //Looking for next the bigest jump length in range [currentPositionIndex; currentPositionIndex + currentJumpLength]
//         for (let landingPosition = currentPositionIndex + 1; landingPosition <= currentPositionIndex + currentJumpLength; landingPosition++) {
//             const nextJumpLength = numbers[landingPosition]
//             const nextPosition = landingPosition + nextJumpLength

//             const isThisJumpLengthBigger = maxJumpLength === null || nextJumpLength >= maxJumpLength

//             if (isThisJumpLengthBigger) {
//                 maxJumpLength = nextJumpLength
//             }

//             // Calculate new position index jump length
//             for (maxJumpLength; maxJumpLength > 0; maxJumpLength--) {
//                 const isNewPositionNotBlock = nextPosition >= numbers.length - 1 || numbers[nextPosition] !== 0

//                 if (isNewPositionNotBlock) {
//                     newPositionIndex = landingPosition;
//                     break;
//                 }
//             }
//         }

//         const isDeadEnd = newPositionIndex === null

//         if (isDeadEnd) {
//             return false
//         }

//         currentPositionIndex = newPositionIndex
//         currentJumpLength = numbers[currentPositionIndex]
//     }

//     return true
// };
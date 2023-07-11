// https://leetcode.com/problems/two-sum/description/


// -------- SOLUTION A --------
// Complex: O(n2)
// Memory: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [];
};


// -------- SOLUTION B --------
// Complex: O(n)
// Memory: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumm = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (map.has(compliment)) return [map.get(compliment), i];
        map.set(nums[i], i);
    }
    return [];
};


// ---------- RUN -------------
const arr = [2, 3, 6, 8];
console.log(twoSumm(arr, 11));
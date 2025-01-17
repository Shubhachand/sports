// 3.Group Anagrams: Given an array of strings, group them into anagrams.
// Anagrams are the words that are formed by similar characters but in different order.
// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [    ["ate","eat","tea"],    ["nat","tan"],    ["bat"]]
// Write a function that takes an array of strings and groups them into anagrams.

function groupAnagrams(arr) {
    // Create an empty object to store the anagrams
    let anagrams = {};

    // Iterate over each string in the array
    for (let str of arr) {
        // Sort the characters in the string
        let sortedStr = str.split('').sort().join('');

        // If the sorted string is already a key in the object,
        // add the current string to its value array
        if (anagrams[sortedStr]) {
            anagrams[sortedStr].push(str);
        } else {
            // Otherwise, create a new key-value pair with the sorted string as the key
            // and an array containing the current string as the value
            anagrams[sortedStr] = [str];
        }
    }

    // Return the object with anagrams grouped by sorted strings
    return Object.values(anagrams);
}
// Test the function
let input = ["eat", "tea", "tan","hat","tah", "ate", "nat", "bat"];
let output = groupAnagrams(input);

console.log(output); // Output: [["ate","eat","tea"], ["nat","tan"], ["bat"]]



// 2.Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let seen = {};

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    if (seen[char] >= start) {
      start = seen[char] + 1;
    }

    seen[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
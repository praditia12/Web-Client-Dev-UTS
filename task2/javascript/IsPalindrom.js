function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}

export default isPalindrome;
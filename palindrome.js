function palindrome(string) {
    const palindrome = string.split("").reverse().join("");
    if (string == palindrome) {
        console.log(`${string} is palindrome`);
    } else {
        console.log(`${string} is not palindrome`);
    }
}

palindrome("hello");
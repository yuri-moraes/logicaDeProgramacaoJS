let word = prompt("Say some word so I see if it's a palindrome")
let reverseWord = ''
let i = 0 //word posicion 

for (i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i]
}

if (reverseWord === word) {
  alert("This word is a palindrome my love!")
} 
else {
  alert(
`This word isn't a palindrome my young, look:\n
Reversed Word:  ${reverseWord}
Word:  ${word}
Can't you see? Both are different!`)
} 
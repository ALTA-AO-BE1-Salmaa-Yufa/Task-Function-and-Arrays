
function isPalindrome(string) {
  // Menghapus spasi dan tanda baca
  string = string.replace(/[^a-zA-Z0-9]/g, '');

  // Mengubah string menjadi lowercase
  string = string.toLowerCase();

  // Mengecek apakah string merupakan palindrom
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

// Contoh penggunaan
const inputString = ("nababan");
if (isPalindrome(inputString)) {
  console.log("Output: true");
} else {
  console.log("Output: false");
}

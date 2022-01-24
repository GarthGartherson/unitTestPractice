function reverse(string) {
  return string.split("").reverse().join("");
}

reverse("dog");

module.exports = reverse;

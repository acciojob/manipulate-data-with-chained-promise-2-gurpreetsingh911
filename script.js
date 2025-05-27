let array = [1, 2, 3, 4];

function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(array), 3000); // 3 second initial delay
  });
}

function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    const even = arr.filter(n => n % 2 === 0);
    setTimeout(() => {
      document.getElementById("output").innerText = even.join(",");
      resolve(even);
    }, 1000); // 1 second delay
  });
}

function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    const doubled = arr.map(n => n * 2);
    setTimeout(() => {
      document.getElementById("output").innerText = doubled.join(",");
      resolve(doubled);
    }, 2000); // 2 second delay
  });
}

function main() {
  getInitialArray()
    .then(filterEvenNumbers)
    .then(multiplyByTwo)
    .catch(err => console.error("Error:", err));
}

main();

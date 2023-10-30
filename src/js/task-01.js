const ulRef = document.querySelector('#categories');
// console.log(ulRef);
const liRef = ulRef.children;
// console.log(liRef);
const arr = [...liRef];
// console.log(arr);
console.log(`Number of categories: ${arr.length}`)

const log = arr.forEach(li => {
  const titleRef = li.querySelector('h2');
  const listRef = li.querySelectorAll('li');
  console.log(`Category: ${titleRef.textContent}
  Elements: ${listRef.length}`);
});
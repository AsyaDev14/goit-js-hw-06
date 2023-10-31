const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulRef = document.querySelector(".gallery");
console.log("ulRef", ulRef);

// const markUp = images.map(elem => {
//   const { url, alt } = elem;
//   return (`
//   <li class="gallery-item">
//     <img src=${url} alt=${alt} width="300" height="200">
//   </li>
//   `);
// }).join("")
// console.log("markUp", markUp);
// ulRef.insertAdjacentHTML("afterbegin", markUp);

function markUp(image) {
  const { url, alt } = image;
  return `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" width="300" height="200">
    </li>
  `
};

function imagesTemplate(imagesArray) {
  return imagesArray.map(markUp).join('');
};

function imagesRender(imagesArray) {
  const imgList = document.querySelector('.gallery');
  imgList.insertAdjacentHTML('afterbegin', imagesTemplate(imagesArray));
};

imagesRender(images);
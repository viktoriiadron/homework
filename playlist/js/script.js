/* Initial song list */
let songs = [{
  name: 'Jingle Bells',
  isLiked: false,
}, {
  name: 'We Wish You a Merry Christmas',
  isLiked: true,
},];

window.addEventListener('load', function () {
  for (i = 0; i <= songsSource.length - 1; i++) {
    addSong(i);
  }
});

let songsList = document.querySelector('.songs');
let songsSource = [...songs];
let addBtn = document.querySelector('.add');
let addValue = document.querySelector('.input-box');
let deleteEl = document.querySelector('.delete');

addBtn.addEventListener('click', function addNewSong() {
  let element = {};
  element.name = String(addValue.value.trim());
  element.isLiked = false;
  songsSource.push(element);

  addSong(songsSource.length-1);
})

function addSong(element) {
    let li = document.createElement('li');
    li.innerHTML = songsSource[element].name;
    songsList.append(li);
    addButton('delete', li);
    addButton('like', li);

    if (songsSource[element].isLiked === true) {
      let img = document.createElement('img');
      img.src = '../images/like.svg';
      img.setAttribute('alt', 'heart');
      img.classList.add('like-icon');
      img.style.verticalAlign = 'middle';
      img.style.width = '7%';
      li.append(img);
    }
}

function addButton(className, parent) {
  let input = document.createElement('input');
  input.value = className;
  input.classList.add(`button`);
  input.classList.add(className);
  input.setAttribute('type', 'button');
  parent.append(input);
}

// не обращай внимания, я думала как добавить логику на кнопки :)
// пусть побудет здесь

// document.querySelector('.like').addEventListener('click', function like() {
//   songsSource[target].isLiked = true;
//   removeList();
//   addSong();
// })


// function removeList() {
//   for (key of document.querySelectorAll('li')) {
//     key.remove();
//   }
// }


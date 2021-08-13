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
  countSongs()
});


let songsList = document.querySelector('.songs');
let songsSource = [...songs];
let addBtn = document.querySelector('.add');
let addValue = document.querySelector('.input-box');
let count = document.querySelector('.count');

addBtn.addEventListener('click', function addNewSong() {
  if (addValue.value) {
    let element = {};
  element.name = String(addValue.value.trim());
  element.isLiked = false;
  songsSource.push(element);

  addSong(songsSource.length - 1);
  addValue.value = '';
    countSongs()
  }
})

function addSong(element) {
    let li = document.createElement('li');
    li.innerHTML = songsSource[element].name;
    songsList.append(li);
    addButton('delete', li);
  
  if (songsSource[element].isLiked) {
    addButton('unlike', li);
    document.querySelector('.unlike').style.backgroundColor = "#ff9fa4";
    document.querySelector('.unlike').classList.add('active');
    addHeart(li);
  } else {
    addButton('like', li);
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

function addHeart(li) {
  let img = document.createElement('img');
  img.src = 'images/like.svg';
  img.setAttribute('alt', 'heart');
  img.classList.add('like-icon');
  img.style.verticalAlign = 'middle';
  img.style.width = '7%';
  li.append(img);
}

songsList.addEventListener('click', function click(e) {
  let target = e.target;
  if (target.className.includes('like') && !(target.className.includes('active'))) {
    target.classList.add('active');
    target.value = 'unlike';
    let li = target.parentNode;
    addHeart(li);
  } else {
    target.classList.remove('active');
    target.value = 'like';
    target.parentNode.lastChild.remove();
  }
  
  if (target.className.includes('delete')) {
    target.parentNode.remove();
  }
  countSongs();
})

function countSongs() {
  count.innerHTML = `${songsList.childNodes.length}`  
}


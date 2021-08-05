/* Initial song list */
let songs = [{
  name: 'Jingle Bells',
  isLiked: false,
}, {
  name: 'We Wish You a Merry Christmas',
  isLiked: true,
},];

window.addEventListener('load', function () {
addSong();

});

let songsList = document.querySelector('.songs');
let songsSource = [...songs];
let addBtn = document.querySelector('.add');
let addValue = document.querySelector('.input-box');

addBtn.addEventListener('click', function addNewSong() {
  let element = {};
  element.name = String(addValue.value.trim());
  element.isLiked = false;
  //songsSource.splice(songsSource.length, 0, element);
  songsSource.push(element);
  console.log(songsSource);

  for (key of document.querySelectorAll('li')) {
    key.remove();
  }

  addSong();
})


function addSong() {
  for (i = 0; i <= songsSource.length - 1; i++) {
    let li = document.createElement('li');
    li.innerHTML = songsSource[i].name;
    // console.log(songsSource[i].name);
    songsList.append(li);
    addButton('delete', li);
    addButton('like', li);

    if (songsSource[i].isLiked === true) {
      let img = document.createElement('img');
      img.src = '../images/like.svg';
      img.setAttribute('alt', 'heart');
      img.classList.add('like-icon');
      img.style.verticalAlign = 'middle';
      img.style.width = '7%';
      li.append(img);
    }
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



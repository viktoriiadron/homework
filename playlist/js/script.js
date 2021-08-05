/* Initial song list */
let songs = [{
  name: 'Jingle Bells',
  isLiked: false,
}, {
  name: 'We Wish You a Merry Christmas',
  isLiked: true,
},];

window.addEventListener('load', function () {
  // your cade should be started here

  
});

let songsList = document.querySelector('.songs');
let songsSource = [...songs];

function addSong() {
    
  for (i = 0; i <= songs.length - 1; i++) {
    let li = document.createElement('li');
    li.innerHTML = songsSource[i].name;
    console.log(songsSource[i].name);
    songsList.append(li);
    addButton('like', li);
    addButton('delete', li);
  }
}

function addButton(className, parent) {
  let input = document.createElement('input');
  input.value = className;
  input.classList.add(`button`);
  input.classList.add(className);
  parent.append(input);
}

addSong();
//Not working yet!

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const ul = document.getElementById('picture');
const api = 'https://api.nasa.gov/planetary/apod?api_key=q72kF4az4WZ1kfkUbJjt20qpUQRfOSPCvlFlo7Ee';

fetch(api)
.then((resp) => resp.json())
.then(function(data) {
let pictures = data.hdurl;
return pictures.map(function(picture) {
  let li = createNode('li'),
      img = createNode('img');

  append(li, img);
  append(ul, li);
})
})
.catch(function(error) {
console.log(error);
});  




let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "Идет загрузка...";
document.body.prepend(div);
setTimeout(() => div.remove(), 1000);


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    let br = createNode('br');
    let br1 = createNode('br');
    let br2 = createNode('br');
    let br3 = createNode('br');
    let br4 = createNode('br');
    let br5 = createNode('br');
    let span1 = createNode('span');
    let span2 = createNode('span');
    let span3 = createNode('span');
    let span4 = createNode('span');
    let span5 = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    span1.innerHTML = `${author.email}`;
    span2.innerHTML = `${author.gender}`;
    span3.innerHTML = `${author.phone}`;
    span4.innerHTML = `${author.location.city}`;
    span5.innerHTML = `${author.dob.date} | ${author.dob.age} age`;
    append(li, img);
    append(li,br);
    append(li, span);
    append(li,br1);
    append(li, span1);
    append(li,br2);
    append(li, span2);
    append(li,br3);
    append(li, span3);
    append(li,br4);
    append(li, span4);
    append(li,br5);
    append(li, span5);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});



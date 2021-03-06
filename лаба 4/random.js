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
    let span1 = createNode('span');
    let span2 = createNode('span');
    let span3 = createNode('span');
    let span4 = createNode('span');
    let span5 = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `<br>${author.name.first} ${author.name.last}`;
    span1.innerHTML = `<br>${author.email}`;
    span2.innerHTML = `<br>${author.gender}`;
    span3.innerHTML = `<br>${author.phone}`;
    span4.innerHTML = `<br>${author.location.city}`;
    span5.innerHTML = `<br>${author.dob.date} | ${author.dob.age} age`;
    append(li, img);
    append(li, span);
    append(li, span1);
    append(li, span2);
    append(li, span3);
    append(li, span4);
    append(li, span5);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});



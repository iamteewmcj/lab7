const h1_toRemove = document.getElementsByTagName('h1')[0]
h1_toRemove.remove()

// Create head element
const head = document.createElement('head');

// Create title element and set text content
const title = document.createElement('title');
title.innerText = 'Lab7';
head.appendChild(title);

// Create h1 element and set text content and style
const h1 = document.createElement('h1');
h1.innerText = 'Lab7 Assignment';
h1.style.color = 'blue';
document.body.appendChild(h1)

// Create hr element
const hr1 = document.createElement('hr');
document.body.appendChild(hr1)

// Create h2 element and set text content and style
const h2 = document.createElement('h2');
h2.innerText = 'Task';
h2.style.color = 'red';
document.body.appendChild(h2)

// Create p element and set text content
const p1 = document.createElement('p');
p1.innerText = 'In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
document.body.appendChild(p1)

// Create ul element
const ul = document.createElement('ul');
document.body.appendChild(ul)

// Create li elements, set text content, class, and style, and append to ul element
const li1 = document.createElement('li');
li1.innerHTML = 'find elements in the DOM (<b>5 points<b/>);';
li1.classList.add('even');
li1.style.color = 'green';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerHTML = 'create/add/remove elements (<b>5 points<b/>);';
li2.classList.add('odd');
li2.style.color = 'purple';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerHTML = 'change content of the elements (<b>5 points<b/>);';
li3.classList.add('even');
li3.style.color = 'green';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerHTML = 'change styles of the elements (<b>5 points<b/>);';
li4.classList.add('odd');
li4.style.color = 'purple';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerHTML = 'change attributes of the elements (<b>5 points<b/>);';
li5.classList.add('even');
li5.style.color = 'green';
ul.appendChild(li5);

const li6 = document.createElement('li');
li6.innerHTML = 'change classes of the elements (<b>5 points<b/>).';
li6.classList.add('odd');
li6.style.color = 'purple';
ul.appendChild(li6);

// Create hr element
const hr2 = document.createElement('hr');
document.body.appendChild(hr2)

// Create h2 element and set text content and style
const h3 = document.createElement('h2');
h3.innerText = 'Submission';
h3.style.color = 'red';
document.body.appendChild(h3)

// Create p element and set text content
const p3 = document.createElement('p');
p3.innerText = 'To submit your work, follow these instructions:';
document.body.appendChild(p3)

// Create ul element
const ul2 = document.createElement('ul');
document.body.appendChild(ul2)

// Create li elements, set text content, class, and style, and append to ul2 element
const li7 = document.createElement('li');
li7.innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).';
li7.classList.add('even');
li7.style.color = 'green';
ul2.appendChild(li7);

const li8 = document.createElement('li');
li8.innerHTML = 'Clone this repository to your local machine and work inside it.';
li8.classList.add('odd');
li8.style.color = 'purple';
ul2.appendChild(li8);

const li9 = document.createElement('li');
li9.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';
li9.classList.add('even');
li9.style.color = 'green';
ul2.appendChild(li9);

const li10 = document.createElement('li');
li10.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';
li10.classList.add('odd');
li10.style.color = 'purple';
ul2.appendChild(li10);

const li11 = document.createElement('li');
li11.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';
li11.classList.add('even');
li11.style.color = 'green';
ul2.appendChild(li11);

const li12 = document.createElement('li');
li12.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b><b>5 points<b/></b>).';
li12.classList.add('odd');
li12.style.color = 'purple';
ul2.appendChild(li12);

const li13 = document.createElement('li');
li13.innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).';
li13.classList.add('even');
li13.style.color = 'green';
ul2.appendChild(li13);

const hr3 = document.createElement('hr')
document.body.appendChild(hr3)
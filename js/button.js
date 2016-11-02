//Create variable for counter
var counter = 0;

//Create a button via JavaScript
var button = document.createElement('button')
button.innerHTML = 'Click Me'
button.classList.add('btn', 'btn-default', 'btn-block')

//Create a list
var ul = document.createElement('ul')
ul.classList.add('list-group')

//Create function to make element clickable
button.addEventListener('click', function(){
    counter++
    // button.innerHTML = counter
    var li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerHTML = counter
    ul.appendChild(li)
})

//Make the button attached to dom...
document.getElementById('dom').appendChild(button)
document.getElementById('dom').appendChild(ul)

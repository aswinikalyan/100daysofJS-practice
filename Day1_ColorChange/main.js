let button = document.querySelector('button');
let body = document.querySelector('body');
const colors = ['red', 'blue', 'orange', 'black', 'white', 'green', 'aqua', 'gray', 'teal', 'maroon', 'fuchsia', 'yellow','bisque','seagreen','salmon','chocolate','firebrick','gold','hotpink','plum'];
body.style.backgroundColor = 'blue'; 
button.addEventListener('click', changeColor);


function changeColor()
{
    body.style.backgroundColor = colors[parseInt(Math.random()*colors.length)];
}
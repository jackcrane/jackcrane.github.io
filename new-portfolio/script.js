let randomColorEs = document.querySelectorAll('[rcattr]');
for(let i = 0; i < randomColorEs.length; i++)
  randomColorEs[i].style[randomColorEs[i].getAttribute("rcattr")] = '#' + Math.floor(Math.random()*16777215).toString(16);

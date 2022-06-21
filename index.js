const h1 = document.createElement('h1');
h1.textContent = 'This is an imperative way to program';
h1.classList.toggle('header');
let root = document.getElementById('root');
root.appendChild(h1);

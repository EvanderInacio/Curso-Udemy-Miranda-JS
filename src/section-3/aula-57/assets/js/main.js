
const paragrafo = document.querySelector('.paragrafo');
const ps = document.querySelectorAll('p');

const style = getComputedStyle(document.body);
const backgroundColor = style.backgroundColor;
console.log(backgroundColor);

for (let p of ps){
  p.style.backgroundColor = backgroundColor;
  p.style.color = '#FFFFFF'
  p.style.padding = '10px';
}
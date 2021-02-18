function Onouter(){
    console.log('sss');
    outer.classList.add('select');
}
function Oninner(){
    inner.classList.add('select');
}

function Onreset(){
    outer.classList.remove('select');
    inner.classList.remove('select');
}


const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
outer.addEventListener('click',Onouter);
inner.addEventListener('click',Oninner);
const reset = document.querySelector('.Reset');
reset.addEventListener('click',Onreset);


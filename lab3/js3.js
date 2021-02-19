function Changes(){
    console.log('ok');
    const S1 = document.querySelectorAll('.A1');
    const S2 = document.querySelectorAll('.A2');
    ch=!ch;
    if(ch){
        for(i=0;i<2;i++){
            S1[i].classList.remove('B2');
            S1[i].classList.add('B1');
        }
        for(i=0;i<2;i++){
            S2[i].classList.remove('B1');
            S2[i].classList.add('B2');
        }
    }else{
        for(i=0;i<2;i++){
            S1[i].classList.remove('B1');
            S1[i].classList.add('B2');
        }
        for(i=0;i<2;i++){
            S2[i].classList.remove('B2');
            S2[i].classList.add('B1');
        }
    } 
}

let ch = true;
const change = document.querySelectorAll('td');
for(i=0;i<4;i++){
    change[i].addEventListener('click',Changes);
}
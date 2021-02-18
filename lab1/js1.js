function Visibility(event){
    const details = document.querySelector('.details');
    const i = event.currentTarget.querySelector('i');
    const text=event.currentTarget.querySelector('span');
    visible = !visible;
    if(visible){
        details.classList.remove('hidden');
        i.classList= "fa fa-angle-double-down";
        text.textContent = '\xa0Hide Detail';
    }
    else{
        details.classList.add('hidden');
        i.classList= "fa fa-angle-double-right";
        text.textContent = '\xa0Show Detail';
    }

}


let visible = false;
const show = document.querySelector(".show-detail");
show.addEventListener('click',Visibility);
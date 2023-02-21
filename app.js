function onItemClick(e) {
    const element = e.target;
    const allListItems = document.querySelectorAll('li.li');
    for (let index = 0; index < allListItems.length; index++) {
        allListItems[index].classList.remove('active');
    }
    element.classList.add("active");
    document.querySelector('.number').innerHTML =  document.querySelector('.active').innerHTML;

}


document.querySelector('button').addEventListener('click', function(e){
    if(document.querySelector('.active')){
        document.querySelector('.display1').style.display = "none"
        document.querySelector('.display2').style.display = "block"
    }
    else {
        alert("You forgot to rate!")
        console.log(document.querySelector('.active'))
    }
})

const toggleBtn = document.querySelector('.toggle')
const darks= document.querySelectorAll('.dark')
toggleBtn.addEventListener('click', ()=>{if(document.querySelector('.dark')){
    for(let i of darks){
        i.classList.add('light')
        i.classList.remove('dark')
    }
    toggleBtn.innerHTML='Light'
}
    else{
        for(let i of darks){
            i.classList.add('dark')
            i.classList.remove('light')
        }
        toggleBtn.innerHTML='Dark'
    }
})
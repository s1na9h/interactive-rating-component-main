function onItemClick(e) {
    const element = e.target;
    const allListItems = document.querySelectorAll('li.li');
    for (let index = 0; index < allListItems.length; index++) {
        allListItems[index].classList.remove('active');
    }
    element.classList.add("active");
    document.querySelector('.number').innerHTML =  document.querySelector('.active').innerHTML;
    console.log(q);
}

// const selectedItem = document.querySelector('li.li.active').value;
document.querySelector('.number').innerHTML = 
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


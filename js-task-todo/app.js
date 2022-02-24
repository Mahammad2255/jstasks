var inpText = document.querySelector('#inp');
var button = document.querySelector('.btn');
var ul = document.querySelector('.ul');

button.addEventListener('click', (e) => {
    if(inpText.value.trim() != ""){
    e.preventDefault();

    var li = document.createElement('li');
    li.innerHTML = inpText.value;
    ul.appendChild(li);

    const mySpan = document.createElement('span');
    mySpan.innerHTML = 'X';
    li.appendChild(mySpan);
    }

    const close = document.querySelectorAll('span');
    for(var i=0; i<close.length; i++){
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.opacity = "0";
        })
    }
});


let input = document.querySelector('#task');
let btn = document.querySelector('.btn');
let uls = document.querySelector('.unorder'); 


btn.addEventListener('click',function mainf(){
    if(input.value === ''){
        alert('you must write something');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        uls.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'X'
        li.appendChild(span);

        span.addEventListener('click',function(){
            this.parentElement.remove();
        })

        input.value = '';
        save();
    }
})
function save(){
    localStorage.setItem('data',uls.innerHTML);
}
function showData(){
    uls.innerHTML = localStorage.getItem('data');
}
showData();
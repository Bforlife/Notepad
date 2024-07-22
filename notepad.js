const input_box=document.querySelector('#input_box');
const list_container=document.querySelector('.list_container');
const btn=document.querySelector('.btn');

// const  list =[]
btn.addEventListener('click',function () {
    // list.push(input_box.value);
       // console.log(list)

    if (input_box.value === "") {
        alert('write here pls')
    } else {
        const li = document.createElement('li')
        li.innerHTML=input_box.value;
        list_container.appendChild(li)
        const span = document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    input_box.value='';
    saveData(); 
})

list_container.addEventListener('click', function(x){
    if (x.target.tagName === 'LI') {
        x.target.classList.toggle('checked');
        saveData();
        
    } else if(x.target.tagName === 'SPAN'){ 
        x.target.parentElement.remove();
        saveData();
    }

},false); 

function saveData() {
    localStorage.setItem('e', list_container.innerHTML);
}

function showList() {
    list_container.innerHTML=localStorage.getItem('e');
}
showList()

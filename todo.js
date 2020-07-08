let form = document.getElementById('form-elem');// targets the form
let listItems = document.getElementById('list');//targets the ul

form.addEventListener('submit', addItem);
listItems.addEventListener('click', removeList)
//function for addItem
function addItem(e){
    e.preventDefault();
//console.log(1)
    //target the input text field
    let inputText = document.getElementById('input-text').value;

    //create a new li tag
    let newLi = document.createElement('li');
    //add class
    newLi.className = "list-item";
//console.log(newLi);

    let newInput = document.createTextNode(inputText);
    newLi.appendChild(newInput);
    listItems.appendChild(newLi);

    //create button

    let btn = document.createElement('button');
    btn.className = 'btn-class'
    btn.innerHTML = 'X'
    btn.addEventListener('submit', removeList);

    newLi.appendChild(btn);

    // $('.btn-class').on('click', function(){
    //     if(e.target.classList.contains('list-item')){
    //         $('.list-item').hide();
    //     }
    // })
  form.reset();
}
function removeList(e){
    if(e.target.classList.contains('btn-class')){
            let newLi = e.target.parentElement;
           newLi.remove();
        
        
    }
}
function cleartext(){
    document.getElementById('input-text').text="";
}

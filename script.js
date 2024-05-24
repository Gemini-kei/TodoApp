const list = document.getElementById('list');
const creatBtn = document.getElementById('create-btn');

let todos = [];

creatBtn.addEventListener('click', createNewTodo);

function createNewTodo() {
  // 새로운 아이템 생성하기
  const item = {
    id: new Date().getTime(),
    text: '',
    complete: false
  }
  // 배열 처음에 새로운 아이템을 추가
  todos.unshift(item);

  //요소 생성하기
  const {itemEl, inputEl, editBtnEl, removeBtnEl} = createTodoElement(item);

  //리스트 요소안에 방금 생성한 아이템 요소 추가
  list.prepend(itemEl);

    inputEl.removeAttribute('disabled');
    inputEl.focus();

}


function createTodoElement(item){
  const itemEl = document.createElement('div');
  itemEl.classList.add('item');

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';

  if (item.complete){
    itemEl.classList.add('complete');
  }

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = item.text;
  inputEl.setAttribute('disabled','');

  const actionEl = document.createElement('div');
  actionEl.classList.add('actions');

  const editBtnEl = document.createElement('button');
  editBtnEl.classList.add('material-icons');
  editBtnEl.innerText = 'edit';

  const removeBtnEl = document.createElement('button');
  removeBtnEl.classList.add('material-icons', 'remove-btn');
  removeBtnEl.innerText ='remove_circles';

  checkboxEl.addEventListener('change', ()=>{
    item.complete = checkboxEl.checked;

    if(item.complete){
      itemel.classList.add('complete');
    } else{
      itemEl.classList.remove('complete');
    }
    
  })
  inputEl.addEventListener('blur', ()=>{
    inputEl.setAttribute('disabled','');
  })
  
  inputEl.addEventListener('input', ()=>{
    item.text = inputEl.value;

  })

  editBtnEl.addEventListener('click', ()=>{
    inputEl.removeAttribute('disabled');
    inputEl.focus();
  })
  
  removeBtnEl.addEventListener('click', ()=>{
    todos = todos.filter(todo => todo.id!== item.id);
    itemEl.remove();
  })


  actionEl.append(editBtnEl);
  actionEl.append(removeBtnEl);

  itemEl.append(checkboxEl);
  itemEl.append(inputEl);
  itemEl.append(actionEl);

  return {itemEl, inputEl, editBtnEl, removeBtnEl}
}







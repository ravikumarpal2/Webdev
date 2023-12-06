 
let todoList=[
  {
      item:'Buy Milk',
      dueDate:'4/10/2023'
  },
  {
      item:'Go To College',
      dueDate:'4/10/2023'
  }
];


displayItems();
function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoDate=dateElement.value;
  let todoItem=inputElement.value;
  todoList.push({item:todoItem},{dueDate:todoDate});
  inputElement='';
  dateElement='';
  displayItems();
}



function displayItems(){

  let containerElement=document.querySelector('.todo-container');

  let newHtml='';
  for(let i=0;i<todoList.length;i++){
      let item=todoList[i].item;
      let dueDate=todoList[i].dueDate;
      newHtml+=`
          <span>${item}</span> 
          <span>${dueDate}</span> 
          <button class="btn-delete" onclick="todoList.splice(${i}, 1)
          displayItems();">Delete</button>
     `;
  }
  containerElement.innerHTML=newHtml;
};


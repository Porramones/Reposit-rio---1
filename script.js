/* 
Certo, estou fazer esse projeto com auxilio do ChatGPT, minha intenção é praticar a programação. 
Nenhuma linha desse projeto foi copiada, tudo foi feito com minha própria digitação, ao surgir
alguma dúvida eu digitava no GPT e ele me devolvia a resposta.
Ainda não entendi muito bem algumas coisas como container, mas agora que estou fazendo o JS desse
html, confesse que o const começou a fazer mais sentido na minha cabeça.
*/
// document.addEventListener('DOMContentLoaded', () => (Que porra é essa GPT?)

const taskInput = document.getElementById('task-input'); 
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

//Tive minha primeira dificuldadem escrevi o addButton com apenas um T, errando e aprendendo

function addTask () {

    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTask = document.createElement('li');
        const checkbox = document.createElement ('input');
        checkbox.type = 'checkbox'
        const taskLabel = document.createElement('span');
       //Nova parte, botão remover
        const removeButton= document.createElement('button');
        removeButton.textContent= 'Remover';
        removeButton.style.marginLeft= '10px';

        taskLabel.textContent = taskText;
        checkbox.addEventListener('change', () => {
            taskLabel.style.textDecoration = checkbox.checked  ? 'line-through' : 'none';
        })
        //Parte dois, botão remover, ainda não entendo se fazer essa adição tem que ser de fato aqui

        removeButton.addEventListener('click', () => {
        taskList.removeChild(newTask);
        });

        newTask.appendChild(checkbox);
        newTask.appendChild(taskLabel); 
        newTask.appendChild(removeButton)
        taskList.appendChild(newTask);
        taskInput.value = '';
}};
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') { 
        addTask();
    }
});
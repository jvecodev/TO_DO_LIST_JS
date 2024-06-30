
form.addEventListener('submit', function (e) {

    //Prevenir o comportamento padrão do formulário
      e.preventDefault();
      const button = e.target.querySelector('button');
      
    });

const localStoragekey = 'list';

function newFunction() {
    let input = document.querySelector('#input');

    //Verificar se o campo está vazio
    if (input.value === '') {
        alert('Preencha o campo');
    } 
    else if (ValidatgeIfItemExists(input.value)) {
        alert('Item já existente');
    }
    else {
        //Item ja criado
        let value = JSON.parse(localStorage.getItem(localStoragekey)|| '[]')
        value.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey, JSON.stringify(value));
    }
    
    showValue();
}

function ValidatgeIfItemExists(name) {

    let value = JSON.parse(localStorage.getItem(localStoragekey) || '[]');
    let procurar = value.findIndex(x => x.name === name);
    return procurar !== -1;
}



function showValue() {
    const localStoragekey = 'list';
    let value = JSON.parse(localStorage.getItem(localStoragekey) || '[]');
    let list = document.querySelector('.list');
    list.innerHTML = '';
    for (let i = 0; i < value.length; i++) {
        let item = document.createElement('li');
        list.innerHTML += ` <li>${value[i].name} <button  onclick="removeValue('${value[i].name}')" class="bi bi-check2-all"></button></li>`
    }
}

showValue();

function removeValue(name) {
    let value = JSON.parse(localStorage.getItem(localStoragekey) || '[]');       
    let procurar = value.findIndex(x => x.name === name);	
    value.splice(procurar, 1);
    localStorage.setItem(localStoragekey, JSON.stringify(value));
    showValue();

    return procurar

 }

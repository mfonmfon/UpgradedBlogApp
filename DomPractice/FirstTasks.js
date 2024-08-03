const keyBoards = document.querySelector('.key-boards, button');
console.log(keyBoards)
keyBoards.addEventListener('click', (event) =>{
    if (event.target.classList.contains('button')){
        keyBoards.append(keyBoards)
    }

})
const keyBoard = document.querySelector('.key-boards').value
console.log(keyBoard)
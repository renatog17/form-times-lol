const button = document.querySelector('button')
button.onclick = (event)=>{
    event.preventDefault()
    const listInputs = document.querySelectorAll('input')
    const role = listInputs[0].value;
    const divisao = listInputs[1].value;
    const nickname = listInputs[2].value;
    const p = document.createElement('p')
    p.innerHTML = `${role}, ${divisao}, ${nickname}`
    document.querySelector('body').appendChild(p)

}
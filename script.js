const heading = document.createElement("h1")
heading.innerText = 'Welcome to calculate me'
heading.className = 'text-center'
document.getElementById('heading').appendChild(heading)

let string = ""
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string;    
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML
        document.querySelector('input').value = string;
    }
    })
})
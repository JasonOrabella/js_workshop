 // devloper mozzila resource 
const header = document.querySelector('header');

console.log("verify header", header);


const headerTextContainer = document.querySelector ('.header__text_container');

const greetButton = document.querySelector('#header__button_greeting');


function greetuser(){
//create paragraph element
const paragraph = document.createElement ('p')
//add text to this paragraph element "hello
paragraph.innerText = 'hello';
// place 
headerTextContainer.appendChild(paragraph);
}

greetButton.addEventListener('click',greetuser);

const deleteGreetingButton = document.querySelector('#header__button_delete')

deleteGreetingButton.addEventListener('click',()=>{
    headerTextContainer.innerHTML = null;
})
const image = document.querySelector('.image');
const imageTextContainer = document.querySelector('.image__text_container')

image.addEventListener('click',()=>{
    if(imageTextContainer.children.length <1){
        const paragraph = document.createElement('p')
        paragraph.innerText = 'This computer is a great buy';
        imageTextContainer.appendChild(paragraph);
    }
    else {
        imageTextContainer = null;
    }
})
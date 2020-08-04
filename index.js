const deleteGreetingButton = document.querySelector('#header__button_delete');
const greetButton = document.querySelector('#header__button_greeting');
const header = document.querySelector('.header');
const headerTextContainer = document.querySelector('.header__text_container');
const image = document.querySelector('.image');
const imageTextContainer = document.querySelector('.image__text_container');
//this is what will fire in the browser
renderPage();
function renderPage() {
    renderHeaderInfo();
    renderImageInfo();
}
function renderHeaderInfo() {
    greetButton.addEventListener('click', () => {
        createParagraph(headerTextContainer, 'Hello');
    });
    deleteGreetingButton.addEventListener('click', () => {
        removeParagraph(headerTextContainer);
    })
}
function renderImageInfo() {
    image.addEventListener('click', () => {
        if (imageTextContainer.children.length < 1) {
            createParagraph(imageTextContainer, 'This computer is a great buy!');
        } else {
            removeParagraph(imageTextContainer);
        }
    })
}
function createParagraph(parentElement, textToDisplay) {
    const paragraph = document.createElement('p');
    paragraph.innerText = textToDisplay;
    parentElement.appendChild(paragraph);
}
function removeParagraph(parentElement) {
    parentElement.innerHTML = null;
}
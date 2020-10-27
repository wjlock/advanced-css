const container = document.querySelector('.container');
console.log(container);

container.addEventListener('mouseover', () => {
    const createNewElement = createNewElement('p', 'This is cool');

})

function createNewElement(tagName, text) {
    var content = document.createElement(tagName);
    content.textContent = text;
    document.body.appendChild(content);
    return content;
    
}
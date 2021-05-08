// Your code goes here
const docTitle = document.querySelector('title');
console.log(docTitle);

const docBody = document.querySelector('body');
console.log(docBody);

const mainNav = document.querySelector('.main-navigation')
console.log(mainNav);

const navCon = mainNav.querySelector('div');
console.log(navCon);

const docHome = docBody.children[1];
console.log(docHome);

const docContentAll = docHome.querySelectorAll('section');
console.log(docContentAll);

const sectionHeaders = document.querySelectorAll('h2');
console.log(sectionHeaders);

const docImages = document.querySelectorAll('img');
console.log(docImages);

const allButtons = document.querySelectorAll('.btn');
console.log(allButtons);

const otherHeaders = document.querySelectorAll('h4');
console.log(otherHeaders);

const allParas = docBody.querySelectorAll('p');
allParas.addEventListener('pointerover', function(Event) {
    console.log('Pointer Focused On Title');
}) 
console.log(allParas);
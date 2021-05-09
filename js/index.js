//example functions
//Element.addEventListener('click', () => { console.log('an event was created!');
//});

// Your code goes here
const docTitle = document.querySelector('title');

console.log(docTitle);

const docBody = document.querySelector('body');
docBody.onclick = function (event) {
    console.log('The body was clicked!');
}
console.log(docBody);

const mainNav = document.querySelector('.main-navigation')
console.log(mainNav);

const navCon = mainNav.querySelector('div > nav');
navCon.addEventListener('mouseover', function (event) {
    console.log('The nav container moused over');
})
console.log(navCon);

const docHome = docBody.children[1];
console.log(docHome);

const docContentAll = docHome.querySelectorAll('section');
console.log(docContentAll);

const sectionHeaders = document.querySelectorAll('h2');
const sectionArrays= Array.from(sectionHeaders);
console.log(sectionHeaders, sectionArrays);

const docImages = document.querySelectorAll('img');
console.log(docImages);

const allButtons = document.querySelectorAll('.btn');
console.log(allButtons);

const otherHeaders = document.querySelectorAll('h4');
console.log(otherHeaders);

const allParas = docBody.querySelector('p');
allParas.addEventListener('copy', function(event){
    allParas.style.textDecorationColor = 'orange';
});
console.log(allParas);



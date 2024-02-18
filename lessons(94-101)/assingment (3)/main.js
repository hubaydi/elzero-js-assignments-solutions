const div = document.querySelector('div');
const p = div.nextElementSibling;;

p.remove();

const firstDiv = document.createElement('div');
const fText = document.createTextNode('Start');
const dataValue = document.createAttribute('data-value');

firstDiv.className = 'start';
firstDiv.setAttribute('title', 'Start Element');


firstDiv.append(fText);
firstDiv.setAttributeNode(dataValue);
firstDiv.setAttribute('data-value', 'Start');
div.before(firstDiv);

//    ###

const lastDiv = document.createElement('div');
const lText = document.createTextNode('End');
const dataValue2 = document.createAttribute('data-value');

lastDiv.className = 'End';
lastDiv.setAttribute('title', 'End Element');


lastDiv.prepend(lText);
lastDiv.setAttributeNode(dataValue2);
lastDiv.setAttribute('data-value', 'End');
div.after(lastDiv);
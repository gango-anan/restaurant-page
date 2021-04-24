import { onPageLoad } from './onpageload'
import { createAboutUsContent } from './aboutus'
import { createContactContent } from './contact'
import { createMenuContent } from './menu'

const mainContentElement = document.getElementById('content');
window.onload = onPageLoad(mainContentElement);

// Utility functions.
function wipeExistingContents(parentContainer) {
  let index = parentContainer.childNodes.length - 1
  while(parentContainer.childNodes.length){
    if(parentContainer.childNodes[index].nodeName === 'UL') {
      break;
    }
    else {
      parentContainer.removeChild(parentContainer.lastChild);
    }
    index--;
  }
}

// Event Listeners.
mainContentElement.addEventListener('click', (e) => {
  const body = document.querySelector('body');
  console.log(body);
  if (e.target && e.target.matches('li#menu-item1')) {
    wipeExistingContents(mainContentElement);
    body.classList.remove('bg-dark');
    body.classList.add('bg');
    createAboutUsContent(mainContentElement);
  }
  else if (e.target && e.target.matches('li#menu-item2')) {
    wipeExistingContents(mainContentElement);
    body.classList.remove('bg');
    body.classList.add('bg-dark');
    createMenuContent(mainContentElement);
  }
  else if (e.target && e.target.matches('li#menu-item3')) {
    wipeExistingContents(mainContentElement);
    body.classList.remove('bg-dark');
    body.classList.add('bg');
    createContactContent(mainContentElement);
  }
});



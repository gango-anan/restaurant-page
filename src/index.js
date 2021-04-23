import { onPageLoad } from './onpageload'
import { createAboutUsContent } from './aboutus'
import { createContactContent } from './contact'
import { createMenuContent } from './menu'

const mainContentElement = document.getElementById('content');
window.onload = onPageLoad(mainContentElement);

// Utility functions.
function wipeExistingContents(parentContainer) {
  parentContainer.removeChild(parentContainer.lastChild);
}

// Event Listeners.
mainContentElement.addEventListener('click', (e) => {
  const body = document.getElementsByTagName('body')[0];
  const backDrop = document.createElement('div');
  backDrop.setAttribute('class', 'backdrop display-none');
  body.insertBefore(backDrop, body.firstChild);
  if (e.target && e.target.matches('li#menu-item1')) {
    backDrop.classList.add('display-none');
    createAboutUsContent(mainContentElement);
  }
  else if (e.target && e.target.matches('li#menu-item2')) {
    backDrop.classList.remove('display-none');
    createMenuContent(mainContentElement);
  }
  else if (e.target && e.target.matches('li#menu-item3')) {
    backDrop.classList.add('display-none');
    createContactContent(mainContentElement);
  }
});



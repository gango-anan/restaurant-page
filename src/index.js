import { onPageLoad } from './onpageload'
import { createAboutUsContent } from './aboutus'

const mainContentElement = document.getElementById('content');
window.onload = onPageLoad(mainContentElement);

// Utility functions.
function wipeExistingContents(parentContainer) {
  parentContainer.removeChild(parentContainer.lastChild);
}

// Event Listeners.
mainContentElement.addEventListener('click', (e) => {
  if (e.target && e.target.matches('li#menu-item1')) {
    createAboutUsContent(mainContentElement);
  }
  else if (e.target && e.target.matches('li#menu-item2')) {
    createMenuContent(mainContentElement);
  }
  else if (e.target && e.target.matches('li#menu-item3')) {
    createContactContent(mainContentElement);
  }
});



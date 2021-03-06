import createAboutUsContent from './aboutus';

function createNavBarLinks(parentElement) {
  const navBarLinks = ['About', 'Menu', 'Contact'];
  for (let index = 0; index < navBarLinks.length; index += 1) {
    const menu = document.createElement('li');
    menu.setAttribute('class', 'menu-item');
    menu.setAttribute('id', `menu-item${index + 1}`);
    menu.appendChild(document.createTextNode(navBarLinks[index]));
    parentElement.appendChild(menu);
  }
}

const onPageLoad = (mainContentElement) => {
  const body = document.querySelector('body');
  body.setAttribute('class', 'bg');
  mainContentElement.setAttribute('class', 'content');

  const tempContainer = document.createDocumentFragment();

  const restaurantName = tempContainer.appendChild(document.createElement('h1'));
  restaurantName.appendChild(document.createTextNode('G`Food Garage'));

  const navigation = tempContainer.appendChild(document.createElement('ul'));
  navigation.setAttribute('id', 'menu-bar');
  navigation.setAttribute('class', 'menu-bar');
  createNavBarLinks(navigation);

  mainContentElement.appendChild(tempContainer);
  createAboutUsContent(mainContentElement);
};

export { onPageLoad as default };
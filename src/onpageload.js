const onPageLoad = () => {
  const contentElem = document.getElementById('content');
  const tempContainer = document.createDocumentFragment();
  const restaurantName = tempContainer.appendChild(document.createElement('h1'));
  restaurantName.appendChild(document.createTextNode('G`Food Garage'));

  const navigation = tempContainer.appendChild(document.createElement('ul'));
  navigation.setAttribute('id', 'menu-bar');
  navigation.setAttribute('class', 'menu-bar');
  createNavBarLinks(navigation);

  contentElem.appendChild(tempContainer);
};

function createNavBarLinks(parentElement) {
  const navBarLinks = ['About Us', 'Menu', 'Contact'];
  for (let index = 0; index < navBarLinks.length; index++) {
    const menu = document.createElement('li');
    menu.setAttribute('class' , 'menu-item');
    menu.appendChild(document.createTextNode(navBarLinks[index]));
    parentElement.appendChild(menu);
  }
}

export { onPageLoad }
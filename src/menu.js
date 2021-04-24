function createMenuList(parentElement) {
  const menuList = ['Beef Steak', 'Chicken Katsu', "G'Special Burger", 'Smoky Salmon'];
  for (let index = 0; index < menuList.length; index += 1) {
    const item = document.createElement('div');
    item.setAttribute('class', 'list-item');
    item.setAttribute('id', `list-item${index + 1}`);

    const p = document.createElement('p');
    p.appendChild(document.createTextNode(menuList[index]));

    item.appendChild(p);
    parentElement.appendChild(item);
  }
}

const createMenuContent = (mainContentElement) => {
  const tempMenu = document.createDocumentFragment();

  const menuDiv = document.createElement('div');
  tempMenu.appendChild(menuDiv);
  menuDiv.setAttribute('class', 'menu-content');
  createMenuList(menuDiv);

  mainContentElement.appendChild(tempMenu);
};

export { createMenuContent as default };
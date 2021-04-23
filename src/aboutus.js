const createAboutUsContent = (mainContentElement) => {
  const tempAboutUs = document.createDocumentFragment();

  const aboutUsDiv = document.createElement('div');
  tempAboutUs.appendChild(aboutUsDiv);
  aboutUsDiv.setAttribute('class' , 'aboutus-content');

  const slogan1 = aboutUsDiv.appendChild(document.createElement('p'));
  slogan1.appendChild(document.createTextNode("'Eat Fresh, Stay Healthy and Productive.'"));

  const slogan2 = aboutUsDiv.appendChild(document.createElement('p'));
  slogan2.appendChild(document.createTextNode("Life is too short for boring food."));

  mainContentElement.appendChild(tempAboutUs);
}

export { createAboutUsContent }
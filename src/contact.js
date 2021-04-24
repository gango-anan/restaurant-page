const createContactContent = (mainContentElement) => {
  const tempContact = document.createDocumentFragment();

  const contactDiv = document.createElement('div');
  tempContact.appendChild(contactDiv);
  contactDiv.setAttribute('class', 'aboutus-contact');

  const contactUs = contactDiv.appendChild(document.createElement('h2'));
  contactUs.appendChild(document.createTextNode('CONTACT US'));

  const contactDetails = contactDiv.appendChild(document.createElement('p'));
  contactDetails.appendChild(document.createTextNode('You can contact us by email or phone for more info.'));

  const email = contactDiv.appendChild(document.createElement('p'));
  email.appendChild(document.createTextNode('Email: info@galisoft.com'));

  const tel = contactDiv.appendChild(document.createElement('p'));
  tel.appendChild(document.createTextNode('Tel: +256 000-000-000'));

  mainContentElement.appendChild(tempContact);
};

export { createContactContent as default };
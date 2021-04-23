import { onPageLoad } from './onpageload'
const mainContentElement = document.getElementById('content');
window.onload = onPageLoad(mainContentElement);
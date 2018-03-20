import setupHome from './setup';
import setupMenu from './setupMenu';
import setupContact from './setupContact';

document.body.style.background = 'radial-gradient(#C7CDCB, #000)';

const content = document.querySelector('#content');
content.style.height= '100vh';
content.style.textAlign= 'center';

let tabs = document.createElement('nav');
tabs.setAttribute('class', 'main-tabs');

let tabList = document.createElement('ul');
tabs.appendChild(tabList);
tabs.style.margin='0';
tabs.style.padding='0';
tabs.style.display='flex';
tabs.style.flexWrap='center';
tabs.style.listStyle= 'none';

let tab1Li = document.createElement('li'); 
tab1Li.style.border='2px solid black';

let tab1a = document.createElement('a');
tab1a.setAttribute('id', 'home');
tab1a.setAttribute('href', '#');
tab1a.textContent = 'HOME';
tab1a.style.textDecoration= 'none';
tab1a.style.color= '#413c42';
tab1a.style.padding= '1.25rem 0.5rem';
tab1a.style.fontWeight= 'bold';

tab1Li.appendChild(tab1a);
tabs.appendChild(tab1Li);

let tab2Li = document.createElement('li'); 
tab2Li.style.border='2px solid black';

let tab2a = document.createElement('a');
tab2a.setAttribute('id', 'menu');
tab2a.setAttribute('href', '#');
tab2a.textContent = 'MENU';
tab2a.style.textDecoration= 'none';
tab2a.style.color= '#413c42';
tab2a.style.padding= '1.25rem 0.5rem';
tab2a.style.fontWeight= 'bold';

tab2Li.appendChild(tab2a);
tabs.appendChild(tab2Li);

let tab3Li = document.createElement('li'); 
tab3Li.style.border='2px solid black';

let tab3a = document.createElement('a');
tab3a.setAttribute('id', 'contact');
tab3a.setAttribute('href', '#');
tab3a.textContent = 'CONTACT';
tab3a.style.textDecoration= 'none';
tab3a.style.color= '#413c42';
tab3a.style.padding= '1.25rem 0.5rem';
tab3a.style.fontWeight= 'bold';

tab3Li.appendChild(tab3a);
tabs.appendChild(tab3Li);

document.body.prepend(tabs);

setupHome();

tab1Li.addEventListener('click', setupHome);
tab2Li.addEventListener('click', setupMenu);
tab3Li.addEventListener('click', setupContact);


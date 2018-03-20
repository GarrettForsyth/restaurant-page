export default function setupMenu() {

  const homeTab = document.querySelector('#home');
  const menuTab = document.querySelector('#menu');
  const contactTab = document.querySelector('#contact');
  

  homeTab.style.color= '#413c42';
  menuTab.style.color='red';
  contactTab.style.color= '#413c42';

  const content = document.querySelector('#content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  let headline = document.createElement('div');
  headline.textContent = 'MENU';
  headline.setAttribute('class', 'headlilne');
  headline.style.fontSize= '5rem';
  headline.style.color='#fff';

  content.appendChild(headline);

  let menu = document.createElement('ul'); 
  menu.style.listStyle = 'none';
  menu.style.textAlign = 'left';
  content.appendChild(menu);

  let menuItems = [ 'Peanut Butter', 'Cheese', 'Baby Carrots', 'Yogurt', 'Chicken', 'Bones', "All dishes are served with a side order of the finest kibble"];

  menuItems.forEach( menuItem => {
      let menuOption = document.createElement('li');
      menuOption.textContent = menuItem;
      menuOption.style.fontSize = '2rem';
      menu.appendChild(menuOption);
  });


}

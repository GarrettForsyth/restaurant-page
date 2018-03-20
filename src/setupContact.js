export default function setupContact(){
  const homeTab = document.querySelector('#home');
  const menuTab = document.querySelector('#menu');
  const contactTab = document.querySelector('#contact');
  

  homeTab.style.color= '#413c42';
  menuTab.style.color= '#413c42';
  contactTab.style.color='red';

  const content = document.querySelector('#content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  let headline = document.createElement('div');
  headline.textContent = 'Contact';
  headline.setAttribute('class', 'headlilne');
  headline.style.fontSize= '5rem';
  headline.style.color='#fff';

  content.appendChild(headline);

  let contacts = document.createElement('ul'); 
  contacts.style.width= "400px";
  contacts.style.margin= 'auto';
  contacts.style.marginTop= '100px';
  contacts.style.listStyle = 'dash';
  contacts.style.textAlign = 'left';
  content.appendChild(contacts);

  let contactItems = ['walk around with a leash', 'shake a bag of dog treats', 'ball', 'howl at the moon', 'hmu on my cell'];

  contactItems.forEach( contactItem => {
      let contactOption = document.createElement('li');
      contactOption.textContent = contactItem;
      contactOption.style.fontSize = '1.2rem';
      contacts.appendChild(contactOption);
  });

}

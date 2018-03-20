export default function setupHome() {


  const homeTab = document.querySelector('#home');
  const menuTab = document.querySelector('#menu');
  const contactTab = document.querySelector('#contact');
  
  homeTab.style.color='red';
  menuTab.style.color= '#413c42';
  contactTab.style.color= '#413c42';

  const content = document.querySelector('#content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }


  let hero = document.createElement('img');
  hero.setAttribute('src', 'glasses.jpg');
  hero.setAttribute('alt', 'toasting wineglasses');
  hero.setAttribute('class', 'hero');
  hero.style.width = '500px';
  hero.style.height = 'auto';
  hero.style.margin = 'auto';
  hero.style.marginTop = '50px';

  content.appendChild(hero);

  let headline = document.createElement('div'); 
  headline.setAttribute('class', 'headline');
  headline.textContent = 'Bob\'s Diner';
  headline.style.fontSize="4rem";
  content.style.color='#fff';


  content.appendChild(headline);

  let reviews = document.createElement('ul');
  reviews.style.listStyle = 'none';
  reviews.setAttribute('class', 'reviews');

  let review1 = document.createElement('li');
  review1.textContent = 'Good food!';

  let review2 = document.createElement('li');
  review2.textContent = 'Great service!';

  let review3 = document.createElement('li');
  review3.textContent = 'Cozy atomosphere!';

  let review4 = document.createElement('li');
  review4.textContent = 'I didn\'t think a restaurant run by dogs would work, but here we are!';

  reviews.appendChild(review1);
  reviews.appendChild(review2);
  reviews.appendChild(review3);
  reviews.appendChild(review4);

  content.appendChild(reviews);
}


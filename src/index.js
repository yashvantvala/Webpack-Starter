import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laugh-img');
laughImg.src = laughing;

const btn = document.getElementById('jokebtn');

btn.addEventListener('click', generateJoke);

generateJoke();
import { getUser } from '../userUtils.js';

const resultImage1 = document.querySelector('#top');
const resultImage2 = document.querySelector('#middle');
const resultImage3 = document.querySelector('#bottom');
const resultText = document.querySelector('#text');

const user = getUser();

const muchRich = `My GOD. ${user.name} has won the lottery! They decide to open a large floating bodega off the coast of Theed with their ${user.gold} credits. Hopefully they enjoy the rest of their ${user.hp} life points.`;
const stillQuiteRich = `Well ${user.name} definitely made a nice living while on their adventure. They won't be moving to Endoor for a permanent hunting vacation anytime soon. Instead, ${user.name} decides to spend their ${user.gold} credits on a brand new Star Cruiser with trim options. You go ${user.name} and live that ${user.hp} life points up`;
const eatTheRich = `Suffice to say that ${user.name} is alive. That ${user.gold} credits wont make it too far, but at least they got something for their time. Get a hair cut and maybe go vegan to boost your health`;

if (user.gold < 100) {
    resultText.textContent = eatTheRich;
    resultImage3.classList.remove('hidden');
} else if (user.gold > 100 && user.gold < 200) {
    resultText.textContent = stillQuiteRich;
    resultImage2.classList.remove('hidden');
} else if (user.gold > 300) {
    resultText.textContent = muchRich;
    resultImage1.classList.remove('hidden');
}
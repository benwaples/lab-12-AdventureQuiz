import allQuests from '../quest-data.js';

const questList = document.querySelector('#quest-list');

for (let i = 0; i < allQuests.length; i++) {
    const quest = allQuests[i];
    
    const questLink = document.createElement('a');
    questLink.textContent = quest.title;
    questLink.href = '/quest/?id=' + quest.id;

    questList.append(questLink);
}


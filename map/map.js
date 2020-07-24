import { getUser } from '../userUtils.js';
import allQuests from '../quest-data.js';

const questList = document.querySelector('#quest-list');

for (let i = 0; i < allQuests.length; i++) {
    const user = getUser();

    const quest = allQuests[i];
    
    if (user.completed[quest.id]) {
        const finishedQuest = document.createElement('span');
        finishedQuest.textContent = quest.title;
        finishedQuest.href = '/quest/?id=' + quest.id;

        questList.append(finishedQuest);
    } else {
        const questLink = document.createElement('a');
        questLink.textContent = quest.title;
        questLink.href = '/quest/?id=' + quest.id;
    
        questList.append(questLink);

    }
    
}


import { getUser } from '../userUtils.js';
import allQuests from '../quest-data.js';

const questList = document.querySelector('#quest-list');
const user = getUser();


let conqueredQuests = 0;

for (let i = 0; i < allQuests.length; i ++) {
    const quest = allQuests[i];
    if (user.completed[quest.id]) {
        conqueredQuests++;
    }
}

if (user.hp <= 0) {
    alert(`${user.name} of the ${user.class} clan has perished. You won't be missed dirtbag!`);
    window.location = '../index.html';
} else if (conqueredQuests === allQuests.length) {
    alert(`${user.name} of the ${user.class} clan has survived the quests!.`);
    window.location = '../results/index.html';
} else {
    for (let i = 0; i < allQuests.length; i++) {
    
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
}


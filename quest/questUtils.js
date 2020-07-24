import { getUser, setUser } from '../userUtils.js';

export function renderQuest(data) {
    const questSectionEl = document.createElement('section');

    const titleEL = document.createElement('div');
    titleEL.textContent = data.title;
    questSectionEl.appendChild(titleEL);

    const img = document.createElement('img');
    img.src = data.image;
    questSectionEl.appendChild(img);

    const formEl = document.createElement('form');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = data.description;
    formEl.append(descriptionDiv);

    for (let i = 0; i < data.choices.length; i++) {
        const choice = data.choices[i];

        const labelEl = document.createElement('label');
        const choiceDes = document.createElement('div');

        choiceDes.textContent = choice.description;
        const inputEl = document.createElement('input');

        inputEl.type = 'radio';
        inputEl.name = 'choices';
        inputEl.value = choice.id;

        labelEl.append(choiceDes, inputEl);
        formEl.append(labelEl);
    }

    const button = document.createElement('button');
    button.textContent = 'Submit';
    formEl.addEventListener('submit', (e) =>{
        e.preventDefault();

        const formData = new FormData(formEl);

        const userChoiceId = formData.get('choices');
        const choiceResult = findById(data.choices, userChoiceId);

        const userData = getUser();

        userData.gold += choiceResult.gold;
        userData.hp += choiceResult.hp;
        userData.completed[data.id] = true;

        setUser(userData);

        const resultScriptDiv = document.querySelector('#results');
        resultScriptDiv.textContent = choiceResult.result;

        const nextQuestButt = document.querySelector('#next-quest');
        nextQuestButt.classList.remove('hidden');


    });
    formEl.append(button);
    
    questSectionEl.append(formEl);



    return questSectionEl;
}

export function findById(array, id) {
    for (let i = 0; i < array.length; i ++) {
        if (array[i].id === id && Array.isArray(array))
            return array[i];
    }
}
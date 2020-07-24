import { findById, renderQuest } from './questUtils.js';
import allQuests from '../quest-data.js';

const questDiv = document.querySelector('#quest');
const nextButt = document.querySelector('#next-quest');

const param = new URLSearchParams(window.location.search);

const currentQuestId = param.get('id');

const thisQuestData = findById(allQuests, currentQuestId);

const questSection = renderQuest(thisQuestData);

questDiv.append(questSection);

nextButt.addEventListener('click', () => {
    window.location = '../map/index.html';
});
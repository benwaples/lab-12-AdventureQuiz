import { findById, renderQuest } from './questUtils.js';
import allQuests from '../quest-data.js';

const main = document.querySelector('main');

const currentQuestId = 'dragon';

const thisQuestData = findById(allQuests, currentQuestId);

const questSection = renderQuest(thisQuestData);

main.append(questSection);
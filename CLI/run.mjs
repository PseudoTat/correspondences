#!/usr/bin/env node
import { select, checkbox } from '@inquirer/prompts';
import { incenses, materia, planets } from './data.mjs';

const correspondenceChoice = await select({
  message: 'choose',
  choices: [
    { value: 'incenses' },
    { value: 'materia' },
  ],
});

const correspondenceType =
  (correspondenceChoice === 'incenses')
    ? incenses
    : materia;

const authorList =
  (correspondenceChoice === 'incenses')
    ? Object.keys(incenses).map(author => ({ value: author }))
    : Object.keys(materia).map(author => ({ value: author }));

const authorsChoices = await checkbox({
  message: 'select author(s)',
  choices: authorList,
});

const planetsChoices = await checkbox({
  message: 'select planet(s)',
  choices: planets,
});

console.log('RESULTS:');
for (const author of authorsChoices) {
  for (const planet of planetsChoices) {
    console.log(`${correspondenceChoice}>${author}>${planet}:\n${correspondenceType[author][planet]}\n`);
  }
}

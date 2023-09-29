const hasLicense = true;
const age = 19;
const isDrunk = false;

const canDrive = hasLicense && age > 17 && !isDrunk;

console.log(`Могу ли я ехать? - ${canDrive ? 'Да, конечно' : 'Увы, но нет'}`);

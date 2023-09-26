const lang = prompt('Укажите язык: ru, en, de');

switch (lang) {
    case 'ru': 
        console.log('Добрый день!');
        break;
    case 'en':
        console.log('Good day!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    default: 
        console.log('Не понимаю я по вашему!');
}
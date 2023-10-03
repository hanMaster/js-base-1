const dates = [
    '10-02-2022',
    '10-02/2022',
    'f10-k02-2022',
    'тест',
    '11/12/2023',
    '00/13/2022',
    '41/12/2023',
    '31-04-2023'
];

// считаем что если дата содержит "-" то это дата в формате "DD-MM-YYYY"
// а если "/" то это дата в формате "MM/DD/YYYY"
// все остальное считаем мусором

function cleanDateArray(arr) {
    return arr.map((item) => tryParseDate(item)).filter((i) => i !== null);
}

function tryParseDate(str) {
    let parts = [];
    let locale = 'ru';
    if (str.includes('-')) {
        parts = str.split('-');
    } else if (str.includes('/')) {
        parts = str.split('/');
        locale = 'en';
    }
    if (parts.length !== 3) {
        return null;
    }
    const day = parseDay(locale === 'ru' ? parts[0] : parts[1]);
    const month = parseMonth(locale === 'ru' ? parts[1] : parts[0]);
    const year = parseYear(parts[2]);

    if (month === 2 && day > 29) {
        return null;
    }

    if (day && month && year) {
        const d = day.toString().padStart(2, 0);
        const m = month.toString().padStart(2, 0);
        return `${d}-${m}-${year}`;
    }
    return null;
}

function parseDay(day) {
    const d = Number(day);
    if (d === NaN || d < 1 || d > 31) {
        return null;
    }
    return d;
}

function parseMonth(month) {
    const m = Number(month);
    if (m === NaN || m < 1 || m > 12) {
        return null;
    }
    return m;
}

function parseYear(year) {
    const y = Number(year);
    if (y === NaN || y < 2000 || y > 2023) {
        return null;
    }
    return y;
}

console.log(cleanDateArray(dates));

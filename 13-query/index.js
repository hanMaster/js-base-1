const query = { search: 'Вася', take: 10, skip: 2 };

function queryString(queryObject) {
    return Object.keys(queryObject)
        .map((k) => `${k}=${queryObject[k]}`)
        .join('&');
}

function queryString2(queryObject) {
    return Object.entries(queryObject)
        .map(([k, v]) => `${k}=${v}`)
        .join('&');
}

console.log(queryString2(query));

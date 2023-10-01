const query = { search: 'Вася', take: 10, skip: 2 };

function queryString(queryObject) {
    return Object.keys(queryObject)
        .map((k) => `${k}=${queryObject[k]}`)
        .join('&');
}

console.log(queryString(query));

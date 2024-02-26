"use strict";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = async (url) => {
    return await fetch(url)
        .then(response => response.json());
};
getData(COMMENTS_URL)
    .then((data) => {
    for (const item of data) {
        console.log(`ID: ${item.id}, Email: ${item.email}`);
    }
});

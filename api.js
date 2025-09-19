const axios = require('axios');

async function obtenerPersonas() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    return users;
}

async function obtenerPublicaciones(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const posts = response.data;
    return posts;
}

module.exports = { obtenerPersonas, obtenerPublicaciones };
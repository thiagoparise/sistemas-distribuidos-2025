const { obtenerPersonas, obtenerPublicaciones } = require('./api');

async function mostrarPublicaciones() {
    try {
        console.log('--- Ejecución Secuencial ---');
        const users = await obtenerPersonas();
        const filteredUsers = users.filter(user => user.id <= 3);

        for (const user of filteredUsers) {
            const posts = await obtenerPublicaciones(user.id);
            console.log(`${user.name} tiene ${posts.length} publicaciones`);
        }
    } catch (error) {
        console.log(error.message);
    }
}

mostrarPublicaciones();
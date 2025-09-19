const { obtenerPersonas, obtenerPublicaciones } = require('./api');

async function mostrarPublicaciones() {
    try {
        console.log('--- Ejecución Paralela con Promise.all ---');
        const users = await obtenerPersonas();
        const filteredUsers = users.filter(user => user.id <= 3);

        const promesas = filteredUsers.map(user => obtenerPublicaciones(user.id));

        const resultados = await Promise.all(promesas);

        resultados.forEach((posts, index) => {
            console.log(`${filteredUsers[index].name} tiene ${posts.length} publicaciones`);
        });
    } catch (error) {
        console.log(error.message);
    }
}

mostrarPublicaciones();
import Hapi from '@hapi/hapi';
import { hapi_config, cors_allowed_origins, database_url } from './config.json';
import DatabaseLibrary from './libraries/database';
import { routes } from './routes';
import AuthMiddleware from './middlewares/auth.js';

const init = async () => {
    let server = Hapi.server(hapi_config);

    //  set cors
    await server.register({
        plugin: require('hapi-cors'),
        options: {
            origins: cors_allowed_origins
        }
    })

    //  connect to database
    await DatabaseLibrary.Setup(database_url);

    //  set middlewares
    await AuthMiddleware.Setup(server);

    //  set routes
    server.route(routes);

    //  start server
    await server.start();
    console.log('Server running on %s', server.info.uri);
}

init();
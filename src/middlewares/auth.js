import AuthBearer from 'hapi-auth-bearer-token';

export default class AuthMiddleware {

    static async Setup(server){
        await server.register(AuthBearer);
        server.auth.strategy('simple', 'bearer-access-token', {
            allowQueryToken: true,
            validate: async (request, token, h) => {

                let credentials = { token };
                let artifacts = { firstname: "John Rey", lastname: "Gwapo"};
                let isValid = false;

                if(token==="1234"){
                    isValid = true;
                }
                return { isValid, credentials, artifacts };
            }
        });
    }
}
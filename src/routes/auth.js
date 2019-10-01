export const AuthRoutes = [
    {
        method: 'GET',
        path: '/',
        handler: async (req, res) => {
            return "Hello World";
        }
    },
    {
        method: 'GET',
        path: '/api/test',
        config: { 
            auth: "simple"
        },
        handler: async (req, res) => {
            return "Hello World";
        }
    }
]
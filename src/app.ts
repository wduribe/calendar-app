import { Server } from './presentation/server';
import { envs } from './config/envs.adapter';
import { AppRoutes } from './presentation/routes';
import { MongoDatabase } from './data';

(async()=>{
    await main();
})()

async function main(){
    
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGODB_NAME
    });

    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes    
    });

    server.start();
}
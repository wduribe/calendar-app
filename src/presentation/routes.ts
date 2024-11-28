import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
export class AppRoutes {
    static get routes(): Router {
        const routes = Router()
        
        routes.use( '/api/auth', AuthRoutes.routes );
        
        return routes;
    }
}
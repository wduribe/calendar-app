import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthService } from "../service/auth.service";


export class AuthRoutes {
    static get routes(): Router {
        
        const routes = Router();
        
        const authService = new AuthService();
        const authController = new AuthController( authService );

        routes.post('/register', authController.registerUser as any);
        routes.post('/login', authController.loginUser );
        routes.get('/validate-email/:token', authController.validateUser );       
        
        return routes;
    }
}
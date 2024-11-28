import { UserModel } from "../../data";
import { CustomError, RegisterUserDto } from "../../domain";


export class AuthService {
    
    //*DI
    constructor(){}

    public async registerUser( registerUserDto: RegisterUserDto ){
        const existUser = await UserModel.findOne( { email: registerUserDto.email } );
        if( existUser ) throw CustomError.badRequest( 'User already exist' );
        
        try{
            const user = new UserModel( registerUserDto );

            //Encriptar password;

            //Generar JWT

            //Email de confirmacion

            await user.save();
            return {
                user: user,
                token: 'ABC'
            }
        }catch( error ){
            throw CustomError.internalServer( `${ error }` );
        }
    }
}
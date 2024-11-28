import 'dotenv/config';
import { get } from "env-var"
export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    MONGO_URL: get('MONGO_URL').required().asString(),
    MONGODB_NAME: get('MONGODB_NAME').required().asString(),
}
import { IAuth } from '@models/IAuth';

export interface IUser extends IAuth {
    username: string;
    patrimony?: string;
}
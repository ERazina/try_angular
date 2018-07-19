import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '../../users';
import { callbackify } from 'util';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  public transform(users: IUsers[], searchTerm: string): IUsers[] {
    if (!searchTerm) {
      return users;
    }
    // return users.filter(callback (user: IUsers) => {
    //   return `${user.firstName} ${user.surname}`.toLowerCase().includes(searchTerm)
    // });
    return users.filter(callbackify (user: IUsers) => {
      return `${user.firstName} ${user.surname}`.toLowerCase().includes(searchTerm);
    });
  }

}

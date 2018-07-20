import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '../../users';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  public transform(users: IUsers[], searchTerm: string): IUsers[] {
    if (!searchTerm) {
      return users;
    }
    return users.filter( (user: IUsers) => {
      return `${user.firstName} ${user.surname}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}

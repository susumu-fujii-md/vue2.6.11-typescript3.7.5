import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { store } from '@/store';
import { UserType } from '@/types/UserType';

@Module({ dynamic: true, store, name: '_SignUp', namespaced: true })
class SignUp extends VuexModule implements UserType {
  userId: string = '';
  lastName: string = '';
  firstName: string = '';
  password: string = '';

  @Mutation
  public SET_USER_ID(userId: string): void {
    this.userId = userId;
  }

  @Mutation
  public SET_LAST_NAME(lastName: string): void {
    this.lastName = lastName;
  }

  @Mutation
  public SET_FIRST_NAME(firstName: string): void {
    this.firstName = firstName;
  }

  @Mutation
  public SET_PASSWORD(password: string): void {
    this.password = password;
  }
}

export const SignUpModule = getModule(SignUp);

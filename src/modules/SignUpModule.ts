import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { store } from '@/store';
import { SignUpType } from '@/types/';

@Module({ dynamic: true, store, name: '_SignUp', namespaced: true })
class SignUp extends VuexModule implements SignUpType {
  userId: string = '';
  familyName: string = '';
  givenName: string = '';
  password: string = '';

  @Mutation
  public SET_USER_ID(userId: string): void {
    this.userId = userId;
  }

  @Mutation
  public SET_FAMILY_NAME(familyName: string): void {
    this.familyName = familyName;
  }

  @Mutation
  public SET_GIVEN_NAME(givenName: string): void {
    this.givenName = givenName;
  }

  @Mutation
  public SET_PASSWORD(password: string): void {
    this.password = password;
  }
}

export const SignUpModule = getModule(SignUp);

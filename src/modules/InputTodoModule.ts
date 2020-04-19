import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { store } from '@/store';
import { Todo } from '@/types/Todo';

@Module({ dynamic: true, store, name: 'InputTodo', namespaced: true })
class InputTodo extends VuexModule implements Todo {
  id: number = -1;
  value: string = '';
  isComplete: boolean = false;

  @Mutation
  public SET_VALUE(value: string) {
    this.value = value;
  }
}

export const InputTodoModule = getModule(InputTodo);

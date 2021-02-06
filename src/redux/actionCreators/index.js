import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from "../actionTypes";

import { } from '../actionTypes';

export const getActionChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getActionAddTodoItem = () => ({
  type: ADD_TODO_ITEM
})

export const getActionDeleteTodoItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})




import { Cycle } from './reducer'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  // eslint-disable-next-line no-unused-vars
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  // eslint-disable-next-line no-unused-vars
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  // eslint-disable-next-line no-unused-vars
  SET_SECONDS_PASSED = 'SET_SECONDS_PASSED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  }
}

export function setSecondsPassedAction(seconds: number) {
  return {
    type: ActionTypes.SET_SECONDS_PASSED,
    payload: {
      seconds,
    },
  }
}

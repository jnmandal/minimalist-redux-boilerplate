export const SET_GREETING = 'SET_GREETING';

export function setGreeting(greeting) {
  return {
    type: SET_GREETING,
    greeting
  }
}

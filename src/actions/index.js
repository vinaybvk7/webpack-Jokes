import utils from './../utils';
import {
  SHOW_JOKES,
  SHOW_PREVIOUS_JOKES,
  ACTION_ON_JOKES,
  MOVE_TO_NEXT_JOKE,
  SHOW_SUMMARY,
} from './../constants/const';

export const showJoke = () => ({
  type: SHOW_JOKES,
  payload: utils.showJoke().then(res=>res.data)
})

export const movetoPreviousJoke = (currentJoke) =>{
	return {
		type: SHOW_PREVIOUS_JOKES,
  		payload: currentJoke
  	}
}

export const actionOnJoke = (action, joke) =>{
	return {
		type: ACTION_ON_JOKES,
  		payload: {action, joke}
  	}
}

export const movetoNextJoke = () =>{
  return {
    type: MOVE_TO_NEXT_JOKE
  }
}

export const showSummary = () =>{
  return {
    type: SHOW_SUMMARY
  }
}

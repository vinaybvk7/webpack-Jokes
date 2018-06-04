
import {
  SHOW_JOKES_FULFILLED,
  SHOW_JOKES_REJECTED,
  SHOW_JOKES_PENDING,
  SHOW_PREVIOUS_JOKES,
  ACTION_ON_JOKES,
  MOVE_TO_NEXT_JOKE,
  SHOW_SUMMARY,
} from './../constants/const';

const initialState = {
    jokes : [],
    currentJoke: null,
    loading: false,
    disablePrev: false,
    summary: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_JOKES_PENDING:
        return {
          ...state,
        }

      case SHOW_JOKES_FULFILLED:
        let { jokes } = state;
        let currentJoke = action.payload;
        currentJoke.funny = null;
        currentJoke.index = state.jokes.length;
        jokes.push(currentJoke);
        return {
          ...state,
          jokes,
          currentJoke,
          disablePrev: false
        }

        case SHOW_JOKES_REJECTED:
          return {
            ...state
          }

      case SHOW_PREVIOUS_JOKES:
            let prevJoke = null;
            state.jokes.map( (joke)=>{
              if(joke.id === action.payload.id){
                  currentJoke = prevJoke;
              };
              prevJoke = joke;
              return joke;
            });

            return  {
              ...state,
              currentJoke: currentJoke ? currentJoke : state.currentJoke,
              disablePrev: currentJoke ? false : true
            }

      case ACTION_ON_JOKES:
            jokes = [];
            prevJoke = null;
            state.jokes.map( (joke)=>{
              if(joke.id === action.payload.joke.id){
                  currentJoke = joke;
                  currentJoke.funny = action.payload.action;
                   jokes.push(currentJoke);
              }else{
                   jokes.push(joke);
              }
              return joke;

            })
            state = {
              ...state,
              currentJoke,
              jokes
            }
          return {
            ...state
          }

      case MOVE_TO_NEXT_JOKE:
          let index = 0;
            state.jokes.map( (joke, i)=>{
              if(joke.id === state.currentJoke.id){
                  index = i+1;
              };
              return joke;
            });
          currentJoke = state.jokes[index];
          return {
            ...state,
            currentJoke
          }

          case SHOW_SUMMARY:
            let summary = state.jokes;
            return {
              ...state,
              summary
            }

      default:
          return state
    }
}

export default reducer;

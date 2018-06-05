import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jokes from './../components/jokes';
import  { showJoke, moveToPreviousJoke,actionOnJoke, moveToNextJoke } from './../actions/index';

class Main extends Component {
  componentWillMount(){
    this.showJoke();
  }

  showJoke = () =>{
    this.props.showJoke();
  }

  showNext = () =>{
    const { currentJoke, jokes } = this.props.jokesReducer;
    if(currentJoke.index === jokes.length - 1){
      this.showJoke();
    }else{
      this.props.moveToNextJoke();
    }
  }

  showPrev = () =>{
    const { currentJoke } = this.props.jokesReducer;

    this.props.moveToPreviousJoke(currentJoke);
  }

  actionOnJoke = (action, joke) =>{
    this.props.actionOnJoke(action, joke);
    this.Joke();
  }

  render() {
    const { currentJoke } = this.props.jokesReducer;
    return (
        <div className="jokes-layout">
          <div className="switch-layout">
            <div className="next-joke" >
             <button className="button"  onClick={this.showNext}> Next Joke </button>
            </div>
            <div className="prev-joke" >
             <button className={ currentJoke && currentJoke.index === 0 ? "disabled-button" : "button"} disabled={currentJoke && currentJoke.index === 0} onClick={this.showPrev}> Prev Joke </button>
            </div>
          </div>
          <Jokes
            currentJoke={ currentJoke }
            actionOnJoke={this.actionOnJoke}/>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  jokesReducer: state.jokesReducer
});

const mapDispatchToProps = dispatch => ({
     showJoke: () => {
      dispatch(showJoke());
    },
    moveToPreviousJoke: (currentJoke) => {
      dispatch(moveToPreviousJoke(currentJoke))
    },
    actionOnJoke: (action, joke) => {
      dispatch(actionOnJoke(action, joke));
    },
    moveToNextJoke: () => {
      dispatch(moveToNextJoke())
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

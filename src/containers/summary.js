import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableComponent from './../components/tableComponent';
import EmptyData from './../components/emptyData';
import Reaction from './../components/reaction';
import { NO_DATA_AVAILABLE }  from './../constants/message';
import  { getSummary } from './../actions';

class Summary extends Component {
  componentWillMount(){
    this.getSummary();
  }

  getSummary = () =>{
    this.props.getSummary();
  }



  render() {
  	const { summary } = this.props.jokesReducer;

    return (
        <div>
          {
            summary.length > 0
              ?
                <div  className="summary-layout">
                  <Reaction summary={summary}/>
                  <TableComponent summary={summary}/>
                </div>
              :
                <EmptyData message={NO_DATA_AVAILABLE}/>
          }
        </div>
    );
  }
}


const mapStateToProps = state => ({
  jokesReducer: state.jokesReducer
});

const mapDispatchToProps = dispatch => ({
    getSummary: () => {
      dispatch(getSummary());
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);

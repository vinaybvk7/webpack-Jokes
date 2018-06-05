import React from 'react';

const jokes = props =>{

	return(<div className="content">
				<div className="board">
					<div className="board-content">
					<p className="subtitle">
						{ props.currentJoke && props.currentJoke.joke}
					</p>
				</div>
				<footer className="board-footer">
					<div className={ props.currentJoke && props.currentJoke.funny === true ? "board-footer-item funny" : "board-footer-item "} onClick={()=>{props.reactOnJoke(true, props.currentJoke )}}>
						<span className="icon is-small">
							<i className="fa fa-chain"></i>
						</span>
						<span className="pushquarter--left" >
							Funny
						</span>
					</div>
					<div className={props.currentJoke && props.currentJoke.funny === false ? "board-footer-item not-funny" : "board-footer-item"} onClick={()=>{props.reactOnJoke(false, props.currentJoke )}}>
						<span className="icon is-small">
							<i className="fa fa-twitter"></i>
						</span>
						<span className="pushquarter--left">
							Not Funny
						</span>
					</div>
				</footer>
			</div>
		</div>)
}

export default jokes;

import React from 'react';
class MyComp extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World from MyComp {this.props.whatToSay}</h1>
                <button onClick={this.props.onPushBtn}>
                    Push From MyComp
                </button>
            </div>
        )
    }
}
export default MyComp;
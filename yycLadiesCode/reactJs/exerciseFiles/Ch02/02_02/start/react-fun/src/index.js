import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100

}

class SkyDayCounter extends Component {
    getPercent = decimal =>{
        return decimal * 100 +'%'
    }
    calcGoalProgress = (total, goal) => {
        return this.getPercent(total/goal)
    }
    render() {
        const {total, powder, backcountry, goal} = this.props;
        return (
            <section>
                <div>
                    <p>Total days: {total}</p>
                </div>
                <div>
                    <p>Powder days: {powder}</p>
                </div>
                <div>
                    <p>Backcountry days: {backcountry}</p>
                </div>
                <div>
                    <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <SkyDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}

    />,
    document.getElementById('root')
);
    

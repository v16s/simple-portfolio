import '../style.css'
import React from 'react'
import Area from '../graph.js'
export default class Index extends React.Component {
    render() {
        return (

            <div className="rectbox blue">

                <div className="portCanvas">
                    <div className="row">
                        <div className="third">
                            <div className="portValue">$12000</div>
                            <div className="portName">Current Balance</div>
                        </div>
                        <div className="third">
                            <div className="portStat green">+7.33%</div>
                            <div className="portName">Change</div>
                        </div>
                        <div className="third">
                            <div className="portStat green">$620</div>
                            <div className="portName">Profit/Loss</div>
                        </div>
                    </div>
                    <Area
                    width={500}
                    height={300}
                    margin={{
                        top: 5,
                        left:5,
                        right:5,
                        bottom:5
                    }}
                     />
                </div>

            </div>

        )
    }
}

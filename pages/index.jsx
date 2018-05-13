
import React from 'react'
import Area from '../graph.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
export default class Index extends React.Component {
    render() {
        return (

            <div className="rectbox blue">

                <div className="portCanvas">
                    <div className="row">
                        <div className="third">
                            <div className="portValue">$12000</div>
                            <div className="portName" style={{textAlign: 'left'}}>Current Balance</div>
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
                    <Tabs>
    <TabList>
      <Tab>1m</Tab>
      <Tab>10m</Tab>
      <Tab>30m</Tab>
      <Tab>1h</Tab>
      <Tab>6h</Tab>
      <Tab>12h</Tab>
      <Tab>24h</Tab>
      <Tab>1w</Tab>
      <Tab>1mo</Tab>
      <Tab>1y</Tab>
    </TabList>

    <TabPanel>
     
    <div className="portGraph">
                    <Area
                    margin={{
                        top: 0,
                        left:0,
                        right:0,
                        bottom:0
                    }}
                     />
                    </div>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
  </Tabs>
                    
                </div>

            </div>

        )
    }
}

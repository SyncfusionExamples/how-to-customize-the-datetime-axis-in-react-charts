import React from 'react';
import './App.css';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, 
  Inject, DateTime ,DateTimeCategory} from '@syncfusion/ej2-react-charts';
import {sampleData, salseData} from './data';
function App() {
  return (
    <div style={{textAlign:"center", margin:'5%'}}>
      {/* Date Time Axis */}
      <div className="chart1wrapper">
        <ChartComponent  width="400" title="Weather Statistics"
        primaryXAxis={{valueType:"DateTime", labelFormat:"MMMM", edgeLabelPlacement:"Shift",
        rangePadding:"Additional", minimum:new Date(2016, 5, 1), maximum:new Date(2016, 11, 1), interval:2}}>
          <Inject services={[LineSeries, DateTime]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={sampleData}
            xName="date" yName="value" marker={{visible:true}}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      {/* Date Time Category Axis */}
      <div className="chart2wrapper">
        <ChartComponent title="Sales Comparison"
        primaryXAxis={{valueType:"DateTimeCategory", labelFormat:"dd-EEE-MMM", edgeLabelPlacement:"Shift",
        rangePadding:"Round", title:"Business Days", intervalType:"Days"}}>
          <Inject services={[LineSeries, DateTimeCategory]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={salseData}
            xName="date" yName="value" marker={{visible:true}}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js';
import './chart.css';
var moment = require('moment');
 
export class MyChart extends React.Component {

 componentDidUpdate(prevProps) {
    
          console.log('component did update');    


      this.buildChart();

    }

 componentDidMount() {

        console.log('in compnent did mount', this.props.foodList);

        this.buildChart();
    }


 buildChart() { 

            
    let donutChart = true; 
    let myFoodData = []; 
    let myFoodNames = [];

     if(donutChart) {

        let numberOfFoods = 5;

        if(this.props.foodList.foodCounts.length > 0) {
            if(this.props.foodList.foodCounts.length < 5) {
                numberOfFoods = this.props.foodList.foodCounts.length;
            }
        }

        for(let i = 0; i < numberOfFoods; i++)
        {

            myFoodData.push(this.props.foodList.foodCounts[i].count)
            myFoodNames.push(this.props.foodList.foodCounts[i].name)
        }

        console.log('in build chart');
        let ctx = document.getElementById("myChart").getContext('2d'); 
        Chart.defaults.global.defaultFontColor = 'white';   


        var myDoughnutChart = new Chart(ctx, {
        'type': 'doughnut',
        'data': {
            'datasets': [{
                data: myFoodData,
                "backgroundColor":[ 
                '#fe8d07',
                '#c86dd7',
                '#00c7ff', 
                '#28c97c', 
                '#fc4661' ],
                'borderColor': ['#fa9620', '#c87cd5', '#14c7fa', '#40d08b', '#ff637a' ],
                'borderWidth': [2,2,2,2,2]
            }],

            'labels': myFoodNames
        },
        "options":{
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 3,
                    fontSize: 12 }
            },
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 90           

        }
        });




     } else { 




    console.log('in build chart');    


    let ctx = document.getElementById("myChart").getContext('2d');

        
    Chart.defaults.global.defaultFontColor = 'white';

    let symptomSeverityData = [];
    let foodData = [];


    console.log('data: ', symptomSeverityData);

    let mydates = [];
    let severity = [];
    let foods = []; 
    let myData = { };
    let myDataSets = [];
    let sympData = []; 
    let sympFound = false; 

    for(let i = 0; i < this.props.foodList.daylists.length; i++)
    {

        sympFound = false;

        
       mydates.push( moment(this.props.foodList.daylists[i].date).format("MM-DD-YYYY") );

       //check to see if this day had the symptom
       for (var iii=0; iii < this.props.foodList.daylists[i].symptomList.length; iii++) {

            if (this.props.foodList.daylists[i].symptomList[iii].name === this.props.symptom) {
               sympFound = true; 
               sympData.push(this.props.foodList.daylists[i].symptomList[iii].severity);
            }
        }

        if(!sympFound) sympData.push(0); 

       for(let ii = 0; ii < this.props.foodList.daylists[i].foodList.length; ii++)
       {
        let newdata = [{},{},{},{},{},{},{}]; 
         newdata.splice(i, 0, { x:5, y:(ii+.5)});

        myDataSets.push( 
                        {
                        "label": this.props.foodList.daylists[i].foodList[ii].name,
                        "data":newdata,
                        "fill": "false",
                        "borderColor":"#ff7800",
                        "lineTension":0.1,
                        "pointStyle": "rect", 
                        "radius": 4 
                        }
            );
            

        }
       

       }

 

        myDataSets.push( 
                        {
                        "label": this.props.symptom,
                        "data": sympData,
                        "fill": "false",
                        "borderColor":"#ffce56",
                        "lineTension":0.1  
                        }
            );

    myData.labels = mydates; 


                   console.log('dates', mydates); 
                   console.log('mydata', myDataSets); 


    let myChart = new Chart( ctx,
    {
        "type":"line",
        "data":{
            "labels": mydates,
            "datasets": myDataSets
        },
        "options":{
            legend: {
                display: false
            },
            pointStyle: "rect"
        }
    });

    }
    
 }

    render() {

           if(this.props.loaded) {

            if(document.getElementById("myChart") != null){

               // this.buildChart(); 
            }

            return (
            <div className="chart-component">
            <div className="chartcontainer datareturned">
            <canvas id="myChart" width="300" height="200"></canvas>
            
            </div>
            
            </div>

            );


           } else {

            return (
            <div className="chartcontainer nodata">
            <canvas id="myChart" width="300" height="200"></canvas>
            </div>
            );

           }
           

        }
        

    

}
const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList,
    loaded: state.reducer.loaded,
    symptom: state.reducer.symptom
});
export default connect(mapStateToProps)(MyChart);
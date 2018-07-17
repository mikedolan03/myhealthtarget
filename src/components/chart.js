import React from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js';
import './chart.css';
var moment = require('moment');
 
export class MyChart extends React.Component {

    componentDidUpdate(prevProps) {
      // only update chart if the data has changed
      //if (prevProps.data !== this.props.data) {
      //  this.chart = c3.load({
       //   data: this.props.data
       // });
      //}

          console.log('component did update');    


      this.buildChart();

    }

    componentDidMount() {

        console.log('in compnent did mount', this.props.foodList);

        this.buildChart();
    }

    buildChart() { 

    console.log('in build chart');    


        let ctx = document.getElementById("myChart").getContext('2d');


//this.props.symptomList[0].severity
        
    Chart.defaults.global.defaultFontColor = 'white';

    let symptomSeverityData = [];
    let foodData = [];

   // this.props.symptomList.forEach( symptom => {
    //    symptomSeverityData.push( parseInt(symptom.severity));
   // });

   // this.props.foodList.forEach( food => {
    
    //randomly set whether a food was eaten or not. will need to 
    //do a db search for days trigger consumed that match symptom 
    //time frame.

    //let rNumber = Math.floor(Math.random() * 10); 
    //let ateFood = 0;

   // if(rNumber > 5) { 
    //        ateFood = 10; 
    //}


     //   foodData.push(ateFood);
   // });

    console.log('data: ', symptomSeverityData);

    let mydates = [];
    let severity = [];
    let foods = []; 
    let myData = { };
    let myDataSets = [];


    for(let i = 0; i < this.props.foodList.daylists.length; i++)
    {

        
       mydates.push( moment(this.props.foodList.daylists[i].date).format("MM-DD-YYYY") );

       for(let ii = 0; ii < this.props.foodList.daylists[i].foodList.length; ii++)
       {
        let newdata = [{},{},{},{},{},{},{}]; 
         newdata.splice(i, 0, { x:5, y:ii});

        myDataSets.push( 
                        {
                        "label": this.props.foodList.daylists[i].foodList[ii].name,
                        "data":newdata,
                        "fill": "false",
                        "borderColor":"#ff7800",
                        "lineTension":0.1  
                        }
            );
            

      /*  myDataSets.push( 
                        {
                        type: "bar",
                        label: this.props.foodList[i].foodList[ii].name,
                        data:[5,3,6],
                        fill: "true",
                        borderColor:"rgb(75, 192, 192)",
                        lineTension:"0.1"  
                        }
            );
            */


        }
       

       }

      
       

      /* myDataSets.push( {
                "type":"line",
                "label":"Symptom",
                "data":symptomSeverityData,
                "fill":false,
                "borderColor":"#ff7800",
                "lineTension":0.1
                } ); 
                */

        myDataSets.push( 
                        {
                        "label": this.props.foodList.daylists[0].foodList[0].name,
                        "data":[5,3,6, 3, 9, 10, 2, 4],
                        "fill": "false",
                        "borderColor":"#ff7800",
                        "lineTension":0.1  
                        }
            );

        /* myDataSets.push( 
                        {
                        "label": this.props.foodList[0].foodList[1].name,
                        "data":[
                        { x:1, y:1 }],
                        "fill": "false",
                        "borderColor":"#ff7800",
                        "lineTension":0.1  
                        }
            );

         let newdata = [{},{},{},{},{},{},{}]; 
         newdata.splice(2, 0, { x:5, y:2});
         myDataSets.push( 
                        {
                        "label": this.props.foodList[0].foodList[2].name,
                        "data":newdata,
                        "fill": "false",
                        "borderColor":"#ff7800",
                        "lineTension":0.1,
                        "type":"scatter"
                        }
            );
*/
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

    /*    

[
                {
                "label":"Ate Trigger Food",
                "data":foodData,
                "fill":false,
                "borderColor":"rgb(75, 192, 192)",
                "lineTension":0.1
                },
                {
                "label":"Symptom",
                "data":symptomSeverityData,
                "fill":false,
                "borderColor":"#ff7800",
                "lineTension":0.1
                }]

    var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        */
    
    }

    render() {

           if(this.props.loaded) {

            if(document.getElementById("myChart") != null){

               // this.buildChart(); 
            }

            return (
                <div>
                <h2>{this.props.foodList.daylists[0].symptomList[0].name}</h2>
            <div className="chartcontainer datareturned">
            <canvas id="myChart" width="300" height="300"></canvas>
            
            </div>
            
            </div>

            );


           } else {

            return (
            <div className="chartcontainer nodata">
            <canvas id="myChart" width="300" height="300"></canvas>
            </div>
            );

           }
           

        }
        

    

}
const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList,
    loaded: state.reducer.loaded
});
export default connect(mapStateToProps)(MyChart);
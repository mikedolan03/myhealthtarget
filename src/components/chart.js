import React from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js';
import './chart.css';
 
export class MyChart extends React.Component {

    componentDidMount() {
      // only update chart if the data has changed
      //if (prevProps.data !== this.props.data) {
      //  this.chart = c3.load({
       //   data: this.props.data
       // });
      //}

      this.buildChart();

    }

    buildChart() {    

        if(this.props.symptomList.length > 0) {

        let ctx = document.getElementById("myChart").getContext('2d');


    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    let x = new Date(); 
    x.setDate(x.getDate-7);
    

    if(dd<10) {
    dd = '0'+dd
    } 

    if(mm<10) {
    mm = '0'+mm
    } 

    today = mm + '/' + dd; //+ '/' + yyyy;
    let dates = [];
    let count = 7; 
    
    console.log('before for'); 

    for (let i = 0; i < 7; i++)
    {

       //console.log('date', dd); 

        dates[count] = mm + '/' + (parseInt(dd)-i).toString();
        count--; 
               console.log('date', dates[count]); 

    }
//this.props.symptomList[0].severity
        
    Chart.defaults.global.defaultFontColor = 'white';

    let symptomSeverityData = [];
    let foodData = [];

    this.props.symptomList.forEach( symptom => {
        symptomSeverityData.push( parseInt(symptom.severity));
    });

    this.props.foodList.forEach( food => {
    
    //randomly set whether a food was eaten or not. will need to 
    //do a db search for days trigger consumed that match symptom 
    //time frame.

    let rNumber = Math.floor(Math.random() * 10); 
    let ateFood = 0;

    if(rNumber > 5) { 
            ateFood = 10; 
    }


        foodData.push(ateFood);
    });

    console.log('data: ', symptomSeverityData);

    let myChart = new Chart( ctx,
    {
        "type":"line",
        "data":{
            "labels":[ dates[0],dates[1],dates[2],dates[3],dates[4],dates[5],today],
            "datasets":[
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
        },
        "options":{}
    });

    /*    var myChart = new Chart(ctx, {
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
    }

    render() {

           // console.log('do we have props', this.props.symptomList);
           if(this.props.symptomList.length > 0) {
            console.log('symp sev', parseInt(this.props.symptomList[0].severity) ); 
           
           if(document.getElementById("myChart") != null){

                this.buildChart(); 
            }

                }
        return (
            <div className="chartcontainer">
            <canvas id="myChart" width="300" height="300"></canvas>
            </div>
            );

    }

}
const mapStateToProps = state => ({
    foodList: state.reducer.foodList,
    symptomList: state.reducer.symptomList
});
export default connect(mapStateToProps)(MyChart);
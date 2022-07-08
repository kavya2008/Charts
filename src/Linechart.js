import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import './App.css'
import {MDBContainer} from 'mdbreact'
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
  )
class LineChart extends React.Component
{
    state= {
        dataLine : {
            labels: ['Ap 04','Ap 07','Ap 10','Ap 13','Ap 17'],
            datasets:[
                {
                    label : 'Sales This Month',
                    fill : true,
                    backgroundColor: "rgba(240, 26, 229,0.3)",
                    borderColor: "rgba(240, 26, 229,0.9)",
                    pointBackgroundColor: "rgb(255,255,255)",
                    pointHoverBackgroundColor: "rgb(0,0,0)",
                    pointBorderColor:"rgba(240, 26, 229,0.9)" ,
                    pointRadius : 3,
                    pointHoverRadius: 4,
                    tension:0.3,
                    data: [50,100,20,10,30,40]
                },
                
                
            ]
        }
    }
    render()
    {
        return(
            <MDBContainer>
            <Line data={this.state.dataLine} options={{responsive:true,scales: {
                    y: {
                        min: 0,
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value) {
                                return '$' + value +"K";
                            }
                        }
                    }
                } }} 
            
            />
                
                
            </MDBContainer>
        );
    }
}
export default LineChart;
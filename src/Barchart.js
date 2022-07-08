import React from 'react'
import {MDBContainer} from 'mdbreact'
import {Bar} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)
class BarChart extends React.Component
{
    state = {
        barchart : {
            labels: ['Red','Green','Orange','Blue'],
            datasets: [
                {
                    label: 'Bar Chart',
                    data : [25,20,30,40],
                    backgroundColor:['red','green','orange','blue'],
                    borderWidth: 3,
                }
            ]
        },
        options: {
            responsive:true,
            scales : {
                yAxes : [
                    {
                        ticks : {
                            beginAtZero : true
                        }
                    }
                    
                ]
            }
        }
    }
    render()
    {
        return(
            <MDBContainer>
                <Bar data={this.state.barchart} options={this.state.options} />
            </MDBContainer>
        );
    }
}
export default BarChart;
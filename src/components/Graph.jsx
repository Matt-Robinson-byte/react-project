import React from 'react';
import {Line} from 'react-chartjs-2'


function Graph(props) {
    //console.log(props)
    const lab = [] 
    props.data.results.map(a=>a.map((a)=>lab.push(a.Date)))
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    //const color  = [r,b,g]
    //console.log(newEst)
    //console.log(`here are the labels${est}`)
    //console.log(typeof(lab))
const state = {
    
    labels: lab,
    datasets: props.data.results.map(a=>{ 
        let est = []
        a.map((a)=>est.push(a.station))
        let newEst = est.filter((val, index) => est.indexOf(val) === index)
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const color  = [r,b,g]
        
         console.log(newEst)
      return {
        label: newEst,
        fill: false,
        lineTension: 0.5,
        backgroundColor: `rgba(${color},1)`,
        borderColor: `rgba(${color},1)`,
        borderWidth: 2,
        data: a.map((d)=>d.Level)
      }
    }),
    
    
  }
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  return (
    <div >
      <h1>hello world</h1>
    <Line
      data={state}
      options={{
        title:{
          display:true,
          text:'River levels',
          fontSize:20
        },
        // legend:{
        //   display:true,
        //  position:'center'
        // }
      }}
    />
    </div>
    )
}

export default Graph
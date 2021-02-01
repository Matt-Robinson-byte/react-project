import React from 'react';
import {Line} from 'react-chartjs-2'


function Graph(props) {
    console.log(props)
    const lab = [] 
    props.data.results.map(a=>a.map((a)=>lab.push(a.Date)))
    
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
 
  return (
    <div className="graph">
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
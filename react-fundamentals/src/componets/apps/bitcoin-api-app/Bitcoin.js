// import React, {useState, useEffect} from 'react';
// // import {Component} from 'react';
// import LineChart from './LineChart';
// import InfoBox from './InfoBox';


// // export default class Bitcoin extends Component {
// //     const [data, setData] = useState();
// //     const [fetchingData, setFetchingData] = useState(true);

// //     useEffect(() => {
// //         const url = `https://api.coindesk.com/v1/bpi/historical/close.json`;
// //         fetch(url)
// //         .then(response => response.json())
// //         .then(bitcoinData => {
// //             console.log(bitcoinData.bpi);
// //             setData(bitcoinData.bpi);
// //             setFetchingData(false);
// //         })
// //         .catch(e => {
// //             console.log(e);
// //         })
// //     }, [])
// //     return(
// //         <div className='main'>
// //             <div className='mainDiv'>
// //                 <h1>30 Day Bitcoin Price Chart</h1>
// //                 {!this.state.fetchingData ? <InfoBox data={data} /> :null}
// //                 {!this.state.fetchingData ? <LineChart data={data} /> : null}
// //             </div>
// //         </div>
// //     )
// // }


// const Bitcoin = () => {
//     const [data, setData] = useState();
//     const [fetchingData, setFetchingData] = useState(true);

//     useEffect(() => {
//         const url = `https://api.coindesk.com/v1/bpi/historical/close.json`;
//         fetch(url)
//         .then(response => response.json())
//         .then(bitcoinData => {
//             console.log(bitcoinData.bpi);
//             setData(bitcoinData.bpi);
//             setFetchingData(false);
//         })
//         .catch(e => {
//             console.log(e);
//         })
//     }, [])

//     return(
//         <div className='main'>
//             <div className='mainDiv'>
//                 <h1>30 Day Bitcoin Price Chart</h1>
//                 {!fetchingData ? <InfoBox data={data} /> :null}
//                 {!fetchingData ? <LineChart data={data} /> : null}
//             </div>
//         </div>
//     )
// }

// export default Bitcoin;


import React, { Component } from 'react';
import moment from 'moment';
import './Bitcoin.css';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import InfoBox from './InfoBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    }
  }
  handleChartHover(hoverLoc, activePoint){
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }
  componentDidMount(){
    const getData = () => {
      const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';

      fetch(url).then( r => r.json())
        .then((bitcoinData) => {
          const sortedData = [];
          let count = 0;
          for (let date in bitcoinData.bpi){
            sortedData.push({
              d: moment(date).format('MMM DD'),
              p: bitcoinData.bpi[date].toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
              x: count, //previous days
              y: bitcoinData.bpi[date] // numerical price
            });
            count++;
          }
          this.setState({
            data: sortedData,
            fetchingData: false
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getData();
  }
  render() {
    return (

      <div className='container'>
        <div className='row'>
          <h1>30 Day Bitcoin Price Chart</h1>
        </div>
        <div className='row'>
          { !this.state.fetchingData ?
          <InfoBox data={this.state.data} />
          : null }
        </div>
        <div className='row'>
          <div className='popup'>
            {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
          </div>
        </div>
        <div className='row'>
          <div className='chart'>
            { !this.state.fetchingData ?
              <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
              : null }
          </div>
        </div>
        <div className='row'>
          <div id="coindesk"> Powered by <a href="http://www.coindesk.com/price/">CoinDesk</a></div>
        </div>
      </div>

    );
  }
}

export default App;
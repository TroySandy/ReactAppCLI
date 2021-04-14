// import React, { useState, useEffect } from "react";
// // import {Component} from 'react';
// import styled from "styled-components";

// const InfoCard = styled.div`
//   display: inline-block;
//   width: 50%;
//   margin-bottom: 1em;
//   text-align: center;
//   color: #d9514e;
// `;

// const InfoBox = (props) => {
//   const [payout, setPayout] = useState([]);
//   const [infoCurrent, setInfoCurrent] = useState("");
//   const [infoPayout, setInfoPayout] = useState("");

//   useEffect(() => {
//     const infoData = this.props.data;
//     let payout = [];
//     for (let thing in infoData) {
//       payout.push(infoData[thing]);
//     }
//     setPayout(payout);
//     setInfoCurrent(payout[30]);
//     setInfoPayout(payout[30] - payout[0]);
//   }, []);

//   return (
//     <div>
//       <InfoCard>
//         <div>
//           <h3>Current Price</h3>
//         </div>
//         <div>
//           <h5>
//             {infoCurrent.toLocaleString("un-EN", {
//               style: "currency",
//               currencu: "USD",
//             })}
//           </h5>
//         </div>
//       </InfoCard>
//       <InfoCard>
//         <div>
//           <h3>Change Since Last Month (USD)</h3>
//         </div>
//         <div>
//           <h5>
//             {infoPayout.toLocaleString("us-EN", {
//               style: "currency",
//               currency: "USD",
//             })}
//           </h5>
//         </div>
//       </InfoCard>
//     </div>
//   );
// };

// // const InfoCard = styled.div`
// //   display: inline-block;
// //   width: 50%;
// //   margin-bottom: 1em;
// //   text-align: center;
// //   color: #d9514e;
// // `;

// // const InfoBox = (props) => {
// //   const [payout, setPayout] = useState([]);
// //   const [infoCurrent, setInfoCurrent] = useState("");
// //   const [infoPayout, setInfoPayout] = useState("");

// //   useEffect(() => {
// //     const infoData = props.data;
// //     let payout = [];
// //     for (let thing in infoData) {
// //       payout.push(infoData[thing]);
// //     }
// //     setPayout(payout);
// //     setInfoCurrent(payout[30]);
// //     setInfoPayout(payout[30] - payout[0]);
// //   }, []);

// //   return (
// //     <div>
// //       <InfoCard>
// //         <div>
// //           <h3>Current Price</h3>
// //         </div>
// //         <div>
// //           <h5>
// //             {infoCurrent.toLocaleString("un-EN", {
// //               style: "currency",
// //               currencu: "USD",
// //             })}
// //           </h5>
// //         </div>
// //       </InfoCard>
// //       <InfoCard>
// //         <div>
// //           <h3>Change Since Last Month (USD)</h3>
// //         </div>
// //         <div>
// //           <h5>
// //             {infoPayout.toLocaleString("us-EN", {
// //               style: "currency",
// //               currency: "USD",
// //             })}
// //           </h5>
// //         </div>
// //       </InfoCard>
// //     </div>
// //   );
// // };

// export default InfoBox;

import React, { Component } from 'react';
import moment from 'moment';
import './InfoBox.css';

class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: null,
      monthChangeD: null,
      monthChangeP: null,
      updatedAt: null
    }
  }
  componentDidMount(){
    this.getData = () => {
      const {data} = this.props;
      const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

      fetch(url).then(r => r.json())
        .then((bitcoinData) => {
          const price = bitcoinData.bpi.USD.rate_float;
          const change = price - data[0].y;
          const changeP = (price - data[0].y) / data[0].y * 100;

          this.setState({
            currentPrice: bitcoinData.bpi.USD.rate_float,
            monthChangeD: change.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
            monthChangeP: changeP.toFixed(2) + '%',
            updatedAt: bitcoinData.time.updated
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    this.getData();
    this.refresh = setInterval(() => this.getData(), 90000);
  }
  componentWillUnmount(){
    clearInterval(this.refresh);
  }
  render(){
    return (
      <div id="data-container">
        { this.state.currentPrice ?
          <div id="left" className='box'>
            <div className="heading">{this.state.currentPrice.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' })}</div>
            <div className="subtext">{'Updated ' + moment(this.state.updatedAt ).fromNow()}</div>
          </div>
        : null}
        { this.state.currentPrice ?
          <div id="middle" className='box'>
            <div className="heading">{this.state.monthChangeD}</div>
            <div className="subtext">Change Since Last Month (USD)</div>
          </div>
        : null}
          <div id="right" className='box'>
            <div className="heading">{this.state.monthChangeP}</div>
            <div className="subtext">Change Since Last Month (%)</div>
          </div>

      </div>
    );
  }
}

export default InfoBox;

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      trip: [],
    };
  }
//
//     componentDidMount() {
//     const payload = {params: {
//             'outputFormat': 'rapidJSON',
//             'coordOutputFormat': 'ESPG:4326',
//             'depArrMacro': 'dep',
//             'type_origin': 'stop',
//             'name_origin': 'Chatswood',
//             'type_destination': 'stop',
//             'name_destination': 'Stanmore',
//             'TfNSWTR': 'true',
//             'wheelchair': 'on'
//           }};
//     const options = {
//       // method: 'GET',
//       headers: {
//         // 'Accept': 'application/json',
//         // 'Content-Type': 'application/json',
//         'Authorization': 'apikey Qm8X1VxayuuyBY1c80cJorTG8oiQRsIkmlU1',
//         'X-Requested-With': 'XMLHttpRequest',
//       //           // "Origin": 'https://api.transport.nsw.gov.au/v1/tp/trip',
//       //   // 'Access-Control-Allow-Origin': 'https://api.transport.nsw.gov.au/v1/tp/trip',
//       //   // 'Access-Control-Allow-Methods': 'GET',
//       //   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
//       //           // 'Access-Control-Allow-Credentials': 'true',
//       // },
//       body: JSON.stringify(payload),
//       // body: undefined,
//       cors: true, // allow cross-origin HTTP request
//       credentials: 'same-origin' // This is similar to XHR's withCredentials flag
//       }
//     }
//
//     const header = new Headers({
//       'Authorization': 'apikey Qm8X1VxayuuyBY1c80cJorTG8oiQRsIkmlU1',
//       'x-requested-with': 'XMLHttpRequest',
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     })
//
//     // SEND REQUEST
//     fetch('https://api.transport.nsw.gov.au/v1/tp/trip?outputFormat=rapidJSON&coordOutputFormat=ESPG:4326&depArrMacro=dep&type_origin=stop&name_origin=Chatswood&type_destination=stop&name_destination=Stanmore&TfNSWTR=true&wheelchair=on',  {
//       headers: {
//         // 'Accept': 'application/json',
//         // 'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Authorization': 'apikey Qm8X1VxayuuyBY1c80cJorTG8oiQRsIkmlU1',
//         'X-Requested-With': 'XMLHttpRequest'
//       },
//       // cors: true,
//       // credentials: 'same-origin'
//       // mode: 'cors',
//       cors: true
//     }
//     )
//     .then(response => {
//       console.log(response);
//     }).catch((error) => {
//       console.log(error);
//     });
//
//     // var x = new XMLHttpRequest();
//     // x.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.transport.nsw.gov.au/v1/tp/trip');
//     // // I put "XMLHttpRequest" here, but you can use anything you want.
//     // x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     // x.onload = function() {
//     //     alert(x.responseText);
//     // };
//     // axios.interceptors.request.use(function (config) {
//     // // Do something before request is sent
//     // config.headers["Authorization"] = "apikey " + 'Qm8X1VxayuuyBY1c80cJorTG8oiQRsIkmlU1';
//     //   return config;
//     // }, function (error) {
//     //   return Promise.reject(error);
//     // });
//     // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//     // const BASE_URL
//
//
// //     axios({
// //       method: 'GET',
// //       // url: 'https://cors-anywhere.herokuapp.com/https://api.transport.nsw.gov.au/v1/tp/trip',
// //       url: 'https://api.transport.nsw.gov.au/v1/tp/trip',
// //       params: {
// //         'outputFormat': 'rapidJSON',
// //         'coordOutputFormat': 'ESPG:4326',
// //         'depArrMacro': 'dep',
// //         'type_origin': 'stop',
// //         'name_origin': 'Chatswood',
// //         'type_destination': 'stop',
// //         'name_destination': 'Stanmore',
// //         'TfNSWTR': 'true',
// //         'wheelchair': 'on'
// //       },
// //       headers: {
// //         'Authorization': 'apikey Qm8X1VxayuuyBY1c80cJorTG8oiQRsIkmlU1',
// //         'X-Requested-With': 'XMLHttpRequest',
// //         // "Origin": 'https://api.transport.nsw.gov.au/v1/tp/trip',
// //         'Access-Control-Allow-Origin': 'https://api.transport.nsw.gov.au/v1/tp/trip',
// //         'Access-Control-Allow-Methods': 'GET',
// //         'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
// //         // 'Access-Control-Allow-Credentials': 'true',
// //       }
// //     })
// //     .then(res => {
// //       // console.log(res.data.json());
// //       const trip = res.data;
// //       // console.log(JSON.parse());
// //       this.setState({ trip });
// //     })
// //     .catch(error => {
// //       if (error.response) {
// //         console.log(error);
// //       }
// //     })
//   }
//
  render() {
    return (
      <div className="App">
        <h2> Travel App Coming Soon </h2>
            <ul>
              { this.state.trip }
            </ul>
      </div>
    );
  }
}

export default App;

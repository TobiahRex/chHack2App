'use strict';

angular.module('ourApp')
.controller('mainController', function($scope, $state, Posts, moment, ngSocket){
  console.log('maintCtrl');


})
.controller('splashController', function($scope, $state, Posts, $timeout) {
  console.log('splashCtrl');
  $timeout(function() {
    $state.go('home');
  }, 3000);
})
.controller('homeController', function($scope, $interval, $timeout, $state, Posts, moment, ngSocket){
  console.log('homeCtrl');
  let yo = 'yo!';
  ngSocket.emit('hello', yo);

  var refresh;

  Posts.firstRender()
  .then(res => {
    console.log('render data: ', res.data);
  })
  .catch(err => {
    console.log('render err: ', err);
  });

  $scope.newEvent = event => {
    let latitude, longitude;
    navigator.geolocation.getCurrentPosition((position)=> {
      latitude  = position.coords.latitude;
      longitude = position.coords.longitude;
    });

    if(event.click){
      let newClick = {
        lat     : latitude,
        long    : longitude,
        date    : moment().format('LTS')
      }
      Posts.clickIntervalObj.clicks.push(newClick);
    } else if(event.message){
      let newMesssage = {
        message : $scope.message,
        lat     : latitude,
        long    : longitude,
        date    : moment().format('LTS')
      };
      Posts.messageIntervalObj.messages.push(newMessage);
    }
  };

  let chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "balloonDateFormat": "JJ:NN:SS",
    "categoryField": "time",
    "columnSpacing3D": 13,
    "dataDateFormat": "JJ:NN:SS",
    "sequencedAnimation": false,
    "theme": "dark",
    "categoryAxis": {
      "autoRotateAngle": 72,
      "autoRotateCount": 0,
      "minPeriod": "ss",
      "startOnAxis": true,
      "axisAlpha": 0.84,
      "fillAlpha": 0.04,
      "gridAlpha": 0.28,
      "offset": 3,
      "title": "",
      "titleFontSize": 0
    },
    "trendLines": [],
    "graphs": [
      {
        "balloonText": "[[title]] of [[category]]:[[value]]",
        "bullet": "round",
        "id": "AmGraph-1",
        "title": "Messages",
        "type": "smoothedLine",
        "valueField": "messageCount"
      },
      {
        "balloonText": "[[title]] of [[category]]:[[value]]",
        "bullet": "square",
        "id": "AmGraph-2",
        "title": "Just Clicks",
        "type": "smoothedLine",
        "valueField": "clickCount"
      }
    ],
    "guides": [],
    "valueAxes": [
      {
        "id": "ValueAxis-1",
        "title": "Axis title"
      }
    ],
    "allLabels": [],
    "balloon": {},
    "legend": {
      "enabled": true,
      "gradientRotation": 0,
      "labelWidth": 0,
      "useGraphSettings": true
    },
    "titles": [
      {
        "id": "Title-1",
        "size": 15,
        "text": ""
      }
    ],
    "dataProvider": []
  });

  $interval(() => {
    Posts.doInterval()
    .then((data) => {
      console.log('postdata: ', data);
      chart.dataProvider = data;
      chart.validateData();
    });
  }, 10000);



  ///////// MAP ////////////////
  AmCharts.makeChart( "mapdiv", {
    "type": "map",
    "theme": "dark",
    "imagesSettings": {
      "balloonText": "[[title]] [[description]]",

    },
    "areasSettings": {
      "autoZoom": true,
      "selectedColor": "#CC0000"
    },
    "dataProvider": {
      "map": "worldLow",
      "images": [ {
        //// Test data //////
        "title": "test",
        "description": "10:10:10",
        "latitude": 40.3951,
        "longitude": -73.5619,
        "type": "circle",
        "scale": 0.3,
        "color": "#fbff2f"
      },
      {
        "title": "test2",
        "description": "10:10:10",
        "latitude": 40.3951,
        "longitude": -73.5719,
        "type": "circle",
        "scale": 0.3,
        "color": "#fbff2f"
      },
    ]},
  });



});

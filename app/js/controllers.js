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
.controller('homeController', function($scope, $state, Posts, Data, $interval, moment, ngSocket){
  console.log('homeCtrl');
  let yo = 'yo!';
  ngSocket.emit('hello', yo);

  var refresh;

  // GET messages
  // Posts.getMessages()
  // .then(res => {
  //   console.log('res:', res);
  // })
  // .catch(err => {
  //   console.log('err:', err);
  // })

  //////////////   This doesnt appear in services fil ////////////////
  // // GET posts
  // Posts.getClicks()
  // .then(res=> {
  //   console.log('res:', res);
  // })
  // .catch(err => {
  //   console.log('err:', err);
  //////////////////////////////////////////////////////

  Posts.getMessages()
  .then(res => {
    console.log('res:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });

  // messageIntervalObj.count = messageIntervalObj.messages.length;
  $scope.submitMessage = message => {

  }

  // SET message object
  // SET Lat & Long
  let latitude, longitude;
  navigator.geolocation.getCurrentPosition((position)=> {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  });
  // SET new message object
  let newMesssage = {
    message : $scope.message,
    lat     : latitude,
    long    : longitude,
    date    : moment().format('LTS')
  };

  ///////// These are causing errors because the ng-models don't exist ///////
  //
  // // SET message object
  // let messageIntervalObj = {
  //   messages  : [],
  //   count     : messages.length
  //   //  time      : $moment().format('LTS')
  // }
  //
  //
  // // SET new message object
  // let newMesssage = {
  //   //  id      : uuid(),
  //   messages: $scope.message,
  //   lat     : $scope.message.latitude,
  //   long    : $scope.message.longitude
  //   //date    : $moment().format('LTS')
  // }
  //
  //
  // // SET click object
  // let clickIntervalObj = {
  //   arr    : [],
  //   count  : arr.length
  //   //time   : $moment().format('LTS')
  // }
  //
  //
  // // SET new click object
  // let newClick = {
  //   //id      : uuid(),
  //   lat     : $scope.click.latitude,
  //   long    : $scope.click.longitude
  //   // date    : $moment().format('LTS')
  // }
  //
  // // SET graph array and map array
  // let graphArr =[];
  // let mapArr = [];
  //
  // // SET parent object
  // let parentInterval = {
  //   messagesPerInterval: [],
  //   messagesCount: messagesPerInterval.length,
  //   clicksPerInterval: [],
  //   clicksCount: clicksPerInterval.length
  //   // IntervalTime: $moment().format('LTS')
  // };
  //
  //
  // // SET data array for map/graph
  // let mapObj = {
  //   title: [],
  //   latitude: $scope.message.latitude || $scope.click.latitude,
  //   longtidue: $scope.message.longtidue || $scope.click.longtidue,
  //   type: "circle",
  //   description: newMessage.date || newClick.date,
  //   scale: 0.3,
  //   color: $6c00ff
  // }
  //
  //
  // let finalObj = {
  //   data: parentInterval,
  //   graph: mapObj
  // }
  //
  //
  //
  // // pushing each into arrays
  // graphArr.push(parentInterval);
  // mapArr.push(mapObj);
  //
  //
  // // PUSH new messages into message object's array
  // messageIntervalObj.arr.push(newMessage);
  //
  //
  // // PUSH new messages into click object's array
  // clickIntervalObj.arr.push(newClick);
  //
  // function sendInfo() {
  //   Posts.updatePosts(finalObj)
  //   .then(res => {
  //
  //     let arr = {
  //       data: res.parentData,
  //       graph: res.mapData
  //     };
  //
  //     return arr;
  //   })
  //   .catch(err => {
  //     console.log('err:', err);
  //   })
  // }
  //
  // //   post every 1 second
  // refresh = $interval(function(finalObj) {
  //   sendInfo();
  // }, 1000);

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
    "dataProvider": Data.intervalObjs
  })


  ////// Artificial Pushing of Data
  // $interval(function() {
  //   Data.addObj();
  //   chart.validateData();
  // }, 2000);
  $interval(() => {
    Data.addObj();
    chart.validateData();
  }, 2000);


  // SET click object
  let clickIntervalObj = {
    clicks  : [],
    time    : moment().format('LTS')
  };
  clickIntervalObj.count = clickIntervalObj.clicks.length;


  // SET new click object
  let newClick = {
    lat   : latitude,
    long  : longitude
  };

  // SET parent object

  // PUSH new messages into message object's array
  // messageIntervalObj.messages.push(newMessage);


  // PUSH new messages into click object's array
  clickIntervalObj.clicks.push(newClick);


  // post every 1 second
  refresh = $interval(function() {
    Posts.updatePosts(parentInterval)
    .then(res => {
      $scope.parentInterval = res.data;
    })
  }, 1000);
})

.controller('mapController', function() {
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
      "images": []/////// MAP DATA ARRAY GOES HERE!
    }
  });
})

'use strict';

const app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Data, $interval, $timeout, $window, $document) {

  // let width = 1700;
  //
  // $scope.chartStyle = {
  //   'width': `${width}px`,
  //   'height': '400px'
  // };

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

  $interval(function() {
    Data.addObj();
    chart.validateData();

    //   width += 94;
    //
    // $scope.chartStyle = {
    //   'width': `${width}px`,
    //   'height': '400px'
    // };
    // $timeout(function() {
    // }, 70);
  }, 2000);


  var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";


  AmCharts.makeChart( "mapdiv", {
    /**
    * this tells amCharts it's a map
    */
    "type": "map",

    /**
    * create data provider object
    * map property is usually the same as the name of the map file.
    * getAreasFromMap indicates that amMap should read all the areas available
    * in the map data and treat them as they are included in your data provider.
    * in case you don't set it to true, all the areas except listed in data
    * provider will be treated as unlisted.
    */
    "dataProvider": {
      "map": "worldLow",
      "getAreasFromMap": true,
      "theme": "dark"
    },
    "imagesSettings": {
      "balloonText": "[[title]] [[description]]",

    },
    /**
    * create areas settings
    * autoZoom set to true means that the map will zoom-in when clicked on the area
    * selectedColor indicates color of the clicked area.
    */
    "areasSettings": {
      "autoZoom": true,
      "selectedColor": "#CC0000"
    },
    "dataProvider": {
      "map": "worldLow",
      "images": [ {
        "title": "test",
        "description": "10:10:10",
        "latitude": 40.3951,
        "longitude": -73.5619,
        "type": "circle",
        "scale": 0.3,
        "color": "#6c00ff"
      },
      {
        "title": "test2",
        "description": "10:10:10",
        "latitude": 40.3951,
        "longitude": -73.5719,
        "type": "circle",
        "scale": 0.3,
        "color": "#6c00ff"
      },
    ]
  },

  /**
  * let's say we want a small map to be displayed, so let's create it
  */
  // "smallMap": {}
} );

});

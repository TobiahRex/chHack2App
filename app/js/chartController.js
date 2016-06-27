'use strict';

angular.module('ourApp')
.controller('chartController', function($interval, Posts) {

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
});

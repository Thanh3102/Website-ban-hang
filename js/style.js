window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
      text: "Revenue for the month"
    },
    axisX:{
      valueFormatString: "DD MMM"
    },
    axisY: {
      title: "Number of Visitors",
      scaleBreaks: {
        autoCalculate: true
      }
    },
    data: [{
      type: "line",
      xValueFormatString: "DD MMM",
      color: "#0090DA",
      dataPoints: [
        { x: new Date(2017, 0, 1), y: 610 },
        { x: new Date(2017, 0, 2), y: 680 },
        { x: new Date(2017, 0, 3), y: 690 },
        { x: new Date(2017, 0, 4), y: 700 },
        { x: new Date(2017, 0, 5), y: 710 },
        { x: new Date(2017, 0, 6), y: 658 },
        { x: new Date(2017, 0, 7), y: 734 },
        { x: new Date(2017, 0, 8), y: 963 },
        { x: new Date(2017, 0, 9), y: 847 },
        { x: new Date(2017, 0, 10), y: 853 },
        { x: new Date(2017, 0, 11), y: 869 },
        { x: new Date(2017, 0, 12), y: 943 },
        { x: new Date(2017, 0, 13), y: 970 },
        { x: new Date(2017, 0, 14), y: 869 },
        { x: new Date(2017, 0, 15), y: 890 },
        { x: new Date(2017, 0, 16), y: 930 },
        { x: new Date(2017, 0, 17), y: 1850 },
        { x: new Date(2017, 0, 18), y: 1905 },
        { x: new Date(2017, 0, 19), y: 1980 },
        { x: new Date(2017, 0, 20), y: 1858 },
        { x: new Date(2017, 0, 21), y: 1034 },
        { x: new Date(2017, 0, 22), y: 963 },
        { x: new Date(2017, 0, 23), y: 847 },
        { x: new Date(2017, 0, 24), y: 853 },
        { x: new Date(2017, 0, 25), y: 869 },
        { x: new Date(2017, 0, 26), y: 943 },
        { x: new Date(2017, 0, 27), y: 970 },
        { x: new Date(2017, 0, 28), y: 869 },
        { x: new Date(2017, 0, 29), y: 890 },
        { x: new Date(2017, 0, 30), y: 930 },
        { x: new Date(2017, 0, 31), y: 750 }
      ]
    }]
  });
  chart.render();
  
  }

var chart = new CanvasJS.Chart("chartContainerShirt", {
	animationEnabled: true,
	
	title:{
		text:"Best selling goods"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Companies"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "#0090DA",
		dataPoints: [
			{ y: 3, label: "??o nam" },
			{ y: 7, label: "??o Tank top" },
			{ y: 5, label: "??o T-shirt" },
			{ y: 9, label: "??o Polo" },
			{ y: 7, label: "??o S?? Mi" },
			{ y: 7, label: "??o Th??? Thao" },
			{ y: 9, label: "??o Th??? Thao" },
			{ y: 8, label: "??o In H??nh" },
			{ y: 11, label: "??o kho??c th??? thao" },
			{ y: 15, label: "Qu???n Nam" },
			{ y: 12, label: "Qu???n Shorts" },
			{ y: 15, label: "Qu???n Jeans" },
			{ y: 25, label: "Qu???n D??i" },
			{ y: 28, label: "Qu???n L??t Nam" },
			{ y: 29, label: "Qu???n Brief (Tam gi??c)" },
			{ y: 52, label: "Qu???n Trunk (Boxer)" },
			{ y: 103, label: "Qu???n Brief Boxer (Boxer d??i)" },
			{ y: 134, label: "Ph??? Ki???n Kh??c" }
		]
	}]
});
chart.render();
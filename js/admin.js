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
        title: "",
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
          title: ""
      },
      data: [{
          type: "bar",
          name: "companies",
          axisYType: "secondary",
          color: "#0090DA",
          dataPoints: [
              { y: 3, label: "Áo nam" },
              { y: 7, label: "Áo Tank top" },
              { y: 5, label: "Áo T-shirt" },
              { y: 9, label: "Áo Polo" },
              { y: 7, label: "Áo Sơ Mi" },
              { y: 7, label: "Áo Thể Thao" },
              { y: 9, label: "Áo Thể Thao" },
              { y: 8, label: "Áo In Hình" },
              { y: 11, label: "Áo khoác thể thao" },
              { y: 15, label: "Quần Nam" },
              { y: 12, label: "Quần Shorts" },
              { y: 15, label: "Quần Jeans" },
              { y: 25, label: "Quần Dài" },
              { y: 28, label: "Quần Lót Nam" },
              { y: 29, label: "Quần Brief (Tam giác)" },
              { y: 52, label: "Quần Trunk (Boxer)" },
              { y: 103, label: "Quần Brief Boxer (Boxer dài)" },
              { y: 134, label: "Phụ Kiện Khác" }
          ]
      }]
  });
  chart.render();


  function MyFuncitionOn() {
    document.getElementById('form-group').style.display = "block";      
}
function MyFuncitionOff1() {
    document.getElementById('form-group').style.display = "none"; 
}
var dem = 6;
function MyFuncitionOff(){
    if( document.getElementById('nhapHang').value==!"" || document.getElementById('giaBan').value==!"" || document.getElementById('giaVon').value==!"" || document.getElementById('tonKho').value==!"" || document.getElementById('khacDat').value==!"" || document.getElementById('hetKhac').value==!""){
        document.getElementById('form-group').style.display = "none";
        var table = document.getElementById("myTable");
        var count = table.rows.length;
        var row = table.insertRow(count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = "NU" + dem.toString();
        cell2.innerHTML = document.getElementById('nhapHang').value;
        cell3.innerHTML = document.getElementById('giaBan').value;
        cell4.innerHTML = document.getElementById('giaVon').value;
        cell5.innerHTML = document.getElementById('tonKho').value;
        cell6.innerHTML = document.getElementById('khacDat').value;
        cell7.innerHTML = document.getElementById('hetKhac').value.toString() + " ngày";
        reset();
        dem++;
    }
    else
    {
        alert('Bạn hãy nhập đầy đủ thông tin');
        return;
    }
}

function reset(){
    document.getElementById('nhapHang').value="";
    document.getElementById('giaBan').value="";
    document.getElementById('giaVon').value="";
    document.getElementById('tonKho').value="";
    document.getElementById('khacDat').value="";
    document.getElementById('hetKhac').value="";
}

function myFunctionFind() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
}
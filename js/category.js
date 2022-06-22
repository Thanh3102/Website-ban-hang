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
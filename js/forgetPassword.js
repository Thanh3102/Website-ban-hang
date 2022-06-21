$(document).ready(function(){  
    $('#txtNumbers').focusout(function(){
     var  numbersRegex = /^[0-9]{10}$/;
        if (numbersRegex.test($('#txtNumbers').val())){
            $('#numbersError').text('Số điện thoại hợp lệ.') 
            $('#numbersError').css('color','blue')
        }
        else{
            $('#numbersError').text('Số điện thoại không hợp lệ. Số điện thoại phải gồm 10 chữ số bao gồm từ 0-9') 
            $('#numbersError').css('color','red')
        }
    })
})
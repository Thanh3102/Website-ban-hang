$(document).ready(function(){      
    $('#txtUserID').focusout(function(){
        var  userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (userIDRegex.test($('#txtUserID').val()))
        {
            $('#userIDError').text('Tên tài khoản hợp lệ') 
            $('#userIDError').css('color','blue')
        }
        else
        {
            $('#userIDError').text('Tên tài khoản không hợp lệ. Độ dài từ 5-12') 
            $('#userIDError').css('color','red')
        }
    })
    $('#txtPassword').focusout(function(){
        var  passwordRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (passwordRegex.test($('#txtPassword').val()))
        {
            $('#passwordError').text('Mật khẩu hợp lệ') 
            $('#passwordError').css('color','blue')
        }
        else
        {
            $('#passwordError').text('Mật khẩu không hợp lệ. Độ dài từ 5-12.') 
            $('#passwordError').css('color','red')
        }
    })
    $('#btnCheck').click(function(){
        if ($('#txtUserID').val() == 'admin' && $('#txtPassword').val() == 'admin'){
            window.open('http://127.0.0.1:5500/admin.html', "_self")
        }
    })
})
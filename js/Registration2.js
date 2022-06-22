$(document).ready(function(){  
    $('#txtUserID').focusout(function(){
        var  userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (userIDRegex.test($('#txtUserID').val())){
            $('#userIDError').text('Tên tài khoản hợp lệ') 
            $('#userIDError').css('color','blue')
        }
        else{
            $('#userIDError').text('Tên tài khoản không hợp lệ. Độ dài từ 5-12') 
            $('#userIDError').css('color','red')
        }
    })
    
    $('#txtPassword').focusout(function(){
        var  passwordRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (passwordRegex.test($('#txtPassword').val())){
            $('#passwordError').text('Mật khẩu hợp lệ') 
            $('#passwordError').css('color','blue')
        }
        else{
            $('#passwordError').text('Mật khẩu không hợp lệ. Độ dài từ 5-12.') 
            $('#passwordError').css('color','red')
        }
    })
        
})
// function checkPw(form) {
//             pw1 = form.txtPassword.value;
//             pw2 = form.txtPassword2.value;
            
//             if (pw1 != pw2) {
//             alert ("\nYou did not enter the same new password twice. Please re-enter your password.")
//             return false;
//             }
//             else return true;
//             }
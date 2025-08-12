const userId = document.querySelector('input[name=user_id]');
const userPw = document.querySelector('input[name=user_pw]');
const errorMsg = document.querySelector('.error_msg');
const loginBtn = document.querySelector('#login_btn');

loginBtn.addEventListener('click',()=>{
    if(userId.value == '' && userPw.value == ''){
        errorMsg.textContent = '아이디를 입력해 주세요'
    }else if(userPw.value == ''){
        errorMsg.textContent = '비밀번호를 입력해 주세요'
    }else if(userId.value == ''){
        errorMsg.textContent = '아이디를 입력해 주세요'
    }else {
        errorMsg.textContent = '아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호 입력정보가 잘못되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요'
    }
})
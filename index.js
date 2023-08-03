document.addEventListener('DOMContentLoaded', () => {

    const signupform = document.querySelector('#signupForm');
    const loginform = document.querySelector('#loginForm');
    const signupcontainer = document.querySelector('#signupcontainer');
    const logincontainer = document.querySelector('#logincontainer');
    const loginlink = document.querySelector('#loginlink');
    const signuplink = document.querySelector('#signuplink');

    signuplink.addEventListener('click',() =>{
        logincontainer.style.display = 'none';
        signupcontainer.style.display = 'block';
    });
    loginlink.addEventListener('click',() =>{
        logincontainer.style.display = 'block';
        signupcontainer.style.display = 'none';
    });
    loginform.addEventListener('submit',(e) =>{
        e.preventDefault();
        const username = document.querySelector('#loginUsername').value;
        const password = document.querySelector('#loginPwd').value;
        console.log('login:',username,password);
    });
    signupform.addEventListener('submit',(e) =>{
        e.preventDefault();
        const username = document.querySelector('#SignUpusername').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#SignUppwd').value;
        console.log('signup:',username,email,password);

    });
    
});
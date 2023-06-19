// let form = document.getElementById("form")

// form.addEventListener("submit", ()=>{
//     submitFnc()
// })

// function User(n,e,d,r,l,p){
//     this.username = n;
//     this.email = e;
//     this.dob = d;
//     this.role = r;
//     this.location = l;
//     this.password = p
// }
// function submitFnc(){
//     event.preventDefault()

//     let username = form.username.value;
//     let email = form.email.value;
//     let dob = form.dob.value;
//     let role = form.role.value;
//     let location = form.location.value;
//     let password = form.password.value;
//     let cp = form.cpass.value;
    
//      if(cp !== password){
//         alert("Enter correct password")
//         return
//     }
    

//     let newUser = new User(username,email,dob,role,location,password)


// fetch("http://localhost:4500/user/add", {
//     method:"POST",
//     headers:{
//         "content-type":"application/json"
//     },
//     body:JSON.stringify(newUser)
// })
// .then((res)=> res.json())
// .then((res)=>{
//     console.log(res)
//     alert(res.msg)
//     window.location.href="user.html"
// })
// .catch((err)=>{
//     console.log(err)
// })
// }




function signup(){

    var data = document.getElementById('myform');

    let name = data.uname.value;
    let mobile = data.num.value;
    let email = data.mail.value;
    let password = data.psw.value;

    var info = 
        {
            name,
            mobile,
            email,
            password
        }
       

    var arr;

     arr = localStorage.getItem('signup');

    if(arr==null){
        arr=[];
    }
    else{
         arr = JSON.parse(localStorage.getItem('signup'));
      

    }
    arr.push(info);
   
    localStorage.setItem('signup',JSON.stringify(arr));
    alert('You are Successfully Registered')
    window.location.href="home.html";
//    login.html
}

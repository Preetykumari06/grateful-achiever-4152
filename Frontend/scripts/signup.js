let form = document.getElementById("form")

form.addEventListener("submit", ()=>{
    submitFnc()
})

function User(n,e,d,r,l,p){
    this.name = n;
    this.email = e;
    this.dob = d;
    this.location = l;
    this.password = p
}
function submitFnc(){
    event.preventDefault()

    let name = form.name.value;
    let email = form.email.value;
    let dob = form.dob.value;
    let location = form.location.value;
    let password = form.password.value;
    let cp = form.cpass.value;
    
     if(cp !== password){
        alert("Enter correct password")
        return
    }
    

    let newUser = new User(name,email,dob,location,password)


fetch("localhost:3000/users/signup", {
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(newUser)
})
.then((res)=> res.json())
.then((res)=>{
    console.log(res)
    alert(res.msg)
    window.location.href="user.html"
})
.catch((err)=>{
    console.log(err)
})
}
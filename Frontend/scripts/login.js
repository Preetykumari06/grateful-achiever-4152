let form = document.getElementById("form")

form.addEventListener("submit", ()=>{
    submitFnc()
})

function User(n,p){
    this.name = n;
    this.password = p
}
function submitFnc(){
    event.preventDefault()

    let name = form.name.value;
    let password = form.password.value;
    
    //  if(cp !== password){
    //     alert("Enter correct password")
    //     return
    // }
    

    let newUser = new User(name,password)


fetch("localhost:3000/users/login", {
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
    // window.location.href="user.html"
})
.catch((err)=>{
    console.log(err)
})
}
var num=document.getElementById("add");
var sor=document.getElementById("sort");
var maxi=document.getElementById("max");
var min=document.getElementById("min");
var rev=document.getElementById("rev");
var even=document.getElementById("even");
var odd=document.getElementById("odd");
var msg=document.getElementById("message");
var message;
num.onclick=()=>{
    let arr=document.getElementById("num").value;
    let input=arr.split(",").map((n)=>parseInt(n))
    // let result=0;
     result = input.reduce((num,acc) =>(acc+num),0);
    message="your result is:"+result
    msg.style.display="inherit";
    msg.innerHTML=message;
}
sor.onclick=()=>{
    let text=document.getElementById("num").value;
    let input=text.split(",");
    for(let i=0;i<input.length;i++)
    {
        for(let j=i+1;j<input.length;j++)
        {
            if(input[j]<input[i]){
                temp=input[j];
            input[j]=input[i];
            input[i]=temp;
            }
        }
    }
    message="your result is:"+input
    msg.style.display="inherit";
    msg.innerHTML=message;
}

even.onclick=()=>{
    let arr=document.getElementById("num").value;
    let input=arr.split(",");
    const eve=input.filter((x)=>x%2==0)
    message="your result is:"+eve
    msg.style.display="inherit";
    msg.innerHTML=message;
}
odd.onclick=()=>{
    let arr=document.getElementById("num").value;
    let input=arr.split(",");
    const odd=input.filter((x)=>x%2!=0)
    message="your result is:"+odd
    msg.style.display="inherit";
    msg.innerHTML=message;
}

maxi.onclick=()=>{
    let arr=document.getElementById("num").value;
    let input=arr.split(",");
    let result="";
    let res=input.reduce((num,acc)=>(num>acc?num:acc),result[0])
    message="your result is:"+res
    msg.style.display="inherit";
    msg.innerHTML=message;
}

min.onclick=()=>{
    let arr=document.getElementById("num").value;
    let input=arr.split(",");
    let result="";
    let res=input.reduce((num,acc)=>(num<acc?num:acc),result[0])
    message="your result is:"+res
    msg.style.display="inherit";
    msg.innerHTML=message;
}

rev.onclick=()=>{
    let arr=document.getElementById("num").value;
    let input=arr.split(",");
    let result = input.reverse();
    message="your result is:"+result
    msg.style.display="inherit";
    msg.innerHTML=message;
}

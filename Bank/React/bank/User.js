var user=[{id:1,username:"shanmu",password:"1234",balance:1000},{id:2,username:"sundar",password:"1212",balance:2000}]
export function getuser(){
return user
}
export function userlogin(a,b)
{
    //var m1="no";
    var d="";
    user.map(f=>{
        if(f["username"]===a && f["password"]===b)
        {
           // console.log("loginsucces");
           // m1="yes";
            d=f;
           // return "yes";
        }
        else{
            //console.log(a," ",b)
            //console.log(f.username," ",f.password)
            //console.log("loginfailed");
            //return "no";
        }
    }
    )
    return d;
    //console.log(m1);
    //user=m;
}
export function changebalance(ud,a){
    user.map(f=>{
        if(f["id"]===ud["id"])
        {
            ud["balance"]-=a;
           // ud=f;
        }
    })
    //return ud;
}
export function addbalance(ud,a){
    user.map(f=>{
        if(f["id"]===ud["id"])
        {
            
            ud["balance"]+=a;
           // ud=f;
        }
    })
}
export function finduser(a)
{
    var found=""
    user.map(f=>{
        if(f["id"]===a)
        {
            found=f;
        }
    })
    return found;
}
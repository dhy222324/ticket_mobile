

const EventBus={}


// EventBus.test=[]

// {test:[]}
// EventBus[eventName]=[]

// for(var n in data){
//     console.log(data[n])
// }

// this.$on("test",fn())




// EventBus.test.push(function(){})
// console.log(EventBus);


const on=function(eventName,callBack){
    if(!EventBus[eventName]){
        EventBus[eventName]=[];
    }
    EventBus[eventName].push(callBack)
}

/*
on("test",()=>{
    console.log("run")
})
on("test",()=>{
    console.log("run")
})
on("test",()=>{
    console.log("run")
})
*/

// {test:[fn]}

// emit("test",{name:"Msea"});

var emit=function(eventName,params){
    if(!EventBus[eventName])return;
    EventBus[eventName].map((cb)=>{
           cb(params);
    })
}

// 测试
// on("test",(res)=>{
//     console.log(res)
// })

// emit("test",{name:"Msea"})

// off("test")

var off=function(eventName){
    if(!EventBus[eventName])return;
    EventBus[eventName]=[];
}

export default {
    $on:on,
    $emit:emit,
    $off:off
}





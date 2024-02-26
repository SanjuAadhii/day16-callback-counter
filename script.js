var div = document.createElement("div");
var i=10;

setTimeout(()=>{
    div.innerHTML=`Counter : ${i}`;
    i--;
    setTimeout(()=>{
        div.innerHTML=`Counter : ${i}`;
        i--;
        setTimeout(()=>{
            div.innerHTML=`Counter : ${i}`;
            i--;
            setTimeout(()=>{
                div.innerHTML=`Counter : ${i}`;
                i--;
                setTimeout(()=>{
                    div.innerHTML=`Counter : ${i}`;
                    i--;
                    setTimeout(()=>{
                        div.innerHTML=`Counter : ${i}`;
                        i--;
                        setTimeout(()=>{
                            div.innerHTML=`Counter : ${i}`;
                            i--;
                            setTimeout(()=>{
                                div.innerHTML=`Counter : ${i}`;
                                i--;
                                setTimeout(()=>{
                                    div.innerHTML=`Counter : ${i}`;
                                    i--;
                                    setTimeout(()=>{
                                        div.innerHTML=`Counter : ${i}`;
                                        i--;
                                        setTimeout(()=>{
                                            div.innerHTML=`Counter : ${i}`;
                                            i--;
                                            setTimeout(()=>{
                                                div.innerHTML=`Happy Independence Day`;
                                                i--;
                                                
                                            },1000)
                                            
                                        },1000)
                                        
                                    },1000)
                                    
                                },1000)
                                
                            },1000)
                            
                        },1000)
                        
                    },1000)
                    
                },1000)
                
            },1000)
            
        },1000)
        
    },1000)
},1000)

document.body.append(div)
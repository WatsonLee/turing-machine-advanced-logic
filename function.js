function getValues(){
    var inputStr=document.getElementById("txt1").value;
    var state="_q0_";
    var procStr="";
 
    var prev=document.getElementById("prev");
    var cent=document.getElementById("cent");
    var rail=document.getElementById("rail");
    var res =document.getElementById("res");
    prev.innerHTML=cent.innerHTML=rail.innerHTML=res.innerHTML="";
    prev.style.color="Black";
    cent.style.color="Red";
    rail.style.color="Black";
    prev.style.fontWeight=cent.style.fontWeight=rail.style.fontWeight="bold";
    prev.style.fontSize=cent.style.fontSize=rail.style.fontSize=res.style.fontSize="24";


    var len=inputStr.length;

    for(i=0;i<len;i++){
        if(inputStr[i]=="0"||inputStr[i]=="1"){
            continue;
        }else{
            res.innerHTML="输入数据有误";
            return;
        }
    }

    prev.innerHTML=procStr;
    cent.innerHTML="_q0_"+inputStr[0];
    rail.innerHTML=inputStr.substring(1);
    res.innerHTML+="<strong>_q0_"+inputStr[0]+"</strong>"+inputStr.substring(1)+"<br/>";
    
    
  
    for(i=0;i<len;){
        sleep(1000);
        document.getElementById("time").innerText=i+"";
        switch(state){
            case "_q0_":
                if(inputStr[i]=="0"){
                    state="_q1_";
                }else{
                    state="_q0_";
                }
                procStr+=inputStr[i];
                i+=1;
                prev.innerHTML=procStr;
                if(i<len){
                    cent.innerHTML=state+inputStr[i];
                    res.innerHTML+=procStr+"<strong>"+state+inputStr[i]+"</strong>";
                }else{
                    cent.innerHTML=state;
                    res.innerHTML+=procStr+"<strong>"+state+"</strong>";
                }
                
                
                
                if(i+1>=len){
                    rail.innerHTML="";
                    res.innerHTML+="<br/>";
                }else{
                    rail.innerHTML=inputStr.substring(i+1);
                    res.innerHTML+=inputStr.substring(i+1)+"<br/>";
                }
                
                break;
            case "_q1_":
                if(inputStr[i]=="0"){
                    state="_q1_";
                    procStr+=inputStr[i];
                    i+=1;
                    prev.innerHTML=procStr;
                    if(i<len){
                        cent.innerHTML=state+inputStr[i];
                        res.innerHTML+=procStr+"<strong>"+state+inputStr[i]+"</strong>";
                    }else{
                        cent.innerHTML=state;
                        res.innerHTML+=procStr+"<strong>"+state+"</strong>";
                    }
    
                    
                    
                    if(i+1>=len){
                        rail.innerHTML="";
                        res.innerHTML+="<br/>";
                    }else{
                        rail.innerHTML=inputStr.substring(i+1);
                        res.innerHTML+=inputStr.substring(i+1)+"<br/>";
                    }
                    
                }else{
                    state="_q2_";
                    inputStr[i]="0";
                    procStr+=inputStr[i];
                    i+=1;
                    prev.innerHTML=procStr;
                    if(i<len){
                        cent.innerHTML=state+inputStr[i];
                        res.innerHTML+=procStr+"<strong>"+state+inputStr[i]+"</strong>";
                    }else{
                        cent.innerHTML=state;
                        res.innerHTML+=procStr+"<strong>"+state+"</strong>";
                    }
    
                    
                    
                    if(i+1>=len){
                        rail.innerHTML="";
                        res.innerHTML+="<br/>";
                    }else{
                        rail.innerHTML=inputStr.substring(i+1);
                        res.innerHTML+=inputStr.substring(i+1)+"<br/>";
                    }
                }
                break;
            case "_q2_":
                res.innerHTML+="Stop<br/>";
                return;
            default:
        }

        
    }

    res.innerHTML+="Accept<br/>"
    
}


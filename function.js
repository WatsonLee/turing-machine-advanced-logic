function getValues(){
    var inputStr=document.getElementById("txt1").value;
    var state="_q0_";
    var procStr="";
 
    var res =document.getElementById("res");
    res.innerHTML="";
    res.style.fontSize="24";
    var len=inputStr.length;

    for(i=0;i<len;i++){
        if(inputStr[i]=="0"||inputStr[i]=="1"){
            continue;
        }else{
            res.innerHTML="输入数据有误";
            return;
        }
    }
    res.innerHTML+="<font color='#FF0000'><strong>_q0_"+inputStr[0]+"</strong></font>"+inputStr.substring(1)+"<br/>";
    for(i=0;i<len;){
        switch(state){
            case "_q0_":
                if(inputStr[i]=="0"){
                    state="_q1_";
                }else{
                    state="_q0_";
                }
                procStr+=inputStr[i];
                i+=1;
                if(i<len){
                    res.innerHTML+=procStr+"<font color='#FF0000'><strong>"+state+inputStr[i]+"</strong></font>";
                }else{   
                    res.innerHTML+=procStr+"<font color='#FF0000'><strong>"+state+"</strong></font>";
                }
                if(i+1>=len){
                    res.innerHTML+="<br/>";
                }else{   
                    res.innerHTML+=inputStr.substring(i+1)+"<br/>";
                }
                break;
            case "_q1_":
                if(inputStr[i]=="0"){
                    state="_q1_";
                    procStr+=inputStr[i];
                    i+=1;
                    if(i<len){
                        res.innerHTML+=procStr+"<font color='#FF0000'><strong>"+state+inputStr[i]+"</strong></font>";
                    }else{   
                        res.innerHTML+=procStr+"<font color='#FF0000'><strong>"+state+"</strong></font>";
                    }
                    if(i+1>=len){
                        res.innerHTML+="<br/>";
                    }else{   
                        res.innerHTML+=inputStr.substring(i+1)+"<br/>";
                    }
                }else{
                    state="_q2_";
                    inputStr[i]="0";
                    procStr+=inputStr[i];
                    i+=1;
                    if(i<len){
                        res.innerHTML+=procStr+"<font color='#FF0000'><strong>"+state+inputStr[i]+"</strong></font>";
                    }else{   
                        res.innerHTML+=procStr+"<font color='#FF0000'><strong>"+state+"</strong></font>";
                    }
                    if(i+1>=len){
                        res.innerHTML+="<br/>";
                    }else{
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


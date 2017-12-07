function run(){
    var _rulesValue=document.getElementById("rules").value;
    var _inputStrValue=document.getElementById("tape").value;
    var _res =document.getElementById("res");
    
    var _ruleSplit=_rulesValue.split('\n');
    var _state='_'+_ruleSplit[0].split(':')[1]+'_';
    var _rulesLen=_ruleSplit.length;
    var _procStr="";
    _res.style.fontSize="24";
    var _inputStrLen=_inputStrValue.length;
    _res.innerHTML+="<font color='#FF0000'><strong>"+_state+"</strong></font>"+_inputStrValue+"<br/>";
    
    _rulesArray=parseRules(_ruleSplit);
    var stop=false;
    for(var i=0;i<_inputStrLen;){
        var index=getRuleIndex(_rulesArray, _state, _inputStrValue[i]);
        if(index < 0){
            _res.innerHTML+="Stop<br/>";
            return;
        }
        _inputStrValue[i]=_rulesArray[index][2];
        _state=_rulesArray[index][4];
        if(_rulesArray[index][3]=='L'||_rulesArray[index][3]=='l'){
            _procStr=_procStr.slice(0, -1);
            i-=1;
        }else if(_rulesArray[index][3]=='R' || _rulesArray[index][3]=='r'){
            _procStr+=_inputStrValue[i];
            i+=1;
        }else{
            _procStr+=_inputStrValue[i];
            stop=true
        }
        _res.innerHTML+=_procStr+"<font color='#FF0000'><strong>"+_state+"</strong></font>"+_inputStrValue.substring(i)+"<br/>";
    }

    _res.innerHTML+="Accept<br/>";
/*
    var state="_q0_";
    var procStr="";
 
    
    res.innerHTML="";
    res.style.fontSize="24";
    var len=inputStr.length;


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
    */
}

function parseRules(rules){
    var len=rules.length;
    var rArray=new Array();
    for(var i=1;i<len;i++){
        rArray[i-1]=new Array();
        temp=rules[i].split(',');
        for(var j=0;j<5;j++){
            rArray[i-1][j]=temp[j];
            if(j==0 || j==4){
                rArray[i-1][j]='_'+rArray[i-1][j]+'_';
            }
        }
    }
    return rArray;
}

function getRuleIndex(rules, state, ch){
    for(var i=0;i<rules.length;i++){
        if(rules[i][0]==state && rules[i][1]==ch){
            return i;
        }
    }
    return -1;
}

function clear(){
    clearInstruction();
    clearTape();
}

function clearInstruction(){
    document.getElementById("rules").value="";
}

function clearTape(){
    document.getElementById("tape").value="";
}
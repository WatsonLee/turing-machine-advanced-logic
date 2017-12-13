function run(){
    var _rulesValue=document.getElementById("rules").value;
    var _inputStrValue=document.getElementById("tape").value;
    var _res =document.getElementById("res");
    
    var _ruleSplit=_rulesValue.split('\n');
    var _state='_'+_ruleSplit[0].split(':')[1]+'_';    //获取初始状态，并在状态前后添加下划线，易于识别
    var _rulesLen=_ruleSplit.length;
    var _procStr="";									//已处理字符串
    _res.style.fontSize="24";
    var _inputStrLen=_inputStrValue.length;
    _res.innerHTML+="<font color='#FF0000'><strong>"+_state+"</strong></font>"+_inputStrValue+"<br/>"; //先显示为处理的状态，在原始字符串前添加初始状态，状态字符变红加粗
    
    _rulesArray=parseRules(_ruleSplit);    //处理规则
    for(var i=0;i<_inputStrLen;){
        var index=getRuleIndex(_rulesArray, _state, _inputStrValue[i]);
        if(index < 0){
            _res.innerHTML+="Stop<br/>";    //如果无法找到匹配的规则，则停机
            return;
        }
		_inputStrValue = replaceChar(_inputStrValue, i, _rulesArray[index][2]); //将当前字符替换为规则中的目标字符
        //_inputStrValue[i]=_rulesArray[index][2];
        _state=_rulesArray[index][4];                                           //将当前状态更新为目标状态
        if(_rulesArray[index][3]=='L'||_rulesArray[index][3]=='l'){				//如果是左移，则将下标简易，并将已处理字符串长度减一
            _procStr=_procStr.slice(0, -1);
            i-=1;
        }else if(_rulesArray[index][3]=='R' || _rulesArray[index][3]=='r'){     //如果右移，则下标增一，并将已处理字符串加上当前字符
            _procStr+=_inputStrValue[i];
            i+=1;
        }else{																	//否则只是将已处理字符串加上当前字符
            _procStr+=_inputStrValue[i];
        }
        _res.innerHTML+=_procStr+"<font color='#FF0000'><strong>"+_state+"</strong></font>"+_inputStrValue.substring(i)+"<br/>";
		
    }

    _res.innerHTML+="Accept<br/>";
}

/**
将规则解析为array[][5]数组
*/
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

/**
替换纸带中的某一位，返回替换后的纸带
*/
function replaceChar(str, index, ch){
	var i = 0;
	var ret = "";
	for(i=0; i < index; i++){
		ret += str[i];
	}
	ret += ch;
	for(index += 1;index < str.length; index ++){
		ret += str[index];
	}
	return ret;
}

/**
判断使用的那一条规则，返回规则下标
*/
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
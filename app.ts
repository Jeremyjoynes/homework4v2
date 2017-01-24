//console.log('file is working!');
// let myNumber = (<HTMLInputElement>document.getElementById('num1'));
// console.log(myNumber.value);
//console.log((<HTMLInputElement>document.getElementById('mynumber')).value);
document.getElementById('form1').addEventListener('click', function (event){
    event.preventDefault();
    //let val1 = document.getElementById('num1').valueOf; //gave error about HTMLelement
    let val1 = parseInt((<HTMLInputElement>document.getElementById("num1")).value); // gave app.ts:5 Uncaught SyntaxError: Unexpected token <
    //let val2 = document.getElementById('num2').valueOf; // [ts] Type 'HTMLElement' is not assignable to number
    let val2 = parseInt((<HTMLInputElement>document.getElementById("num2")).value);
    //let val1 = <HTMLInputElement>document.getElementById('num1').value;
    //let val1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    //let val2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    //let val1 = (<HTMLInputElement>document.getElementById('num1'));
    //let val2 = (<HTMLInputElement>document.getElementById('num1'));
   
    let ans = 0;
     if(val1 > val2)
    {
        console.log(val1 + " is larger than: "+ val2);
        ans = val1;
        
    }
    else if(val2> val1)
    {
        console.log(val2 + " is larger than: " + val1);
        ans = val2;
    }
    else
    {
        console.log(val1 + 'is the same as' + val2);
       let ans = "";
        ans = val1 + " is the same as " +val2;
    }
    document.getElementById('output1').innerHTML = ans.toString();
})

document.getElementById('form2').addEventListener('click', function(e)
{

    //shortest word
    //var str1 = document.getElementById('word1').value;
    //var str2 = document.getElementById('word2').value;
   // var ansSub1 = document.getElementById('output2');
   // var holdstr = "";
       e.preventDefault();
    let str1 = (<HTMLInputElement>document.getElementById('word1')).value;
    let str2 = (<HTMLInputElement>document.getElementById('word2')).value;
    let holdstr = "";

    if(str1.length < str2.length)
    {
      console.log(str1+ ' is smaller than' + str2);
      holdstr = str1;
    }
    else if(str2.length < str1.length)
    {
      console.log(str2 +' length is smaller than ' + str1);
      holdstr = str2;
    }
    else
    {
        console.log(str1+' is the same length as '+str2);
        holdstr = str1 +" is the same length as "+str2
    }
    document.getElementById('output2').innerHTML = holdstr;


})

document.getElementById('form3').addEventListener('click', function(e){
    e.preventDefault();
    /*
    var s = document.getElementById('sides').value;
    var n = document.getElementById('numDice').value;
    var ansSub2 = document.getElementById('output3');
    var total = 0;
    var c =0; */
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let s = (<HTMLInputElement>document.getElementById('sides'));
    let n = (<HTMLInputElement>document.getElementById('numDice'));
    let c: number =0;
    let total: number = 0;
    for(var i =0; i < n.valueAsNumber; i++)
    {
       c=  Math.floor(Math.random() * s.valueAsNumber) + 1;
       console.log('rolled: ' + c);

       total += c;
        console.log("total: "+total)
    }

    document.getElementById('output3').innerHTML = total.toString();

    
});


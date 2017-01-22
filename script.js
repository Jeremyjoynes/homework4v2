document.addEventListener('submit', function(e){
    e.preventDefault();
    var val1 = document.getElementById('num1').value;
    var val2 = document.getElementById('num2').value;
    var ans = 0;
    var ansSubmit = document.getElementById('output1');
    //test which number is larger
    if(val1 > val2)
    {
        console.log(val1 + " is larger than: "+ val2);
        ans = val1;
    }
    else if(val2 > val1)
    {
        console.log(val2 + " is larger than: " + val1);
        ans = val2;
    }
    else
    {
        console.log(val1 + 'is the same as' + val2);
        ans = val1 + " is the same as " +val2;
    }
    ansSubmit.innerHTML = ans;


    //shortest word
    var str1 = document.getElementById('word1').value;
    var str2 = document.getElementById('word2').value;
    var ansSub1 = document.getElementById('output2');
    var holdstr = "";
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
    ansSub1.innerHTML = holdstr;

//dice rolls
    var s = document.getElementById('sides').value;
    var n = document.getElementById('numDice').value;
    var ansSub2 = document.getElementById('output3');
    var total = 0;
    var c =0;
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    for(var i =0; i < n; i++)
    {
       c=  Math.floor(Math.random() * s) + 1;
       console.log('rolled: ' + c);

       total += c;
        console.log("total: "+total)
    }

    ansSub2.innerHTML = total;

})
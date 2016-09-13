 "Is there a vowel in there?"

Description:

Given an array of numbers (s), check if any of the numbers are the character codes for lower case vowels.

If they are, change the array value to a string of that vowel.

Return the resulting array.

//my solution
function isVow(a){
  for(var i=0; i< a.length ;i++){
  if(a[i]==97)
    a[i] = "a";
  else if(a[i]==101)
    a[i] = "e";
  else if(a[i]==105)
    a[i] = "i";
  else if(a[i]==111)
    a[i] = "o";
  else if(a[i]==117)
    a[i] = "u";
  }
  return a;
}

//others solution


//fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。

function isVow(a){
  for(var i = 0; i<a.length; i++){
    var char = String.fromCharCode(a[i]);
    if('aeiou'.includes(char) === true){
      a[i] = char;
    }
  }
  return a;
}

//json
function isVow(a){
  var diccionary = {"a":97,"e":101,"i":105,"o":111,"u":117};
  
  a.forEach(function (item,index) {

    for (var key in diccionary) {
      if (item === diccionary[key])
        a[index] = key;          
    }

  });

  return a;
}

//正则 数组迭代forEach()对数组中每一项运行给定的函数，这个函数没有返回值
function isVow(a){
  
  
 a.forEach(function(code, index){
   
   if(String.fromCharCode(code).match(/[aeiou]/g)) a[index] = String.fromCharCode(code);
 
 })
  
  return a;
  
}

//for-in循环
function isVow(a){
  let vowelsLetters = [97, 101, 105, 111,117];
  for(let i in a){
      for(let vLetter of vowelsLetters){
        if(a[i] == vLetter){
          a[i] =  String.fromCharCode(vLetter)
        }
      
      }

    }
    
  return a;
  
}

//switch
function isVow(a) {
 return a.map(function(n) {
   switch(n) {
     case 97:
     case 101:
     case 105:
     case 111:
     case 117: return String.fromCharCode(n);
     default: return n;
   }
 });
}

//indexOf
function isVow (arr) {
  let vowels = [97,101,105,111,117];

  for (let i = 0; i <arr.length; i += 1) {
    if (vowels.indexOf(arr[i]) > -1) {
      arr[i] = String.fromCharCode(arr[i]);
    }
  }

  return arr;
}

//isFinite() 函数用于检查其参数是否是无穷大
function isVow(a){
  for(var i = 0; i < a.length; i++){
    if(isFinite(a[i]) && (a[i] == 97 || a[i] == 101 || a[i] == 97 || a[i] == 105 || a[i] == 111 || a[i] == 117)){
     a[i] = String.fromCharCode(a[i]);
    }
  }
  
  return a;
}
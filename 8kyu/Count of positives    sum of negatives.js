Count of positives / sum of negatives

Description:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65].

//Fundamentals  Arrays  Lists  Data Structures  Arithmetic  Mathematics  Algorithms  Numbers

//my wrong solutions  1.没有正确的判断 input是否为空或不存在 2.没有读清题目要求 正数和负数
function countPositivesSumNegatives(input) {
	var a = [];
    if(input.length>0){
        for(var i = 0;i < input.length; i++){
             if(input[i] >= 0){
                 a[0]++;
             }else{
                 a[1] += input[i]; 
             }
         }
    return a;
    }else{
        return a;
    }
}

//my right solution 
1.要先判断数组不为空 再判断数组长度不为0  2.不能直接用 var a = []; a[0] a[1]
function countPositivesSumNegatives(input) {
    var a =0 ,b = 0;
    if(input == null || input.length == 0 ){
        return [];
    }else{
        for(var i = 0,l = input.length;i < l; ++i){
             if(input[i] > 0){
                 a ++;
             }else{
                 b += input[i]; 
             }
        }
        return [a,b];
    }
}

//others solution

function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce(function(p, c, i, s){
    c <= 0 ? p[1] += c : p[0] += 1;
    return p;
  }, [0, 0]) : [];
}

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0){return []}
    console.log(input)

    var array = [];
    var num = 0;
    var sum = 0;
    input.forEach(function(a){if (a > 0){num++} else {sum += a}})
    array.push(num)
    array.push(sum)
    return array
}
let hello = 'Hello World';
alert(hello);

// 整数を代入する
let int1 = 1;
alert(int1);

// 負数を代入する
let int2 = -10;
alert(int2);

// 小数点を代入する
let float1 = 3.14;
alert(float1);

// 文字列を代入する
let str1 = 'JavaScriptを学ぼう'
alert(str1);

alert(4 + 3);

alert(8 - 5);

alert(2 * 6);

alert(10 / 2);

alert('Hello' + 'World');

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごよりやすい');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else {
  alert('みかんの値段がりんごより高い');
}

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');

let i;
let num1 = 0;

for(i = 1; i <11; i++){
  num1 = num1 + i;
}

alert('1から10まで足し算した結果は' + num1 + 'です');

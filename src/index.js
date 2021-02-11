// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

//
// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

//const変数は上書き不可
// val3 = "const変数の上書き";

//const変数は再宣言不可
// const val3 = "const変数を再宣言";

const val4 = {
  name: "じゃけぇ",
  age: 28
};

// console.log(val4);
// constで定義した小舟くとはプロパティの変更が可能
// val4.name = "jak";
// val4.addres = "広島";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push('monkey');
// console.log(val5);

// // テンプレート文字列
// const name = "じぇけぇ";
// const age = 28;
//私の名前はじゃけぇです。年齢は28才です

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// //テンプレート文字列を用いると
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数

//従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 15));

// 分割代入
// const myProfile = {
//   name: "じゃけ",
//   age: 28
// };

// const message1 = `私は${myProfile.name}です。年齢は${myProfile.age}です。`;

// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私は${name}です。年齢は${age}です。`;

// console.log(message2);

// const myProfile = ['じゃけえ', 'age'];
// const [name, age] = myProfile;
// const message3 = `私は${name}です。年齢は${age}です。`;
// console.log(message3)

//デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

//スプレッド構文 ...

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [...arr3] = arr2;
// // console.log(num1);
// // console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 60];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;

// console.log(arr6);
// console.log(arr4);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
//console.log(arr8);

// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

//mapやfilter
const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// };

// const nameArr2 = nameArr.map((name)=>{
//   return name
// });

// console.log(nameArr2);

// nameArr.map((name, index)=>{console.log(`${index+1}番目は${name}です`)});

//filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//     if (name == 'じゃけえ') {
//       return name;
//     } else {
//       return `${name}さん`;
//     };
// });

// console.log(newNameArr);

//三項演算子
//ある条件? 条件がtrueのとき:条件がfalseのとき
// const val1 = 1 >2 ? '真です':'False';
// console.log(val1);

// const num = '1300';
// //console.log(num.toLocaleString());
// const formattedNum = typeof num === 'number' ? num.toLocaleString(): '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "100は超えていません";
// };
// console.log(checkSum(20, 80));

//論理演算子 && ||

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log('どちらかがtrueです');
// };

// if (flag1 && flag2) {
//   console.log('どちらかもtrueです');
// };
const num = null;
const fee = num || "未設定です";
console.log(fee);

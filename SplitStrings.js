function solution(str){
    let newArr = [];
    for (let i = 0; i < str.length; i+=2) {
       newArr.push(str[i]+(str[i+1]));
     }
    return newArr;
  }
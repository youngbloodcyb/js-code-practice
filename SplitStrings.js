function solution(str){
    let newArr = [];
    if (str.length % 2 != 0) {
        str = str.concat("_");
    }  
    for (let i = 0; i < str.length; i+=2) {
        newArr.push(str[i]+(str[i+1]));
    }
    return newArr;
  }
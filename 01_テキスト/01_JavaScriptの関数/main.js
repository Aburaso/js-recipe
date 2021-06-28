// 練習問題 １
const plus1 = function (x) {
  return x + 1
}
// 関数名: plus1
// 引数:x
// 返り値:x+1



// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 =function(a){
  return a*3+1
}

// f2: 1, 10, 100, 1000, 10000, ...
const f2 =function(b){
  return 10**b
}

// f3: 2, 14, 107, 1010, 10013, ...
const f3 =function(c){
  return f1(c)*f2(c)
}


// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply
const multipiy=functon(a,b){
  return a*b
}

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound
const plusRound=function(c,d){
  return Math.round(c+d)
}


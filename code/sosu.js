var MAX = 100;
var sieve = new Array(MAX);

//全ての数に対して素数フラグを立てる
for (var i = 0; i < MAX; i++) {
  sieve[i] = true;
}
//最大値の平方根を計算
var max = Math.floor(Math.sqrt(MAX));

//0,1は素数でないので外す
sieve[0] = false;
sieve[1] = false;

//探索リストの先頭 >= MAXの平方根まで、素数リストの倍数をふるい落としていく
for (var i = 2; i <= max; i++) {
  //素数だったら
  if (sieve[i] === true) {
    //その倍数をふるい落とす
    for (var j = i * 2; j <= MAX; j += i) {
      sieve[j] = false;
    }
  }
}

//素数の出力
for (var i = 0; i < MAX; i++) {
  if (sieve[i] === true) {
    console.log(i);
  }
}

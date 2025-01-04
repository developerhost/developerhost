参考

https://qiita.com/suzuki0430/items/403984045d3bc0be2f24

https://zenn.dev/unkeleven/articles/777e097c7d633c

メモ化なし
```
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

メモ化あり
```
function fibonacci(n, memo = {}) {
  if (n <= 1) {
    return n;
  }
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(10)); // 55
```


```
function fibonacci(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fibonacci(10));
```

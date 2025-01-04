参考

https://qiita.com/suzuki0430/items/403984045d3bc0be2f24

https://zenn.dev/unkeleven/articles/777e097c7d633c

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

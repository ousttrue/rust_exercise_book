# allow

警告抑止

* `#![allow(xxx)` コード全体に効果
* `#[allow(xxx)]` 次の要素に効果

```rs
#![allow(non_upper_case_globals)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(dead_code)]
```

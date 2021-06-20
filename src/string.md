# String

## Literal

文字列リテラルは、static な lifetime を持つ `&str` 。

```rs
let text: &'static str = "text";
```

ストリング化する。

```rs
let text: String = "text".to_string();

let text: String = "text".to_owned();
```

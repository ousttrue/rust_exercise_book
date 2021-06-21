# String
utf-8 のバイト列を内部に持つ。

* String
* &str
* &[u8] UTF-8バイト列

## String と &str

utf8バイト列を所有するのが `Vec<u8>` String で、それへのスライス？が `&str`。

### &str から 作る
```rs
let text: String = String::from("hoge");

let text: String = "hoge".to_string();

let text: String = "hoge".to_owned();
```

### &str にする

```rs
src.as_str();
```

### Literal

文字列リテラルは、static な lifetime を持つ `&str` 。

```rs
let text: &'static str = "text";
```

## utf-8 バイト列 &[u8]

```rs
str::from_utf8(slice::from_raw_parts(source, source_size)).unwrap().to_owned()
```

## 文字列からその他の型への変換

```rs
 use std::str::FromStr
 if let Ok(num) = i32::from_str("123") {
 }
 else{
     // 失敗し得る
 }
```

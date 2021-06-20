# Option

## 中身の移動
take

```rust
let src: Option<i32> = Some(1);
let dst: Option<i32> = src.take();
```

## 中身を参照化

```rust
let src: Option<i32> = Some(1);
let dst: Option<&i32> = src.as_ref();
```

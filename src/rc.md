# Rc

コレクション(Vec, HashMap)、または Option の中に入れて、
中身を clone して返すことで、入れ物への borrow を早期に終了させる。

## 中身

```rust
let src: Rc<Option<i32>> = Rc::new(Some(1));

// * deref(Option<i32>) して、
// & 参照する(&Option<i32>)
if let Some(i) = &*src
{
}
```

```rust
let src: Rc<Option<i32>> = Rc::new(Some(1));
let src2: &Rc<Option<i32>> = &src;

// * deref して(Rc<Option<i32>>)、
// * deref して(Option<i32>)、
// & 参照する(&Option<i32>)
if let Some(i) = &**src2
{
}
```

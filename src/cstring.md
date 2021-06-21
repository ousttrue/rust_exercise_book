# CString

* CString
* &cstr
* \0で終端したUTF-8とは限らないバイト列

```rs
// \0で終端した `char*` から作成する
let renderer = unsafe {
    let p = gl::GetString(gl::RENDERER); // *const u8
    CStr::from_ptr(p as *const i8)
};
println!("Renderer: {}", renderer.to_string_lossy());
```

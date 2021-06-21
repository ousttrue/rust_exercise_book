# OSString
<https://doc.rust-lang.org/std/ffi/struct.OsString.html>

<http://d.sunnyone.org/2015/06/rustwindowslpcwstr-lpwstr.html>

* wchar_t

```rs
 fn from_wide_ptr(ptr: *const u16) -> String {
     use std::ffi::OsString;
     use std::os::windows::ffi::OsStringExt;
     unsafe {
         assert!(!ptr.is_null());
         let len = (0..std::isize::MAX).position(|i| *ptr.offset(i) == 0).unwrap();
         let slice = std::slice::from_raw_parts(ptr, len);
         OsString::from_wide(slice).to_string_lossy().into_owned()
     }
 }
 ```

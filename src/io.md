# fs

```rs
 fn read_file<P>(path_arg: P) -> std::io::Result<Vec<u8>>
 where
     P: AsRef<std::path::Path>,
 {
     let path = path_arg.as_ref();
     let mut file = std::fs::File::open(path)?;
     use std::io::Read;
     let mut contents: Vec<u8> = Vec::new();
     file.read_to_end(&mut contents).map(|_| contents)
 }
 ```
 
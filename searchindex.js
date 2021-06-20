Object.assign(window.search, {"doc_urls":["index.html#a-prefix-chapter","string.html#string","string.html#literal","cstring.html#cstring","path.html#path","vec.html#vec","vec.html#中身の移動","option.html#option","option.html#中身の移動","option.html#中身を参照化","result.html#result","result.html#iterator","rc.html#rc","rc.html#中身","refcell.html#refcell","refcell.html#中身の代入"],"index":{"documentStore":{"docInfo":{"0":{"body":1,"breadcrumbs":4,"title":2},"1":{"body":0,"breadcrumbs":2,"title":1},"10":{"body":1,"breadcrumbs":2,"title":1},"11":{"body":4,"breadcrumbs":2,"title":1},"12":{"body":5,"breadcrumbs":2,"title":1},"13":{"body":20,"breadcrumbs":1,"title":0},"14":{"body":0,"breadcrumbs":2,"title":1},"15":{"body":4,"breadcrumbs":1,"title":0},"2":{"body":13,"breadcrumbs":2,"title":1},"3":{"body":0,"breadcrumbs":2,"title":1},"4":{"body":0,"breadcrumbs":2,"title":1},"5":{"body":0,"breadcrumbs":2,"title":1},"6":{"body":9,"breadcrumbs":1,"title":0},"7":{"body":0,"breadcrumbs":2,"title":1},"8":{"body":7,"breadcrumbs":1,"title":0},"9":{"body":6,"breadcrumbs":1,"title":0}},"docs":{"0":{"body":"Rust の細々としたところのメモ。","breadcrumbs":"A Prefix Chapter » A Prefix Chapter","id":"0","title":"A Prefix Chapter"},"1":{"body":"","breadcrumbs":"String » String","id":"1","title":"String"},"10":{"body":"##エラーの型を変える map_error","breadcrumbs":"result » Result","id":"10","title":"Result"},"11":{"body":"iterator を返す関数 -> impl Iteraotr<Item = i32>\n{\n}","breadcrumbs":"result » Iterator","id":"11","title":"Iterator"},"12":{"body":"コレクション(Vec, HashMap)、または Option の中に入れて、 中身を clone して返すことで、入れ物への borrow を早期に終了させる。","breadcrumbs":"Rc » Rc","id":"12","title":"Rc"},"13":{"body":"let src: Rc<Option<i32>> = Rc::new(Some(1)); // * deref(Option<i32>) して、\n// & 参照する(&Option<i32>)\nif let Some(i) = &*src\n{\n} let src: Rc<Option<i32>> = Rc::new(Some(1));\nlet src2: &Rc<Option<i32>> = &src; // * deref して(Rc<Option<i32>>)、\n// * deref して(Option<i32>)、\n// & 参照する(&Option<i32>)\nif let Some(i) = &**src2\n{\n}","breadcrumbs":"Rc » 中身","id":"13","title":"中身"},"14":{"body":"","breadcrumbs":"RefCell » RefCell","id":"14","title":"RefCell"},"15":{"body":"replace let r = RefCell::new(1);\nr.replace(2);","breadcrumbs":"RefCell » 中身の代入","id":"15","title":"中身の代入"},"2":{"body":"文字列リテラルは、static な lifetime を持つ &str 。 let text: &'static str = \"text\"; ストリング化する。 let text: String = \"text\".to_string(); let text: String = \"text\".to_owned();","breadcrumbs":"String » Literal","id":"2","title":"Literal"},"3":{"body":"","breadcrumbs":"CString » CString","id":"3","title":"CString"},"4":{"body":"","breadcrumbs":"Path » Path","id":"4","title":"Path"},"5":{"body":"","breadcrumbs":"Vec » Vec","id":"5","title":"Vec"},"6":{"body":"drain let src: Vec<i32> = vec![1, 2, 3];\nlet dst: Vec<i2> = src.drain(..).collect();","breadcrumbs":"Vec » 中身の移動","id":"6","title":"中身の移動"},"7":{"body":"","breadcrumbs":"option » Option","id":"7","title":"Option"},"8":{"body":"take let src: Option<i32> = Some(1);\nlet dst: Option<i32> = src.take();","breadcrumbs":"option » 中身の移動","id":"8","title":"中身の移動"},"9":{"body":"let src: Option<i32> = Some(1);\nlet dst: Option<&i32> = src.as_ref();","breadcrumbs":"option » 中身を参照化","id":"9","title":"中身を参照化"}},"length":16,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"df":1,"docs":{"6":{"tf":1.0}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"(":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"df":0,"docs":{},"i":{"3":{"2":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"6":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"i":{"3":{"2":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"&":{"df":0,"docs":{},"i":{"3":{"2":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"3":{"2":{"df":3,"docs":{"13":{"tf":1.7320508075688772},"8":{"tf":1.4142135623730951},"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":2,"docs":{"12":{"tf":1.0},"7":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":0,"docs":{},"e":{"(":{"2":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"c":{":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{"1":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"<":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"df":0,"docs":{},"i":{"3":{"2":{"df":1,"docs":{"13":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":1,"docs":{"12":{"tf":1.0}}},"df":1,"docs":{"15":{"tf":1.0}},"e":{"df":0,"docs":{},"f":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"14":{"tf":1.0}},"l":{":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"(":{"1":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{"1":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"r":{"c":{".":{"a":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"(":{".":{".":{")":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"2":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"df":4,"docs":{"13":{"tf":2.0},"6":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"\"":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":2.0}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"!":{"[":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"<":{"df":0,"docs":{},"i":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":2,"docs":{"12":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"df":1,"docs":{"6":{"tf":1.0}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"(":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"df":0,"docs":{},"i":{"3":{"2":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"6":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"i":{"3":{"2":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"&":{"df":0,"docs":{},"i":{"3":{"2":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"3":{"2":{"df":3,"docs":{"13":{"tf":1.7320508075688772},"8":{"tf":1.4142135623730951},"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":4,"docs":{"12":{"tf":1.0},"7":{"tf":1.7320508075688772},"8":{"tf":1.0},"9":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}}},"r":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":0,"docs":{},"e":{"(":{"2":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"c":{":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{"1":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"<":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"df":0,"docs":{},"i":{"3":{"2":{"df":1,"docs":{"13":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":2,"docs":{"12":{"tf":1.7320508075688772},"13":{"tf":1.0}}},"df":1,"docs":{"15":{"tf":1.0}},"e":{"df":0,"docs":{},"f":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"14":{"tf":1.7320508075688772},"15":{"tf":1.0}},"l":{":":{":":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"(":{"1":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.7320508075688772},"11":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{"1":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"r":{"c":{".":{"a":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"(":{".":{".":{")":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"2":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}},"df":4,"docs":{"13":{"tf":2.0},"6":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.7320508075688772}}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"\"":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":2.0}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"!":{"[":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"<":{"df":0,"docs":{},"i":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":3,"docs":{"12":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"title":{"root":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"c":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});
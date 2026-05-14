# Quick Start

::: tip
Check the [docs.rs documentation](https://docs.rs/nbcl/latest/nbcl) if confused about certain API's or Nbcl structures/enumrates.
:::

```rust
use nbcl::NbclEngine;

fn main() {
    let code = r#"
        print("Hello, World")

        Object "language" {
            name = "nbcl"
            website = "nbcl-lang.github.io"
            playground = "nbcl-lang.github.io/playground"
            documnetation = "nbcl-lang.github.io/docs"
        }
    "#;

    let engine = NbclEngine::new();
    match engine.evaluate(code) {
        Ok(cfg) => println!("Resolved config: {:#?}", cfg),
        Err(e) => println!("Error: {}", e)
    }
}
```

The [`NbclEngine`](https://docs.rs/nbcl/latest/nbcl/struct.NbclEngine.html) structure is the front end of the language. It is in this engine that you will register your custom functions, libraries, etc.
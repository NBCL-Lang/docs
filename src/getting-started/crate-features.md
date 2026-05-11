# Crate Features

Setting your crate features is an important step in making the language behave the way you want. 


:::info
Features can be added like this:

```toml
[dependencies]
nbcl = { version = "x", features = ["feature1", "feature2"] }
```
:::


## `pretty-errors`

This feature makes all the printed errors look good and beautiful. Ideally, it is better to not use this feature and instead manually pipe the data from the error structure to a diagnostic crate like [ariadne](https://crates.io/crates/ariadne), because it gives you more control and customizability.

:::danger
Ensure that the error is printed normally for this to work.

```rs
// Like this
println!("{}", e);

// NOT like this:
println!("{:#?}", e);
```
:::

## `wasm`

This feature adds WebAssembly compatiblity to NBCL. Nothing more, nothing less.

:::danger
- DO NOT ENABLE THIS FEATURE IN RUST!

Using this feature for a standard Rust build may result in printing functionality not working.
:::
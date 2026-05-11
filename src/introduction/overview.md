# Overview

An overview on the origin and the purpose of NBCL.

## Origin

NBCL was made for a purpose and it solves a very specific problem. The language space in the Rust community is limited. Only a few languages like [Rune](https://rune-rs.github.io), [Rhai](https://rhai.rs), and [Koto](https://koto.dev) exists. And almost all of them either are made for only scripting purposes, has terrible error reporting, or has a syntax that feels like JSON for configuring. 

And if you look outside the Rust ecosystem, you'll see languages like HCL, KCL, Jsonnet, etc. But most of them are made for cloud purposes, sometimes has quite terrible syntax, or that most of them are written in [Golang](https://go.dev/) and requires FFI to function in Rust.

So, NBCL now exists to solve this problem. It takes the HCL-like blocky configuration syntax and adds its own scripting syntax to create the ideal solution. It is made to address all the pain points, and thus it ships with detailed error structures with all the cruical data that can be extracted and passed directly into any diagnostic tool like [ariadne](https://crates.io/crates/ariadne), or [codespan-reporting](https://crates.io/crates/codespan-reporting).

## What it is and is not

NBCL is a **configuration language** with **scripting capabilities**. Unlike pure configuration formats like JSON, or TOML, it can produce side effects alongside resolving into data. This makes it especially useful for large configs, defining UI components, or anywhere you need an extensible scripting language that happens to prioritize configuration by default.

That said, NBCL is not the right tool for every job. It is best when both of its configuration and scripting capabilities are used together. If you **only** need pure scripting, go for a language like [rhai](https://crates.io/crates/rhai), and if you **only** need pure static configuration, go for a language like TOML.
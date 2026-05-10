---
layout: doc
---

# NBCL

NBCL is an embedded configuration language for Rust and the Web. It features a JSON like configuration syntax, without the actual verbosity. Additionally, it supports scripting capabilities and can be setup to be type safe.

NBCL is created with **simplicity**, **lightweightness**, and **good error reporting** in mind. So, it uses the bare minimum dependencies (to avoid bloat) and provides detailed errors with hints, and spans that can be plugged into any diagnostic crate like [ariadne](https://crates.io/crates/ariadne).

Fast build times can also be expected due to the low number of dependencies.
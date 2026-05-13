# Dependencies

NBCL makes sure to pull is as less dependencies as possible to avoid bloat and ensure fast compilations.

## Standard Dependencies

Dependencies that are used everwhere:

| Crate         | Description        | Use Case |
| ------------- | ------------------ | -------- |
| [`pest`](http://crates.io/crates/pest)        | A PEG-based parser generator. | Used to parse the NBCL syntax. | 
| [`pest_derive`](http://crates.io/crates/pest_derive) | Extension crate to `pest` that adds derive features to Rust. | Used for the derive features to avoid manual implementation. |
| [`serde`](http://crates.io/crates/serde) | Framework for converting Rust data to and from various data formats. | To support various data formats like JSON, YAML, TOML, etc. |

## `wasm` Dependencies

Additional dependencies used only when the `wasm` feature is used:

| Crate          | Description | Use Case |
| -------------- | ----------- | -------- |
| [`wasm_bindgen`](http://crates.io/crates/wasm_bindgen) | Bridge for communication between Rust, Wasm, and JS. | Used for web support. |
| [`serde_json`](http://crates.io/crates/serde_json)   | Crate that works with `serde` for converting Rust data to and from json. | Used to transfer resolved data to the web. |

## `pretty-errors` Dependencies

Additional dependencies used only when the `pretty-errors` feature is used:

| Crate     | Description | Use Case |
| --------- | ----------- | -------- |
| [`ariadne`](http://crates.io/crates/ariadne) | Diagnostic tool used to generate beautiful error messages. | Used to generate beautiful errors from the standard error data. |

## Features with no Dependencies

- `no-module-imports`
- `no-lib-imports`
- `metadata`
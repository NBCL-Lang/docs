# Overview

NBCL is a **configuration language** with **scripting capabilities**. Unlike pure configuration formats like JSON, or TOML, it can produce side effects alongside resolving into data. This makes it especially useful for large configs, defining UI components, or anywhere you need an extensible scripting language that happens to prioritize configuration by default.

That said, NBCL is not the right tool for every job. It is best when both of its configuration and scripting capabilities are used together. If you **only** need pure scripting, go for a language like [rhai](https://crates.io/crates/rhai), and if you **only** need pure static configuration, go for a language like TOML.
# Add as Dependency

The first step to getting started with NBCL is adding it as dependency in your Rust project. 

You can either use the `cargo add` command to automatically add the latest version of nbcl as a dependency, or manually check the version at [crates.io](https://crates.io/crates/nbcl/) and add it to the `Cargo.toml` yourself.

Use the command:

```sh
$ cargo add nbcl
```

Or add it manually using one of the following structure:

```toml
[dependencies]
nbcl = "1.0.0" # Assuming 1.0.0 is the latest version
```

```toml
[dependencies]
nbcl = "*"     # Automatically uses the latest version
```

```toml
[dependencies]
# Get latest, bleeding-edge, unreleased features
nbcl = "https://github.com/NBCL-Lang/nbcl"
```
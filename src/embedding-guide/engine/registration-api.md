# Registration API's

This section discusses about all the **registration** API's in NbclEngine, what each does, and how to use it.

## NbclEngine.register_node 

```rust
pub fn register_node(&mut self, schema: NativeNodeSchema);
```

::: details NativeNodeSchema
```rust
/// Defines a host-provided node
#[derive(Debug, Clone)]
pub enum PropValidation {
    /// Allow any properties
    Loose,
    /// Only allow specific keys
    Strict(HashMap<String, Type>),
}

/// Public structure used for registering custom nodes.
#[derive(Debug, Clone)]
pub struct NativeNodeSchema {
    /// Name of the Node
    pub type_name: String,
    /// Whether to enforce ID or not
    pub enforce_id: bool,
    /// Whether the property validation should be loose or strict
    pub validation: PropValidation,
    /// Children count in <(min, max)>.
    /// Use None for default functionlaity
    /// (allows any number of children).
    pub child_count: Option<(u32, u32)>,
}
```
:::

Register a custom node into the engine.

**Example:**

```rust
use nbcl::{NbclEngine, NativeNodeSchema};

let mut engine = NbclEngine::new();
engine.register_node(NativeNodeSchema {
    type_name: "Object".to_string(),
    enforce_id: false,
    validation: PropValidation::Loose,
    child_count: None,
});
```

## NbclEngine.register_native_fn

```rust
pub fn register_native_fn<F>(&mut self, name: &str, params: Vec<Type>, return_type: Type, f: F)
where
    F: Fn(Vec<Value>) -> Result<Value> + Send + Sync + 'static;
```

Register a native function into the engine.

**Example:**

```rust
use nbcl::{NbclEngine, Value, Type};

let mut engine = NbclEngine::new();
// 1. Name of the function
// 2. Parameters the function expects
// 3. The return type of the function
// 4. A closure that the function executes
engine.register_native_fn("example", vec![Type::Str], Type::Null, |args| {
    // arg1 is 'Type::Str'
    let arg1 = args[0];
    match arg1 {
        Value::Str(s) => {
            // do whatever
        }
        // This is unreachable because Nbcl ensures that
        // you receive the exact type you put in. 
        // However, if the type you put in were 'Type::Any',
        // then this branch does become reachable.
        _ => unreachable!()
    }

    Ok(Value::Null)
});
```

## NbclEngine.register_library

```rust
pub fn register_library(&mut self, library: Library);
```

Register a library into the engine.

**Example:**

```rust
use nbcl::{NbclEngine, Value, Type};
use nbcl::library::{LibraryItem, Library};

let mut engine = NbclEngine::new();
let math = LibraryItem::define("math")
    // how you define globals
    .with_global("PI", Value::Float(std::f64::consts::PI))
    // how you define functions
    .with_fn("abs", vec![Type::Int], Type::Int, |args| {
        Ok(Value::Int(args[0].as_int().unwrap().abs()))
    });

// you can add more library items inside vec![]
let cool_lib = Library::new("coollib".into(), vec![math]);
engine.register_library(cool_lib);

// This library can be imported like this in nbcl:
// 'import coollib.math'
```

## NbclEngine.set_global

```rust
pub fn set_global(&mut self, name: &str, value: Value);
```

Set a global variable that can be accessed in Nbcl.

**Example:**

```rust
use nbcl::{NbclEngine, Value};

let mut engine = NbclEngine::new();
engine.set_global("PI", Value::Float(std::f64::consts::PI))
```

## NbclEngine.register_module_resolver

```rust
pub fn register_module_resolver<M>(&mut self, mres: M) 
where 
    M: ModuleResolver + 'static;
```

::: details ModuleResolver
```rust
/// Trait for implementing custm module resolvers
pub trait ModuleResolver: Send + Sync + std::fmt::Debug {
    /// Resolves a module relative path into absolute path
    fn find_target(&self, path: &str) -> Result<PathBuf>;
}
```
:::

Set a custom module resolver.

**Example:**

```rust
use nbcl::NbclEngine;
use nbcl::module_resolver::ModuleResolver;
use std::path::PathBuf;

// Add fields if you want
#[derive(Debug, Clone)]
pub struct MyResolver;

impl ModuleResolver for MyResolver {
    fn find_target(&self, path: &str) -> Result<PathBuf> {
        // Resolve the path here and return it as a PathBuf.

        // How to report errors:
        // 
        // nbcl::error::NbclError::IO {
        //     message: "something failed".into(),
        //     hint: "try doing this...".into(),
        //     path: <pathbuf of file>
        // }
    }
}

let mut engine = NbclEngine::new();
engine.register_module_resolver(MyResolver);
```

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
use crate::{NbclEngine, NativeNodeSchema};

let engine = NbclEngine::new();
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
// TODO
```

## NbclEngine.register_library

```rust
pub fn register_library(&mut self, library: Library);
```

Register a library into the engine.

**Example:**

```rust
// TODO
```

## NbclEngine.set_global

```rust
pub fn set_global(&mut self, name: &str, value: Value);
```

Set a global variable that can be accessed in Nbcl.

**Example:**

```rust
use crate::{NbclEngine, Value};

let engine = NbclEngine::new();
engine.set_global("PI", Value::Float(std::f64::consts::PI))
```

## NbclEngine.register_module_resolver

```rust
pub fn register_module_resolver<M>(&mut self, mres: M) 
where 
    M: ModuleResolver + 'static;
```

Set a custom module resolver.

**Example:**

```rust
// TODO
```
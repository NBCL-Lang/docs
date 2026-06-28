# Other API's

Other API's in the NbclEngine.

## NbclEngine.set_max_depth

```rust
pub fn set_max_depth(&mut self, max_depth: usize);
```

Set a maximum recursion depth. Default is 5.

**Example:**

```rust
use nbcl::NbclEngine;

let engine = NbclEngine::new();
engine.set_max_depth(10);
```

## NbclEngine.call_function

```rust
pub fn call_function(&self, name: &str, args: Vec<Value>, ctx: EvalContext) -> Result<Value>;
```

Call a normal/lambda function available in the provided context.

**Example:**

```rust
use nbcl::{NbclEngine, Value, context::EvalContext};

let engine = NbclEngine::new();
let ectx = EvalContext::from(&engine);
let source = "fn test(a) { print(a) }";
let source_ast = engine.parse_str(&source).unwrap();
let config_and_ctx = engine.eval_ast_with_eval_ctx(source_ast, &mut ectx).unwrap();

// The result is a 'Value'.
let res = engine.call_function(
    "test", 
    vec![Value::Str("Hello, World".into())], 
    ectx,
);
```

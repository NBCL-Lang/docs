# Other API's

Other API's in the NbclEngine.

## NbclEngine.set_max_depth

```rust
pub fn set_max_depth(&mut self, max_depth: usize);
```

Set a maximum recursion depth. Default is 5.

**Example:**

```rust
use crate::NbclEngine;

let engine = NbclEngine::new();
engine.set_max_depth(10);
```
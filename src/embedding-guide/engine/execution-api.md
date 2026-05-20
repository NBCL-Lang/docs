# Engine Execution API's

This section discusses about all the configuration **execution** API's in NbclEngine, what each does, and how to use it.

## NbclEngine::new

```rust
pub fn new() -> NbclEngine;
```

Creates a new Nbcl Engine.

**Example:**

```rust
use nbcl::NbclEngine;

let engine = NbclEngine::new();
```

## NbclEngine.parse

```rust
pub fn parse(&self, file_path: PathBuf) -> Result<File>;
```

Parse the contents of a file into source AST.

**Example:**

```rust
use std::path::PathBuf;
use nbcl::NbclEngine;

let engine = NbclEngine::new();
let source_ast = engine.parse(PathBuf::from("./example.nbl")).unwrap();
```

## NbclEngine.parse_str

```rust
pub fn parse_str(&self, source: &str) -> Result<File>;
```

Parse a source into source AST.

**Example:**

```rust
use nbcl::NbclEngine;

let engine = NbclEngine::new();
let source = "print('Hello, World')";
let source_ast = engine.parse_str(&source).unwrap();
```

## NbclEngine.evaluate_ast

```rust
pub fn evaluate_ast(&self, file: File) -> Result<ResolvedTree>;
```

Evaluates a source ast, produce side-effects, and return resolved configuration.

**Example:**

```rust
use nbcl::NbclEngine;

let engine = NbclEngine::new();
let source = "print('Hello, World')";
let source_ast = engine.parse_str(&source).unwrap();
let res_config = engine.evaluate_ast(source_ast).unwrap();
```

## NbclEngine.evaluate_ast_for_ctx

```rust
pub fn evaluate_ast_for_ctx(&self, file: File) -> Result<(ResolvedTree, Context)>;
```

Evaluates a source ast, produce side-effects, and return resolved configuration **and** evaluation context. The evaluation context is useful for [other-api/call_function](other-api#nbclengine-call-function).

**Example:**

```rust
use nbcl::NbclEngine;

let engine = NbclEngine::new();
let source = "print('Hello, World')";
let source_ast = engine.parse_str(&source).unwrap();
let config_and_ctx = engine.evaluate_ast_for_ctx(source_ast).unwrap();
```

## NbclEngine.evaluate

```rust
pub fn evaluate(&self, source: &str)  -> Result<ResolvedTree>;
```

Parse and evaluate a source string, produce side-effects, and return resolved configuration.

**Example:**

```rust
use nbcl::NbclEngine;

let engine = NbclEngine::new();
let source = "print('Hello, World')";
let res_config = engine.evaluate(source).unwrap();
```

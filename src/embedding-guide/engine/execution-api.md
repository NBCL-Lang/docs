# Engine Execution API's

This section discusses about all the configuration **execution** API's in NbclEngine, what each does, and how to use it.

## NbclEngine::new

```rust
pub fn new() -> NbclEngine;
```

Creates a new Nbcl Engine.

**Example:**

```rust
use crate::NbclEngine;

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
use crate::NbclEngine;

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
use crate::NbclEngine;

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
use crate::NbclEngine;

let engine = NbclEngine::new();
let source = "print('Hello, World')";
let source_ast = engine.parse_str(&source).unwrap();
let res_config = engine.evaluate_ast(source_ast).unwrap();
```

## NbclEngine.evaluate

```rust
pub fn evaluate(&self, source: &str)  -> Result<ResolvedTree>;
```

Parse and evaluate a source string, produce side-effects, and return resolved configuration.

**Example:**

```rust
use crate::NbclEngine;

let engine = NbclEngine::new();
let source = "print('Hello, World')";
let res_config = engine.evaluate(source).unwrap();
```


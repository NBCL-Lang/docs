# Conditional Statements

NBCL has two types of conditional statements. The `if`/`else if`/`else` statement for general conditions, and the `match` statement for comparing a value against specific patterns.

## If/else if/else

`if` evaluates a condition and runs the first block that matches:

```nbcl
let x = 10

if x > 10 {
    print("x is greater than 10")
} else if x == 10 {
    print("x is exactly 10")
} else {
    print("x is less than 10")
}
```

`else if` and `else` are both optional. You can have as many `else if` branches as you need.

## Match

```nbcl
let x = "Foo"

match x {
    "Foo" => print("x is 'Foo'")
    "Bar" => print("x is 'Bar'")
    "Baz" => print("x is 'Baz'")
}
```

To catch any value not matched above, use `_` as a wildcard or an identifier to capture the value:

::: code-group
```nbcl
let x = "Baz"

match x {
    "Foo" => print("x is 'Foo'")
    # 'other' holds the unmatched value
    other => print("Unknown: " + other) 
}
```

```json [output]
"Unknown: Baz"
```
:::

Wildcard (`_`) example:

::: code-group

```nbcl
let x = "Baz"

match x {
    "Foo" => print("x is 'Foo'")
    _ => print("x didn't match any of the pattern") 
}
```

```json [output]
"x didn't match any of the pattern"
```

:::

# Conditional Statements

NBCL has two types of conditional statements. The `if`/`else if`/`else` statement and the `match` statement.

## If/else if/else

```nbl
local x = 10

if x > 10 {
    print("x is greater than 10")
} else if x == 10 {
    print("x is exactly 10")
} else {
    print("x is less than 10")
}
```

## Match

```nbl
local x = "Foo"

match x {
    "Foo" => print("x is 'Foo'")
    "Bar" => print("x is 'Bar'")
    "Baz" => print("x is 'Baz'")
    
}
```
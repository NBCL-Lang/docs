# Built-in Functions

List of all the functions that are built into Nbcl by default.

::: warning
Nbcl uses Value Semantics [[1]](../quirks). If a function is of a type that mutates a value, make sure to assign its
result back to the original variable.

```nbcl 
let mystr = "HELLO"

# How *not* to do
mystr.to_lowercase()
print(mystr) # HELLO

# How to do
set mystr = mystr.to_lowercase()
print(mystr) # hello
```
:::

## Standalone

### `print`

> print(Any) -> Null

Print a value.

```nbcl
print("Hello, World")
```

### `type_of`

> type_of(Any) -> Str

Get the type of a data.

```nbcl
type_of("Hello, World")
type_of([])
type_of({})
```

## Universal (Any)

### `to_string`

> to_string(Any) -> Str

Convert something to a string.

```nbcl
5.to_string()
[1, 2, 3].to_string()
```

### `as_int`

> as_int(Any) -> Int

Convert something to an integer.

```nbcl
"10".as_int()
10.5.as_int()
```

### `as_float`

> as_float(Any) -> Float

Convert something to a float.

```nbcl
"3".as_float()
3.as_float()
```

### `len`

> len(Any) -> Int

Get the length of a data.

```nbcl
"Hello".len()
[2, 3, 4].len()
{ key = "value" }.len()
```

## String

### `to_lowercase`

> to_lowercase(Str) -> Str

Convert a string to lowercase.

```nbcl
"HELLO".to_lowercase()
```

### `to_uppercase`

> to_uppercase(Str) -> Str

Convert a string to uppercase.

```nbcl
"hello".to_uppercase()
```

### `trim`

> trim(Str) -> Str

Remove leading and trailing whitespace from a string.

```nbcl
"  hello  ".trim() # output: "hello"
```

### `trim_start`

> trim_start(Str) -> Str

Remove leading whitespace from a string.

```nbcl
"  hello  ".trim_start() # output: "hello  "
```

### `trim_end`

> trim_end(Str) -> Str

Remove trailing whitespace from a string.

```nbcl
"  hello  ".trim_end() # output: "  hello"
```

### `split`

> split(Str, Str/Null) -> List

Split a string by a given pattern or by whitespace if `Null` is passed.

```nbcl
"a,b,c".split(",")

"hello world".split(null)
"hello world".split() # equal to (null)
```

## String & List

### `contains`

> contains(List/Str, Any) -> Bool

Check if the data contains something.

```nbcl
"Hello, World".contains("World")
["Good", "Bad", "Bye", "Hello"].contains("Hello")
```

## List

### `push`

> push(List, Any) -> List

Push a data into a list.

```nbcl
let list = [1, 2, 3, 4]
set list = list.push(5)
```

### `pop`

> pop(List) -> Any

Removes and returns the last element from a list.

```nbcl
let list = [1, 2, 3]
set list = list.pop() # removes and returns 3
```

## Map

### `keys`

> keys(Map) -> List

Returns all the keys from a map.

```nbcl
let map = { foo = 1, baz = 2 }
map.keys() # returns ["foo", "baz"]
```

### `values`

> values(Map) -> List

Returns all the values from a map.

```nbcl
let map = { foo = 1, baz = 2 }
map.values() # returns [1, 2]
```

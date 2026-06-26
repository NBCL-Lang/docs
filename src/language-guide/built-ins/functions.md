# Built-in Functions

List of all the functions that is built into Nbcl by default.

## `print`

> print(Any) -> Null

Print a value.

```nbcl
print("Hello, World")
```

## `to_string`

> to_string(Any) -> Str

Convert something to a string.

```nbcl
5.to_string()
[1, 2, 3].to_string()
```

## `as_int`

> as_int(Any) -> Int

Convert something to an integer.

```nbcl
"10".as_int()
10.5.as_int()
```

## `as_float`

> as_float(Any) -> Float

Convert something to a float.

```nbcl
"3".as_float()
3.as_float()
```

## `type_of`

> type_of(Any) -> Str

Get the type of a data.

```nbcl
type_of("Hello, World")
type_of([])
type_of({})
```

## `len`

> `len(Any) -> Int`

Get the length of a data.

```nbcl
"Hello".len()
[2, 3, 4].len()
{ key = "value" }.len()
```

## `contains`

> `contains(List/Str, Any) -> Bool`

Check if the data contains something.

```nbcl
"Hello, World".contains("World")
["Good", "Bad", "Bye", "Hello"].contains("Hello")
```

## `push`

> push(List, Any) -> List

Push a data into a list.

```nbcl
let list = [1, 2, 3, 4]
set list = list.push(5)
```

## `pop`

> pop(List) -> Any

Removes and returns the last element from a list.

```nbcl
let list = [1, 2, 3]
set list = list.pop() # removes and returns 3
```

## `keys`

> keys(Map) -> List

Returns all the keys from a map.

```nbcl
let map = { foo = 1, baz = 2 }
map.keys() # returns ["foo", "baz"]
```

## `values`

> values(Map) -> List

Returns all the values from a map.

```nbcl
let map = { foo = 1, baz = 2 }
map.values() # returns [1, 2]
```

# Built-in Functions

List of all the functions that is built into Nbcl by default.

## `print`

> print(Any) -> Null

Print a value.

```nbl
print("Hello, World")
```

## `to_string`

> to_string(Any) -> Str

Convert something to a string.

```nbl
to_string(5)
```

## `as_int`

> as_int(Any) -> Int

Convert something to an integer.

```nbl
as_int("10")
```

## `as_float`

> as_float(Any) -> Float

Convert something to a float.

```nbl
as_float("3")
```

## `type_of`

> type_of(Any) -> Str

Get the type of a data.

```nbl
type_of("Hello, World")
```

## `len`

> `len(Any) -> Int`

Get the length of a data.

```nbl
len("Hello")
```

## `contains`

> `contains(List/Str, Any) -> Bool`

Check if the data contains something.

```nbl
contains("Hello, World", "World")
```

## `push`

> push(List, Any) -> List

Push a data into a list.

```nbl
local list = [1, 2, 3, 4]
push(list, 5)
```

## `pop`

> pop(List) -> Any

Removes and returns the last element from a list.

```nbl
local list = [1, 2, 3]
pop(list) # removes and returns 3
```

## `keys`

> keys(Map) -> List

Returns all the keys from a map.

```nbl
local map = { foo = 1, baz = 2 }
keys(map) # returns ["foo", "baz"]
```

## `values`

> values(Map) -> List

Returns all the values from a map.

```nbl
local map = { foo = 1, baz = 2 }
values(map) # returns [1, 2]
```
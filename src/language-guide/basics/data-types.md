# Data Types

Data types are one of the building blocks of nbcl. This page will cover all of them and their usage examples.

## Strings

There are three types of strings in nbcl: **regular string, raw string, formatted string**.

**Regular String**:

:::code-group
```nbcl
print("Hello! \n")
```

```output
"Hello!
"
```
:::

**Raw String**:

:::code-group
```nbcl 
# Strings are set as-is
print(r"Hello! \n")
```

```output 
"Hello! \n"
```
:::

**Formatted String**:

:::code-group
```nbcl 
# Strings that allow embedding values of variables
const val = "World"
print(f"Hello, ${val}!")
```

```output 
"Hello, World!"
```
:::

## Integers

Whole numbers on which arithmetics can be performed.

```nbcl
const val = 7
print(val * 2)
```

## Floats

Floating numbers on which arithmetics can be performed.

```nbcl 
const val = 7.0
print(val * 2.0)
```

## Boolean

`true` or `false` values.

```nbcl
const val = true

if val {
    print("Val is true")
}
```

## Null

Value representing `none`, or `undefined`. The user will mostly never have to work with this type.

```nbcl 
# null can be set like this
const val = null
```

## Map

A map of values in `key = value` order. Values can be accessed in the `namespace.key` format.

```nbcl 
const map = { x = "Hello" }
print(map.x)
```

Closures can also be defined inside maps.

```nbcl 
const map = { x = || print("hi") }
map.x()
```

## List

A list (or `array`) of data types we've discussed.

```nbcl 
const val = [1, 2.0, "three", null, { x = "y" } ]
print(val)
```

Similar to maps, closures can be defined inside a list.

```nbcl 
const val = [|| print("Hello!")]
val[0]()
```

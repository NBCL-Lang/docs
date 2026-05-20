# Built-in Libraries

Nbcl comes with only one built-in library, that being the `std` lib (standard library).

## `std.math`

```nbcl
import std.math
```

Library item providing additional math functionality past basic arithmetics.

#### Global Variables

- `pi`: Value of PI
- `e`: Value of E

#### Functions

::: info abs
Get the absolute value of an integer.

```nbcl
math.abs(-10) # result: 10
```
:::

::: info sqrt
Get the square root of a floating number.

```nbcl
math.sqrt(36.0)
```
:::

::: info pow
Get the 'x' power of a floating number.

```nbcl
math.pow(3.0, 3.0) # result: 9
```
:::

## `std.time`

```nbcl
import std.time
```

Library item providing functions related with time.

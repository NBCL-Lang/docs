# Loops

NBCL has two types of loops: `for` loop for iterating over a known sequence, and the `while` loop for repeating until condition is not truthy.

## For Loops

`for` loops can iterate over a range or list.

### Range

Ranges come in two forms: exclusive (..) and inclusive (..=):

::: code-group

```nbl
# Exclusive goes from 1 to the
# number before 5 (which is 4).
for i in 1..5 {
    print(i)
}
```

```json [output]
1
2
3
4
```
:::

::: code-group

```nbl
# Inclusive goes from 1 to 5.
for i in 1..=5 {
    print(i)
}
```

```json [output]
1
2
3
4
```

:::

### List

You can also iterate over a list directly, or a variable holding one:

```nbl
for i in [1, 2, 3, 4] {
    print(i)
}

# You can loop in variables too
local example = [2, 3, 5, 1]
for i in example {
    print(i)
}
```

To get both the index and value, destructure with (idx, value):

```nbl
# idx is 0-based
for (idx, num) in [3, 5, 1] {
    print(idx)
    print(num)
}
```

## While Loops

`while` repeats its body as long as the condition holds:

```nbl
local x = true
# Runs as long as x is true
while x {
    print("x is true")
}
```

This example shows how a `while` loop can be used to repeate its body until x is less than or equal to 10.

```nbl
local x = 0
while x <= 10 {
    print(x)
    set x += 1
}
```
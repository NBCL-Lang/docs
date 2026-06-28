# Variables

Variables are like containers that hold a [data type](./data-types). They are necessary to 
store and share a data around.

## Defnitions

In NBCL, there are two ways a variable can be defined. Eeither using the `let` keyword or the `const` keyword.

```nbcl
let foo = 1
const bar = 2
```

### Let Variables

Let variables are variables that are mutable. Which means that its value can be changed later on using an assignment.

### Const Variables

Const variables (or constant variables) are immutable variables. Once they are defined, their values cannot be changed.

## Assignments

Variables can be reassigned using the keyword `set`.

```nbcl
let foo = 1

# Change it to another value
set foo = 2
```

Constant variables (defined with `const` keyword) cannot be reassigned using the `set` keyword.

```nbcl
const foo = 1

# This will throw an error
set foo   = 2
```

Augmented assignments are also supported with `set`:

```nbcl
let foo = 0

# Add five to foo
set foo += 5

# Substract one from foo
set foo -= 1

# Multiply foo with three
set foo *= 3

# Divide foo by two
set foo /= 2

print(foo) # six
```

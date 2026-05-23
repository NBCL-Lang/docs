# Imports

In NBCL, you can import modules and libraries.

::: info
A module is nothing but another `.nbcl` file. Its just a fancy way to say it.
:::

## Importing Modules

The syntax for importing a modules is the `import` keyword, followed by the relative path to the module in quotations, followed by the `as` keyword, which is followed by a variable name of your choice.

**Here is an example:**

```nbcl
import "example.nbl" as example
```

If your directory looks something like this:

```sh
.
├─ main.nbl
└─ ui/
   └─ button.nbl
```

And you want to import the `button.nbl` module, then you need to use the following code:

```nbcl
import "ui/button.nbl" as button
```

This imports all the **functions** and the **variables** defined at the top-level of the module. Do note that components are **not** imported under the `button` variable.

:::details What is a top-level?
The top-level in a language is the first scope. Basically, whatever is defined at the outermost context is a top-level statement in the sense that a `{}` creates a new level (i.e scope).

```nbcl
# is at top-level
fn example() {
  # {} created a new level.
  # So this is one level deep.
}

# is at top-level
fn example2() {
  # not top-level
  let one_level_in = 5
}

# is at top level
const a = "something"
let b = "something"
```
:::

Since components cannot be accessed or imported under a variable, you would need to import them like this:

```nbcl
# Functions and Varibles go under 'button'
# 'StyledButton' component is then included in.
import "ui/button.nbl" as button { StyledButton }
```

To import all the components in, use the `*` wildcard.

```nbcl
# All the components in button is included
import "ui/button.nbl" as button { * }
```

## Importing Libraries

The syntax for importing libraries is similar to importing the modules, but much more straightforward. Its just the `import` keyword, followed by the library name, a dot, and the library item name.

**Here is an example:**

```nbcl
# Import the 'math' item 
# from the 'std' library
import std.math
```

## Using the Imports

The imported items can be used like this: 

```nbcl
import "my_cool_math.nbl" as cool_math
import std.math

# Functions can be accessed like this
math.sqrt(36)
cool_math.pow(5)

# Global variables can be accessed like this:
math.pi
cool_math.cool_number
```

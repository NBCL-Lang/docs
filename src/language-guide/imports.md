# Imports

In NBCL, you can import modules and libraries.

::: info
A module is nothing but another `.nbl` file. Its just a fancy way to say it.
:::

## Importing Modules

The syntax for importing a modules is the `import` keyword, followed by the relative path to the module in quotations, followed by the `as` keyword, which is followed by a variable name of your choice.

**Here is an example:**

```nbl
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

```nbl
import "ui/button.nbl" as button
```

However, this only imports the functions and the variables defined in the module. Not the components. Since components cannot be accessed under a namespace, you would need to import them like this:

```nbl
# Functions and Varibles go under 'button'
# 'StyledButton' component is then included in.
import "ui/button.nbl" as button { StyledButton }
```

To import all the components in, use the `*` wildcard.

```nbl
# All the components in button is included
import "ui/button.nbl" as button { * }
```

## Importing Libraries

The syntax for importing libraries is similar to importing the modules, but much more straightforward. Its just the `import` keyword, followed by the library name, a dot, and the library item name.

**Here is an example:**

```nbl
# Import the 'math' item 
# from the 'std' library
import std.math
```

## Using the Imports

The imported items can be used like this: 

```nbl
import "my_cool_math.nbl" as cool_math
import std.math

# Functions can be accessed like this
math.sqrt(36)
cool_math.pow(5)

# Global variables can be accessed like this:
math.pi
cool_math.cool_number
```
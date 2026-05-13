# Variables

## Defnitions

In NBCL, there are two ways a variable can be defined. Eeither using the `local` keyword or the `global` keyword.

```nbl
local foo = 1
global bar = 2
```

Variables can also be defined with a specific `Type`.

```nbl
local foo: Int = 1

#-
    Do note that if you try to assign a non Integer
    value to foo later, NBCL will throw an error.
-#
```

### Local Variables

These are variables that are available locally to this module. Always use local variables unless you have to export certain variables to other modules.

### Global Variables

Global variables behave exactly like local variables, but when this file is imported as a module, the script that imported it can access the global variables. 

For more information, see [Imports Section](imports).

```nbl
# -- other.nbl --
global pi = 3.14

# -- main.nbl --
import "other.nbl" as other

# Global can be accessed like this
other.pi 
```

## Assignments

Variables can be reassigned using the keyword `set`.

```nbl
local foo = 1

# Change it to another value
set foo = 2
```

Augmented assignments are also supported with `set`:

```nbl
local foo = 0

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
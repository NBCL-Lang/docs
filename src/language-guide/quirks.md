# Quirks

## Value Semantics

Unlike languages like JS and Python which use Reference Semantics, Nbcl uses Value Semantics. 
This means that data is not passed as a reference and instead as a clone.

Here is an example:

```nbcl 
fn mutate(obj) {
    set obj.x = 20
    set obj.y = 10
    set obj.z = 0
}

let obj = {}
mutate(obj)
print(obj) # Output: {}
```

In JavaScript and similar languages, `obj` will be `{x = 20, y = 10, z = 0}` after the mutate function changes its values.
But in Nbcl, a clone of the obj is passed to the mutate function and that clone is mutated instead of the real obj.

**How to make real obj mutate?**

```nbcl 
fn mutate(obj) {
    set obj.x = 20
    set obj.y = 10
    set obj.z = 0

    return obj
}

let obj = {}
set obj = mutate(obj)
print(obj) # Output: {x = 20, y = 10, z = 0}
```

To make the real obj mutate, you can return the mutated obj from the function and assign the return value of the function
to the real obj with the `set` keyword.

## Import System

The main file acts like the source of all truth. If you define a set of variables, functions, or components,
and import another file right after, then that file will have access to those things you've defined.

```nbcl 
# main.nbcl
let example = "Hi"

import "other.nbcl" as other
```

In `other.nbcl`, you can print out the variable named example directly because of the said reason.

```nbcl 
# other.nbcl 
print(example)
```

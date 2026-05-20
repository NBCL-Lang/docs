# Functions

## Definition

Defining functions in NBCl is pretty similar to other languages. Here is an example:

::: code-group
```nbcl
fn say_hello(name) {
    print("Hello, " + name)
}

say_hello("Jhon")
```

```json [output]
"Hello, Jhon"
=> {
  "root_nodes": []
}
```
:::

The `fn` keyword is used to define a function. This keyword should be followed by the function name, and then the function parameters in parenthesis, which in this case is `(name)`.

You can also enforce a data type to the parameters. Like so:

```nbcl
fn say_hello(name)            # [!code --]
fn say_hello(name: String) {  # [!code ++]
    print("Hello, " + name)
}
```

## Special Call Feature

Nbcl has a special function call feature, inspired from [rhai](https://rhai.rs), which allows functions to also behave like methods. The function automatically becomes a method of the first parameter.

```nbcl
fn is(name, age) {
    print(name + " is " + age + " years old")
}
```

Take this function as an example. You can call it like so:

```nbcl
is("Jhon", "20")
```

But this feature makes it so that this also works:

```nbcl
"Jhon".is("20")
```

This feature is **not** exclusive to user defined functions only. The same behavior is present with [built-in functions](built-ins/functions.md) too. Here is an example:

```nbcl
"Hello, World".print()
```

## Return Types

NBCL has two types of return. Explicit return, and Implicit return. Returning with an explicit `return` keyword is called an explicit return. And automatically returning something is called an implicit return. If an expression or a node is found at the end of a script, then it is considered an implicit return.

```nbcl
# Explicit
fn get_pi() {
    return 3.14159
}

# Implicit
fn get_e() {
    2.7182
}
```

## Regarding Nodes

Inside a function, you also have the ability to return Nodes. It looks something like this:

::: code-group

```nbcl
fn give_children() {
    Object "children" {
        Object {}
        Object {}
        Object {}
    }
}

Object "example" {
    give_children()
}
```

```json [output]
=> {
  "root_nodes": [
    {
      "type_name": "Object",
      "id": "example",
      "props": {},
      "children": [
        {
          "type_name": "Object",
          "id": "children",
          "props": {},
          "children": [
            {
              "type_name": "Object",
              "id": null,
              "props": {},
              "children": []
            },
            {
              "type_name": "Object",
              "id": null,
              "props": {},
              "children": []
            },
            {
              "type_name": "Object",
              "id": null,
              "props": {},
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
```
:::

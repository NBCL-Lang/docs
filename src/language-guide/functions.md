# Functions

Defining functions in NBCl is pretty similar to other languages. Here is an example:

::: code-group
```nbl
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

```nbl
fn say_hello(name)            # [!code --]
fn say_hello(name: String) {  # [!code ++]
    print("Hello, " + name)
}
```

Inside a function, you also have the ability to return Nodes. It looks something like this:

::: code-group

```nbl
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
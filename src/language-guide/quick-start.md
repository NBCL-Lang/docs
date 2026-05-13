# Quick Start

::: info
The resolved configuration in the outputs of the examples shown is in JSON instead of the Rust structure as that is more convenient. But the given JSON's are accurate to the JSON serialized form of the Rust structure.

How to traverse the Rust structure will be showcased in the [Embedding Guide](../embedding-guide/add-dependency.md) section.
:::

## Comments

NBCL supports both single-line comments and multi-line comments. Single-line comments are defined by `#` key. And multi-line comments and defined in between the keys `#-` and `-#`.

```nbl
# Single-line comment

#-
    Multi
    Line
    Comment
-#
```

## Hello, World

Here is a simple "Hello, World" example in NBCL. It showcases how both scripting and configuration exist together.

::: code-group
```nbl
# Print out "Hello, World" in script
print("Hello, World")

# Resolve "Hello, World" into config
Object {
    nbcl = "Hello, World"
}
```

```json [output]
"Hello, World"   // <-- Printed by script
"root_nodes": [  // <-- Resolved config
    {
        "type_name": "Object",
        "id": null,
        "props": {
            "nbcl": "Hello, World"
        },
        "children": []
    }
]
```
:::

The `Object` in this example is called a "**Node**" or a "**Component**". A node can contain properties and children. By default, NBCL only comes with one node built-in, that being the `Object`, which is a very loose node that can take in **any** property, **any** number of children, and **allows** id to be both defined and not defined.

For the language to work well, you need to register your own nodes. The `Object` is a very generalized node that is very easy to cause confusion because of how loose it is. We'll learn how to register new nodes later, but **keep this in mind** for now.

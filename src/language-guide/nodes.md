# Nodes

Nodes are if not, the most important component in NBCL. Not only because the full form of NBCL is "node based configuration language", but also because the whole configuration aspect of the language revolves around nodes.

## Understanding the Node

::: code-group
```nbl
Object "this is the id" {
    # Things that go by the
    # 'key = value' syntax is the property.
    property1 = "Value"
    property2 = 10
    property3 = true

    # You can also script inside the node
    # print("Inside the node!")

    # This is a child
    Object {
        property1 = 4
        property2 = "Hello"
    }

    # More children can also be added...
}
```

```json [output]
{
  "root_nodes": [
    {
      "type_name": "Object",
      "id": "this is the id",
      "props": {
        "property1": "Value",
        "property3": true,
        "property2": 10
      },
      "children": [
        {
          "type_name": "Object",
          "id": null,
          "props": {
            "property2": "Hello",
            "property1": 4
          },
          "children": []
        }
      ]
    }
  ]
}
```
:::

This example showcases the core design behind the node. This is all that is to the node and this is the core of the language.

## Defining Nodes

You can also define nodes within the language. But a key limitation is that the nodes defined in the language has to spit out a node that is pre-registered into the language. Like the `Object` node.

::: code-group
```nbl
# 'component' is the keyword
# used to define a new node.
component NodeName (any: props) {
    # Configures the node:
    id_required = false   # if true, the id becomes compulsory
    child_count = [1, 1]  # [min, max] child count

    # 'self.id' sets the id of the 
    # object to the id passed to the node
    Object self.id {
        property = "value"
        another_property = "value"

        # Inserts the children passed 
        # to our node here.
        self.children
    }
}

# Using your node
NodeName "id" {
    # An example child for demonstration purposes
    Object {}
}
```

```json [output]
{
  "root_nodes": [
    {
      "type_name": "Object",
      "id": "id",
      "props": {
        "property": "value",
        "property_alt": "value"
      },
      "children": [
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
```
:::

Okay, so there is a lot going on here, but it is mostly straightforward. `component` is the keyword we use to define a new node. And after the component, we set the name of the node in `PascalCase`. And right after that, we define the properties that this component accepts.

<style>
table td:first-child,
table th:first-child {
  min-width: 120px;
  white-space: nowrap;
}
</style>

| Case | Description |
| ----- | ---------- |
| `(any: props)` | Allows any properties to be passed and puts all the properties in the variable named "props". |
| `(address, port)` | Only accepts the properties: "address", and "port". Both are required. |
| `(address, port: Int)` | Only accepts the properties: "address", and "port". Both are required and "port" has to be an integer. |
| `(address, port?)` | Only accepts the properties: "address", and "port". But, port is optional. |

That is how you setup the signature of your node. Now let's move on to the properties that makes the node loose/strict.

- `id_required`: Makes the id required
- `child_count`: The minimum and maximum amount of children this node accepts.

::: tip
`child_count` can be defined like this which makes a specific amount of children required:

```nbl
# Accepts only 1 child
child_count = [1]
```
:::

**That's it!** :tada: Now just insert a predefined node like this:

```nbl
component Example (any: props) {
    # Object is a predefined node
    Object {
        # Stuff
    }
}
```

::: info
There is also a variable called `self` injected inside the scope of the `component`. It contains two fields: "id" and "children".

- `self.id`: id passed to the node
- `self.children`: children passed to the node

So with it, you can do cool stuff like this:

:::code-group
```nbl
component Example (any: props) {
    # Print the values
    print(self.id)
    print(self.children)

    # Or use it
    Object self.id {
        self.children
    }
}

Example "id" {
    Object {}
}
```
```json [output]
"id"     // <-- ID
<nodes>  // <-- Children
// (it appears as '<nodes>' because nodes cant be printed)
{
  "root_nodes": [
    {
      "type_name": "Object",
      "id": "id",
      "props": {},
      "children": [
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
```
:::
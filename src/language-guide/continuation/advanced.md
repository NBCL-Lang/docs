# Advanced 

Advanced features of nbcl that mostly won't be needed but exists for convenience.

## Spreading

You can spread either a List or a Map into another List or Map using the spread operator (`...`).

**Example:**

```nbcl 
let arr = [1, 2, 3]
let arr2 = [...arr, 4, 5]

print(arr2) # [1, 2, 3, 4, 5]
```

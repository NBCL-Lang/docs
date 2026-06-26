# `std.math`

```nbcl
import std.math
```

Library item providing additional math functionality past basic arithmetics.

## Global Variables

* `PI`: Value of PI
* `E`: Value of E
* `SQRT2`: Square root of 2 
* `SQRT1_2`: Square root of 1/2 (0.5)
* `LN2`: Natural logarithm of 2 
* `LN_10`: Natural logarithm of 10

## Functions

### `math.abs(val: Int) -> Int`

Get the absolute value of an integer.

```nbcl
math.abs(-10) # result: 10
```

### `math.sqrt(val: Float) -> Float`

Get the square root of a floating number.

```nbcl
math.sqrt(36.0) # result: 6.0
```

### `math.cbrt(val: Float) -> Float`

Get the cube root of a floating number.

```nbcl 
math.cbrt(27.0) # result: 3.0
```

### `math.pow(base: Float, exp: Float) -> Float`

Get the 'x' power of a floating number.

```nbcl
math.pow(3.0, 3.0) # result: 27.0
```

### `math.floor(val: Float) -> Float`

Returns the largest integer less than or equal to a floating number.

```nbcl
math.floor(3.9) # result: 3.0
```

### `math.ceil(val: Float) -> Float`

Returns the smallest integer greater than or equal to a floating number.

```nbcl
math.ceil(3.1) # result: 4.0
```

### `math.round(val: Float) -> Float`

Returns the nearest integer to a floating number. Rounds half-way cases away from zero.

```nbcl
math.round(3.5) # result: 4.0
```

### `math.trunc(val: Float) -> Float`

Returns the integer part of a floating number, removing any fractional digits.

```nbcl
math.trunc(3.9) # result: 3.0
```

### `math.sin(val: Float) -> Float`

Computes the sine of a floating number (in radians).

```nbcl
math.sin(0.0) # result: 0.0
```

### `math.cos(val: Float) -> Float`

Computes the cosine of a floating number (in radians).

```nbcl
math.cos(0.0) # result: 1.0
```

### `math.tan(val: Float) -> Float`

Computes the tangent of a floating number (in radians).

```nbcl
math.tan(0.0) # result: 0.0
```

### `math.asin(val: Float) -> Float`

Computes the arcsine of a floating number, returning a value in radians.

```nbcl
math.asin(0.0) # result: 0.0
```

### `math.atan2(y: Float, x: Float) -> Float`

Computes the four-quadrant arctangent of y and x in radians.

```nbcl
math.atan2(1.0, 0.0)
```


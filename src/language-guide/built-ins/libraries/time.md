# `std.time`

```nbcl
import std.time
```

Library item providing functions related with time.

## Functions

### `time.now() -> Float`

Returns the current system time as a floating-point Unix timestamp (seconds elapsed since January 1, 1970).

```nbcl
time.now() # result: 1719417301.123
```

### `time.mark() -> Float`

Returns a floating-point milestone representing seconds elapsed since an internal process baseline (the first call to `mark` or `elapsed`). Useful for measuring relative intervals.

```nbcl
let start = time.mark()
```

### `time.elapsed(prev_mark: Float) -> Float`

Calculates the relative time difference (in seconds) between the current runtime state and a previously captured milestone generated from `mark`.

```nbcl
let start = time.mark()
# ... do work ...
let duration = time.elapsed(start)
```

### `time.sleep(ms: Int) -> Null`

Suspends execution of the current thread for a specified duration in milliseconds.

```nbcl
time.sleep(1000) # Sleeps for 1 second
```


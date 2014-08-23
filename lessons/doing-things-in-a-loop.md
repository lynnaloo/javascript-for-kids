## Repeating Code in a Loop

If you want to repeat code, then you would use a loop.

### For Loop

If you want to do something a set amount of times, use a *for loop*.

`i` is the name for our counter. The counter starts at zero and increases by one every 
time it completes a loop.

```javascript
for (var i = 0; i < 3; i++) {
  alert("Loop number " + i);
}
```

### While Loop

If you want to keep something running until something changes, use a *while loop*.

```javascript
var i = true;
while (i) {
  i = false;
}
```

Beware of the *infinite loop*

```javascript
var i = true;
while (i) {
  // this will never stop repeating
  i = true;
}
```

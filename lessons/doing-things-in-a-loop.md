## Doing the same thing again and again

If you want to do something a set amount of time, use a *for loop*

The `i` variable is name for our counter, that will start at zero.

```javascript
for (var i = 0; i < 3; i++) {

}
```

If you want to keep something running until something changes, use a *while loop*

```javascript
var i = true
while (i) {
  i = false;
}
```

Beware of the *infinite loop*

```javascript
var i = true
while (i) {
  // this will never stop repeating
  i = true;
}
```

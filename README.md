# drop-down
Custom drop-down element

Create drop-down elements in your HTML to spice up any navigation bar. Customize basic functionality and style to fit your needs. 

## Documentation

### Configuration

```HTML
<drop-down>
    <div id = "title">Title</div>
    <ul id = "content">
        <li>Drop down item</li>
        <li>Drop down item</li>
        <li>Drop down item</li>
    </ul>
</drop-down>
```

### Attributes
- `open` initial state of the drop-down `"true"` or `"false"` default `"false"`
- `event` mouse event to activate the drop-down on `"click"` or "hover" default `"hover"`
- `appear` animation to use `"slide-down"`, `"slide-up"`, `"slide-left"`, `"slide-right"`, or `"fade-in"` default `"slide-up"`
- `duration` duration of animation default `"300"`

####Handlebar helper + Bootstrap grid same height
[handlebars_helper/bootstrap_grid_same_height.handlebars](handlebars_helper/bootstrap_grid_same_height.handlebars)

####Jquery parse HTML
Sometime $("html-text") does not work with text returned from server. User $.parseHTML("html-text") to convert to Jquery object. Must re-assign object by jquery object, i.e res = $.parseHTML(res).

####Mobile Landscape bootstrap
Handle 480 and 760 pixels breakpoints, use this [gist](https://gist.githubusercontent.com/andyl/6360906/raw/dc9dd7c05d3f538da1e37fd50c85afbaa4365029/bootstrap_ms.css.scss).<br />
Replace
```
@import 'bootstrap';
```
by
```
@import '/bootstrap/less/variables.less'; //Change the link depends on projects
```

####IE 11 Ordered List
```
.ol{
	counter-reset: item;
	list-style-type: none;
	position: relative;
	li{
		counter-increment: item;
		&:before{	
			content: counters(item, ".") " ";
			position: absolute;
			left: 14px;
		}
	}
}
```

####IE11 Margin %
Using margin % (i.e `margin: 50% 0;`) on any buttons or button wrapper can cause `$("button").click()` not work

####Css Greyscale
Don't use "greyscale". Make image pixelated on IE and Androids.

####Jquery `keyup` event
Event `keyup` does not work on Safari, use jquery `on('input')` instead.

####Function toLocaleString().
Function `toLocaleString()` not work on Safari. Use this [function](https://github.com/nlt2390/web_tips/blob/master/localeString.js).

####Integrate Datatable with Ajax source into Rails
[Github](https://github.com/nlt2390/simple-rails-datatable-ajax)


####Prevent scroll body when Bootstrap modal is opened
Should be careful when using this, the content will scroll up to top.

```
.modal-open{
  position: fixed;
  left: 0;
  right: 0;
}
```


#### `float: left` with dynamic height

![Image of float]
(https://raw.githubusercontent.com/nlt2390/web_tips/master/fill_empty_space.png)

![Image of float]
(https://raw.githubusercontent.com/nlt2390/web_tips/master/not_fill_in.png)

#### Jquery set `max-height:none` not work on IE 11
```
$(element).css({
  'max-height': 'none'
})
```
The above code not work for IE 11

#### `rows` attribute in `<textarea>` not work with IE <= 11

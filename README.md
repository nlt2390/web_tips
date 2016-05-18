####Popup center mobile
```
-webkit-transform: translateX(-50%) translateY(-50%);
-moz-transform: translateX(-50%) translateY(-50%);
-ms-transform: translateX(-50%) translateY(-50%);
-o-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);
```

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
Only apply to modals that overlay fullscreen because this cause <body> misaligns
```
.modal-open{
  position: fixed;
}
```

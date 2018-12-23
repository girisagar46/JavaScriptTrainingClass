We can use `<noscript>` tag to check whether the browser supports JS or not while doing client side programming.

For example, in your HTML page, you can do like this:

```html
<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript">

		</script>

		<script type="text/javascript" src="scripts.js"></script>
	</head>

	<body>
		<h1>Hello World</h1>

		<noscript>JS not supported</noscript>
	</body>
</html>
```

If JS is not supported by your browser, then it will render **JS not supported** in the browser.


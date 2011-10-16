###noisify.js###

Noisify.js is a tiny (787 bytes minified) script to add noise to an element. I made it as an alternative to using Photoshop, but really it's pretty pointless. I probably wouldn't use it.

Now that that's out of the way, you use it like this:

	<!DOCTYPE html>
	<html>
	<head>
	<style>
	#makeMeNoisy {
		width: 300px;
		height: 300px;
		background-color: #222;
	}
	</style>
	<script src="./noisify.min.js"></script>
	<script>
	function main(){
		noisify(document.getElementById("makeMeNoisy"), { smoothness: 17 });
	}
	
	</script>
	</head>
	<body onload="main();">
	
		<div id="makeMeNoisy"></div>
	
	</body>
	</html>

Wasn't that easy? I'd suggest smoothness between 12 and 20 for anything remotely low-key. The colour is taken from the div's background-color CSS. This does not support background-image, and probably won't unless someone asks me.
Also noisify only works with `document.getElementById('myId')`, not with jQuery's `$('#myId')`.

This only works in browsers that support the canvas element, and preferably ones that have javascript engines that, you know, work.
This means that noisify.js *won't* work in IE 7,8 or earlier, but has a good chance of working on iOS.

Maybe someday I'll do some benchmarks as to how much slower or faster this is in comparison to loading an actual image.

We good? Good! [Tweet at me!](http://twitter.com/csl_)
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

We good? Good! [Tweet at me!](http://twitter.com/csl_)
function noisify(elem, args){
	//make an invisible canvas element
	var cnv = document.createElement("canvas");
	cnv.setAttribute("width", elem.clientWidth);
	cnv.setAttribute("height", elem.clientHeight);
	
	//cnv.getContext("2d").drawImage(elem.style.backgroundImage);
	//add noise to it
	if (args.type == 'perlin')
		perlin_noise(cnv);
	
	//get the image from that invisible canvas and use it as the background image for elem
	cnv.getContext("2d").getImageData(0,0, elem.clientWidth, elem.clientHeight);
	
	elem.style.backgroundImage="url(" + cnv.toDataURL() + ")";
	
}

/**
 * Stolen from http://www.ozoneasylum.com/30982
 */
function perlin_noise (canvas) {
  var canvas_ctx = canvas.getContext ("2d"),
      offscreen = document.createElement ("canvas"),
      offscreen_ctx = offscreen.getContext ("2d"),
      saved_alpha = canvas_ctx.globalAlpha

  /* Fill the offscreen buffer with random noise. */
  offscreen.width = canvas.width
  offscreen.height = canvas.height

  

  var offscreen_id = offscreen_ctx.getImageData (0, 0,
                                                 offscreen.width,
                                                 offscreen.height),
      offscreen_pixels = offscreen_id.data

  for (var i = 0; i < offscreen_pixels.length; i += 4) {
    offscreen_pixels[i    ] =
    offscreen_pixels[i + 1] =
    offscreen_pixels[i + 2] = Math.floor (Math.random () * 256)
    offscreen_pixels[i + 3] = 255
  }

  offscreen_ctx.putImageData (offscreen_id, 0, 0)

  /* Scale random iterations onto the canvas to generate Perlin noise. */
  for (var size = 102; size <= offscreen.width; size *= 2) {
    
    var x = Math.floor (Math.random () * (offscreen.width - size)),
        y = Math.floor (Math.random () * (offscreen.height - size))

    canvas_ctx.globalAlpha = 4 / size

	if ((x > 0) && (y > 0) && (size > 0))
    canvas_ctx.drawImage (offscreen, x, y, size, size,
                                     0, 0, canvas.width, canvas.height)
  	
  }

  canvas_ctx.globalAlpha = saved_alpha
  
}

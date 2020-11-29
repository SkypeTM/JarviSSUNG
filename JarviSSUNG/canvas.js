window.onload = function(e) {
       var _cvs = document.querySelector("#map"),
           _ctx = _cvs.getContext("2d"),
           _img = new Image();

       _img.src = "image/지도 v.1.png";
       _img.onload = function(e) {
           _ctx.drawImage(_img, -90, -10);
      }
}

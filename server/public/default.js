(function () {

      var socket = io();
           
      //////////////////////////////
      // Socket.io handlers
      //////////////////////////////

      socket.on('newColor', function (msg) {
          document.body.style.backgroundColor = "white";
          setTimeout(function(){
            document.body.style.backgroundColor = msg;
          }, 400);
          console.log(msg);
      });
})();


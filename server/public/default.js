(function () {

      var socket = io();
           
      //////////////////////////////
      // Socket.io handlers
      //////////////////////////////

      socket.on('newColor', function (msg) {
          document.body.style.backgroundColor = msg;
          console.log(msg);
      });
})();


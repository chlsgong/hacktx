(function () {

      var socket = io();
           
      //////////////////////////////
      // Socket.io handlers
      //////////////////////////////
      console.log('run');
      socket.on('newColor', function (msg) {
          document.body.style = msg.color;
          console.log('test');
      });
})();


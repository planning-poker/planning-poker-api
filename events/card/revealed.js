'use strict';

function revealed(card, socket) {
  socket.emit('revealed', {
    user: {
      id: socket.id
    },
    card: card,
    users: global.rooms[socket.room].users
  });

  socket
    .broadcast
    .to(socket.room)
    .emit('card:revealed', {
      users: global.rooms[socket.room].users
    });
}

export default revealed;
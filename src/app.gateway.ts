import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'http';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway {
  private players: Socket[] = [];

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('join')
  connect(
    @MessageBody() player: number | null,
    @ConnectedSocket() client: Socket,
  ) {
    if (player !== null) {
      this.players[player] = client;
      console.log(`Player ${player} connected`);
    } else {
      console.log('Spectator connected');
    }
  }

  @SubscribeMessage('rotate')
  async rotatePlayer(
    @MessageBody() rotation: { alpha: number; beta: number; gamma: number },
    @ConnectedSocket() client: Socket,
  ) {
    const player = this.players.findIndex((player) => player === client);
    console.log(`Player ${player} rotated`);

    if (player !== -1) {
      this.server.emit('rotate', { player, rotation });
    }
  }

  @SubscribeMessage('flip')
  async flipPlayer(@ConnectedSocket() client: Socket) {
    const player = this.players.findIndex((player) => player === client);
    console.log(`Player ${player} flipped`);

    if (player !== -1) {
      this.server.emit('flip', { player });
    }
  }
}

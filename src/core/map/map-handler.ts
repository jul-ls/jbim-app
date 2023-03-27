import { MapScene } from './map-scene';
import { User } from 'firebase/auth';
import { Events } from '../../middleware/event-handler';

//configurando pra só iniciar se nao foi iniciado
//e pra fechar se nao foi fechado
//react carrega 2x no strict mode, nao tem oq fazer...
export const mapHandler = {
  viewer: null as MapScene | null,

  async start(container: HTMLDivElement, user: User, events: Events) {
    if (!this.viewer) {
      console.log('Map started!');
      this.viewer = new MapScene(container, events);
      await this.viewer.getAllBuildings(user);
    }
  },
  remove() {
    if (this.viewer) {
      console.log('Map killed!');
      this.viewer.dispose(); //matando os leaks
      this.viewer = null;
    }
  },

  addBuilding(user: User) {
    if (this.viewer) {
      this.viewer.addBuilding(user);
    }
  },
};

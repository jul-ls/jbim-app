import { MapScene } from './map-scene';
import { User } from 'firebase/auth';

//configurando pra só iniciar se nao foi iniciado
//e pra fechar se nao foi fechado
//react carrega 2x no strict mode, nao tem oq fazer...
export const mapHandler = {
  viewer: null as MapScene | null,

  start(container: HTMLDivElement) {
    if (!this.viewer) {
      console.log('Map started!');
      this.viewer = new MapScene(container);
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

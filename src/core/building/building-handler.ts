import { BuildingScene } from './building-scene';

export const buildingHandler = {
  //é nulo quando nao está inicializado, e é scene quando é inicializado
  viewer: null as BuildingScene | null,
  start(container: HTMLDivElement) {
    if (!this.viewer) {
      this.viewer = new BuildingScene(container);
    }
  },

  remove() {
    if (this.viewer) {
      console.log('building viewer disposed');
      this.viewer.dispose();
      this.viewer = null;
    }
  },
};

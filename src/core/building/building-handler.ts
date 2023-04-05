import { Building } from '../../types';
import { BuildingScene } from './building-scene';

export const buildingHandler = {
  //é nulo quando nao está inicializado, e é scene quando é inicializado
  viewer: null as BuildingScene | null,
  start(container: HTMLDivElement, building: Building) {
    if (!this.viewer) {
      this.viewer = new BuildingScene(container, building);
    }
  },

  remove() {
    if (this.viewer) {
      console.log('building viewer disposed');
      this.viewer.dispose();
      this.viewer = null;
    }
  },

  async convertIfcToFragments(ifc: File) {
    if (!this.viewer) {
      throw new Error('Building viewer not active!');
    }
    return this.viewer.convertIfcToFragments(ifc);
  },
};

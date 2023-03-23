export const mapHandler = {
  //configurando pra só iniciar se nao foi iniciado
  //e pra fechar se nao foi fechado

  //react carrega 2x no strict mode, nao tem oq fazer...
  started: false,

  start() {
    if (!this.started) {
      console.log('Map started!');
      this.started = true;
    }
  },
  remove() {
    if (this.started) {
      console.log('Map killed!');
      this.started = false;
    }
  },
};

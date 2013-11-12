/* CLASE POKEMON: */
angular
  .module('NationalPokedex')
  .factory('Pokemon', function() {
    function Pokemon(data) {
      var predeterminados = {
        imagen  : 'http://imageshack.com/a/img440/3812/kzu.png',
        tipos   : []
      };
      
      angular.extend(this, predeterminados, data);
    }
    
    Pokemon.prototype.agregarTipo = function(tipo) {
      this.tipos.push( tipo );
    }
    
    Pokemon.prototype.elimininarTipo = function(tipo) {
      var indice = this.tipos.indexOf( tipo );
      
      this.spliec( indice, 1 );
    }
    
    return Pokemon;
  })
;
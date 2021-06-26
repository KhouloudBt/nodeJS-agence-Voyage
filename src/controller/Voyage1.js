// constructor
const Voyage1 = function(voyage) {
    this.id = voyage.id;
    this.dateDepart = voyage.dateDepart;
    this.dateArrive = voyage.dateArrive;
    this.nom = voyage.nom;
    this.capacite = voyage.capacite;
    this.stat = voyage.stat;
  };
module.exports = Voyage1;
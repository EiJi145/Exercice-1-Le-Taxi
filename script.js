function Personnage(prenom, santeMentale) {
    this.prenom = prenom;               //On créer le personnage en lui attribuant le prenom et la sante mentale
    this.santeMentale = santeMentale;
  }
  
  function Trajet() {                   // On créer la fonction trajet 
    this.musiques = ["Hervé - Coding Mood", "After Hours - The Weeknd", "Haïko - Fissure", "Let You Down - NF", "Anissa - Wejdene"];
    this.feuxRougesRestants = 30;
    this.nbChangements = 0;
  }
  
  Trajet.prototype.choisirChansonAleatoire = function () {      //mécanisme pour avoir une chanson en random
    var musiqueAleatoire = this.musiques[Math.floor(Math.random() * this.musiques.length)];
    return musiqueAleatoire;
  };
  
  Trajet.prototype.effectuerTrajet = function (personnage) {
    while (this.feuxRougesRestants > 0) {                   //fonction pour lancer le trrajet
      var chanson = this.choisirChansonAleatoire();
      console.log("Musique : " + chanson + " | Feux rouges restants : " + this.feuxRougesRestants);
  
      if (chanson === "Anissa - Wejdene") {
        personnage.santeMentale -= 1;       //Quand anissa se lance -1
        this.nbChangements += 1;
      }
  
      this.feuxRougesRestants -= 1;
  
      if (personnage.santeMentale <= 0) {
        console.log("Explosion BOOOOOOOUUUUM");
        return;
      }
    }
  
    console.log(personnage.prenom + " est ENFIN arrivé après " + this.nbChangements + " changements de taxi.");
  };
  
  var John = new Personnage("John", 10);        //on créer le perso john
  var trajetJohn = new Trajet();
  
  // Début du trajet de John                    // et on lance le trajet !
  trajetJohn.effectuerTrajet(John);
  
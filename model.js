
matcherModel  = {
    size: 4,
    cards: [],
    cardValues: [ "A", "B", "C", "D" ,"E", "F", "G", "H", "I", "J"],

    currentId: 1,

    numCards: 0,


    init: function( size ) {
        this.size = size || this.size;
        var numPairs = Math.pow( this.size, 2) / 2;
        for( var i = 0; i < numPairs ; i++ ) this.addPair();
        this.shuffle();
    },

    addPair: function(  ) {
        var value = this.cardValues[ Math.floor( Math.random() * this.cardValues.length) ];
        this.cards.push( new this.Card( this.getId(), value ));  
        this.cards.push( new this.Card( this.getId(), value ));  
        this.numCards += 2;
    },
        
    shuffle: function(  ) {
        var currentIndex = this.cards.length, temp, rand;

        while( currentIndex > 0){
            rand = Math.floor( Math.random() * currentIndex );
            currentIndex--;

            temp = this.cards[rand];
            this.cards[rand] = this.cards[currentIndex];
            this.cards[currentIndex] = temp;
        }
    },
        
    getId: function(  ) {
        var id = this.currentId;
        this.currentId++;
        return id;
    },        
        
    Card: function( id, value ) {
        this.id = id;
        this.value = value;
    },
        

}
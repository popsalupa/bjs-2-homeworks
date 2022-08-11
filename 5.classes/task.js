class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;   
        this.state = 100;
        this.type = null;    
    }
   
    fix () {
        this.state *= 1.5;
    }
 

    set state (healt) {
        if (healt <= 0) {
            this._state = 0;
        } else if (healt > 100) {
            this._state = 100; 
        } else {
            this._state = healt;
        }
    }

    get state() {
        return this._state;
    }

    
}   

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'magazine';
        this.author = author;
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'novel';
    }
}

class FantasticBook extends Book  {
    constructor (name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'fantastic';
    }
}

class DetectiveBook extends Book  {
    constructor (name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'detective';
    }
}

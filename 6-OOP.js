var person = {
    ho          : "Nguyen",
    ten         : "Tien",
    chaomung    : function() {
        console.log( "Chao ban" + this.ho + " " + this.ten );
    }
}

person.chaomung();

console.log( person.ho );
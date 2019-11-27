function KhoaHoc( ten, hocphi ) {
    this.ten = ten;
    this.hocphi = hocphi;
}

KhoaHoc.prototype.mota = function () {
    console.log( "Hello " + this.ten + "" + this.hocphi );
}

var nodejs = new KhoaHoc("Lap trinh NodeJS", 800000);

nodejs.mota();
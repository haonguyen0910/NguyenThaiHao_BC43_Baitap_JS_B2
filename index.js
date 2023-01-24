//Bài 1: Tính tiền lương nhân viên
function tinhLuong(){
    var tienLuong = document.getElementById("tienLuong").value;
    var soNgay = document.getElementById("soNgay").value;
    var luong = document.getElementById("luong");
    luong.innerHTML = tienLuong * soNgay;
}

//Bài 2: Tính giá trị trung bình
function tinhGTTB(){
    var a1 = Number(document.getElementById("soThuNhat").value);
    var a2 = Number(document.getElementById("soThuHai").value);
    var a3 = Number(document.getElementById("soThuBa").value);
    var a4 = Number(document.getElementById("soThuTu").value);
    var a5 = Number(document.getElementById("soThuNam").value);
    var GTTB = document.getElementById("TB");
    GTTB.innerHTML = (a1 + a2 + a3 + a4 + a5)/5;
}

//Bài 3: Quy đồi tiền
function QuyDoi(){
    const tiGia = 23500;
    var a = document.getElementById("soUSD").value;
    var quyDoi = document.getElementById("quyDoi");
    quyDoi.innerHTML = a * tiGia;
}

//Bài 4:Tính diện tích,chu vi hình chữ nhật
function DienTich(){
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);
    var DT = document.getElementById("ketQua");
    DT.innerHTML = chieuDai * chieuRong;
}

function ChuVi(){
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);
    var CV = document.getElementById("ketQua");
    CV.innerHTML = (chieuDai + chieuRong) * 2;
}

//Bài 5: Tính tổng 2 ký số
function Tong(){
    var so = Number(document.getElementById("so").value);
    var donVi = so % 10;
    var chuc = Math.floor(so / 10);
    var tong = document.getElementById("tong");
    tong.innerHTML = donVi + chuc;
}
function Kiem_tra() {
    let Can_nang = +document.getElementById("Can_nang").value;
    let Chieu_cao = +document.getElementById("Chieu_cao").value;
    let BMI = Can_nang / (Chieu_cao ** 2);
    let KetQua;

    if (BMI < 18) {
        KetQua = "Ốm"
    } else if (18 < BMI && BMI <= 25) {
        KetQua = "Bình Thường"
    } else if (25 < BMI && BMI <= 30) {
        KetQua = "Mập"
    } else {
        KetQua = "NaN"
    }
}















/*
    a = prompt("can nang");
b = prompt("chieu cao");
let c = a / (b ** 2);

if (c < 18)
    document.write("ốm");
if (18 < c & c <= 25)
    document.write("bình thường");
if (25 < c && c <= 30)
    document.write("mập")

inputHoahoc = prompt("Enter the HoaHoc");
inputVatly = prompt("Enter the VatLy");
inputSinhhoc = prompt("Enter the SinhHoc");

let Hoahoc = parseInt(inputHoahoc);
let Vatly = parseInt(inputVatly);
let Sinhhoc = parseInt(inputSinhhoc);
let area = (Hoahoc + Vatly + Sinhhoc)/3;
document.write("Tổng:" + area);

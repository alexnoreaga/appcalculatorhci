var promo = "Untuk list lengkap angsuran lainnya silahkan cek di https://galaxycamera.id/cicilan-tanpa-cc"

function angsuranNormal(){
  var Harga = document.getElementById("inputharga").value;
  var Dp = document.getElementById("inputdp").value;
  var hargaasli = parseInt(Harga);
  var dpasli = parseInt(Dp);
  var dpShowTime = dpasli.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});


var dpSesungguhnya = dpasli - 199000;
var hargaSesungguhnya = hargaasli - dpSesungguhnya;
var bunga9 = hargaSesungguhnya * 2.29/100;
var bungaNormal = hargaSesungguhnya * 2.69/100;
var biayaAdmin = 5000;
var tenorNormal9bln = (hargaSesungguhnya/9) + bunga9 + biayaAdmin;
var tenorNormal12bln = (hargaSesungguhnya/12) + bungaNormal + biayaAdmin;
var tenorNormal15bln = (hargaSesungguhnya/15) + bungaNormal + biayaAdmin;
var tenorNormal18bln = (hargaSesungguhnya/18) + bungaNormal + biayaAdmin;
var tenorNormal24bln = (hargaSesungguhnya/24) + bungaNormal + biayaAdmin;
var mathTenorNormal9Bln = Math.ceil(tenorNormal9bln/100)*100;
var mathTenorNormal12Bln = Math.ceil(tenorNormal12bln/100)*100;
var mathTenorNormal15Bln = Math.ceil(tenorNormal15bln/100)*100;
var mathTenorNormal18Bln = Math.ceil(tenorNormal18bln/100)*100;
var mathTenorNormal24Bln = Math.ceil(tenorNormal24bln/100)*100;
var tenor9BlnShowTime = mathTenorNormal9Bln.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});
var tenor12BlnShowTime = mathTenorNormal12Bln.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});
var tenor15BlnShowTime = mathTenorNormal15Bln.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});
var tenor18BlnShowTime = mathTenorNormal18Bln.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});
var tenor24BlnShowTime = mathTenorNormal24Bln.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});




document.getElementById("hasilAngsuran").innerHTML =
"Berikut cicilan dengan DP " + dpShowTime +
"<br>" + "9x : " + tenor9BlnShowTime +
"<br>" + "12x : " + tenor12BlnShowTime +
"<br>" + "15x : " + tenor15BlnShowTime +
"<br>" + "18x : " + tenor18BlnShowTime +
"<br>" + "24x : " + tenor24BlnShowTime +
"<br>" + promo;

}


function angsuran6099(){
  var Harga = document.getElementById("inputharga").value;
  var Dp = document.getElementById("inputdp").value;
  var hargaasli = parseInt(Harga);
  var dpasli = parseInt(Dp);
  var dpShowTime = dpasli.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});


var dpSesungguhnya = dpasli - 199000;
var hargaSesungguhnya = hargaasli - dpSesungguhnya;
var bunga6099 = hargaSesungguhnya * 0.99/100;
var biayaAdmin = 5000;
var tenor6bln6099 = (hargaSesungguhnya/6) + bunga6099 + biayaAdmin;
var mathTenor6Bln6099 = Math.ceil(tenor6bln6099/100)*100;
var tenor6Bln6099ShowTime = mathTenor6Bln6099.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});




document.getElementById("hasilAngsuran").innerHTML =
"Berikut cicilan dengan DP " + dpShowTime +
"<br>" + "6x : " + tenor6Bln6099ShowTime +
"<br>" + promo;


}

function angsuran60P(){
  var Harga = document.getElementById("inputharga").value;
  var Dp = document.getElementById("inputdp").value;
  var hargaasli = parseInt(Harga);
  var dpasli = parseInt(Dp);
  var dpShowTime = dpasli.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});


var dpSesungguhnya = dpasli - 199000;
var hargaSesungguhnya = hargaasli - dpSesungguhnya;
var biayaAdmin = 5000;
var tenor6bln60P = (hargaSesungguhnya/6) + biayaAdmin;
var mathTenor6Bln60P = Math.ceil(tenor6bln60P/100)*100;
var tenor6Bln60PShowTime = mathTenor6Bln60P.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});




document.getElementById("hasilAngsuran").innerHTML =
"Berikut cicilan dengan DP " + dpShowTime +
"<br>" + "6x : " + tenor6Bln60PShowTime +
"<br>" + promo;


}

function angsuran40P(){
  var Harga = document.getElementById("inputharga").value;
  var Dp = document.getElementById("inputdp").value;
  var hargaasli = parseInt(Harga);
  var dpasli = parseInt(Dp);
  var dpShowTime = dpasli.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});


var dpSesungguhnya = dpasli - 199000;
var hargaSesungguhnya = hargaasli - dpSesungguhnya;
var biayaAdmin = 5000;
var tenor6bln60P = (hargaSesungguhnya/4) + biayaAdmin;
var mathTenor6Bln60P = Math.ceil(tenor6bln60P/100)*100;
var tenor6Bln60PShowTime = mathTenor6Bln60P.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0});




document.getElementById("hasilAngsuran").innerHTML =
"Berikut cicilan dengan DP " + dpShowTime +
"<br>" + "4x : " + tenor6Bln60PShowTime +
"<br>" + promo;


}





       function copyDivToClipboard(){
         var text = document.getElementById("hasilAngsuran");
         var selection = window.getSelection();
         var range = document.createRange();
         range.selectNodeContents(text);
         selection.removeAllRanges();
         selection.addRange(range);
         //add to clipboard.
         document.execCommand('copy');
       }

function myRefresh() {
 window.location.reload();
}

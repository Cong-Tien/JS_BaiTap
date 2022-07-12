// BÀI 1: Ngày tháng

/*
    Sơ đồ 3 khối
    INPUT: ngày, tháng, năm 

     PROCESS:
       1. Lấy input (d,m,y)
       2. Kiểm tra năm nhuận: year chia hết cho 4 và không chia hết cho 100 HOẶC năm đó chia hết cho 400 => năm nhuận
       3. Kiểm tra số ngày trong tháng đó.
        3.1 Nếu là tháng 1,3,5,7,8,10,12 => 31 ngày
        3.2 Nếu là tháng 2 của năm nhuận => 29 ngày, tháng 2 năm không nhuận => 28 ngày
        3.3 Nếu là tháng 4,6,9,11 => có 30 ngày
       4. Tính ngày tiếp theo
        4.1 Nếu ngày đó là cuối tháng và tháng đó < 12 (day = số ngày trong tháng) thì ngày tiếp theo sẽ là 1 và tháng sẽ +1
        4.2 Nếu ngày đó là cuối tháng và tháng đó là tháng 12 thì => ngày tiếp tho là 1, tháng là 1, năm +1
        4.3 Nếu đó là tháng 2 của năm nhuận và ngày đó là ngày cuối cùng của tháng thì => ngày tiếp theo sẽ là 1 và tháng sẽ +1
        4.4 Nếu đó là tháng 2 của năm không nhuận và ngày đó là ngày cuối cùng của tháng thì => ngày tiếp theo sẽ là 1 và tháng sẽ +1
        4.5 Ngoài các trường hợp trên thì ngày tiếp theo sẽ +1, tháng và năm giữ nguyên
       5. Tính ngày trước đó:
        5.1 Nếu tháng đó không phải tháng 1 và ngày đó là ngày 1 thì:
            5.1.1 nếu tháng đó là 2,4,6,8,9,11 => ngày trước đó sẽ là ngày 31, tháng trước đó = tháng đó -1
            5.1.2 nếu tháng đó là tháng 3 => ngày trước đó là ngày 29 vào năm nhuận, 28 nếu năm không nhuận, tháng =tháng-1
            5.1.3 nếu tháng đó là tháng 5,7,10,12 => ngày trước đó sẽ là 30, tháng = tháng -1
        5.2 Nếu tháng đó là tháng 1 và ngày 1 => ngày trước đó sẽ là 31, tháng = 12 ,năm =năm -1
       5. In ra màn hình ngày, tháng, năm tiếp theo và trước đó

    OUTPUT: ngày, tháng, năm tiếp theo và trước đó


*/
function leapYear(y) {
  return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
}

function numberOfDays(m, y) {
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      return 31;
      break;
    }
    case 2: {
      if (leapYear(y)) {
        return 29;
      }
      return 28;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      return 30;
    }
  }
}
function theNextDay(y, m, d) {
  var ny = y;
  var nm = m;
  var nd = d;
  //nếu ngày tháng năm thỏa mãn điều kiện của nó (nghĩa là tháng năm phải lớn hơn 0,....)
  if (y > 0 && m > 0 && m < 13 && d > 0 && d <= numberOfDays(m, y)) {
    nd = d + 1;
    //nếu tháng nhập vào không phải tháng 12 và số ngày bằng số ngày tối đa của tháng thì ta tăng tháng lên 1 và ngày = 1
    if (m != 12 && d == numberOfDays(m, y)) {
      nd = 1;
      nm = m + 1;
    }
    //nếu tháng nhập vào là tháng 12 và số ngày bằng số ngày bằng 31 thì ta tăng tháng, năm lên 1 và ngày sẽ bằng 1
    else if (m == 12 && d == numberOfDays(m, y)) {
      nd = 1;
      ny = y + 1;
      nm = 1;
    } else if (m == 2) {
      //nếu tháng nhập vào là tháng 2 và năm nhuận thì ngày tối đa sẽ là 29
      if (leapYear(y)) {
        //nếu người dùng nhập vào ngày 29 thì ta tăng tháng lên 1 và ngày bằng 1
        if (d == numberOfDays(m, y)) {
          nd = 1;
          nm = m + 1;
        }
      }
      //ngược lại nếu tháng 2 và không phải năm nhuận thì tháng 2 có 28 ngày
      else {
        //nếu người dùng nhập vào ngày 28 thì tăng tháng lên 1 và ngày bằng 1
        if (d == numberOfDays(m, y)) {
          nd = 1;
          nm = m + 1;
        }
      }
    }
  }
  console.log("\nBÀI 1: The next day is: " + nd + "/" + nm + "/" + ny);
}
theNextDay(2020, 2, 29);

function previousDay(y, m, d) {
  // ta cần khai báo các biến ny, nm, nd là các ngày tháng năm trước đó
  var py = y;
  var pm = m;
  var pd = d;
  //các điều kiện thõa mãn ngày tháng năm
  if (y > 0 && m > 0 && m < 13 && d > 0 && d <= numberOfDays(m, y)) {
    //nếu không rơi vào các trước hợp đặc biệt thì ngày trước đó bằng ngày nhập - 1
    pd = d - 1;
    //nếu tháng nhập vào != 1 và ngày nhập vào = 1 thì có các trường hợp xảy ra như sau:
    if (m != 1 && d == 1) {
      //trường hơp 1: tháng nhập vào là 2,4,6,8,9,11 thì ngày trước đó sẽ là ngày 31 tháng trước đó
      if (m == 2 || m == 4 || m == 6 || m == 8 || m == 9 || m == 11) {
        pd = 31;
        pm = m - 1;
      }
      //trường hơp 2: tháng nhập vào là tháng 3 thì ngày trước đó là ngày 29 nếu năm nhuận và 28 nếu không nhuận
      if (m == 3) {
        if (leapYear(y)) {
          pd = 29;
          pm = m - 1;
        } else {
          pd = 28;
          pm = m - 1;
        }
      }
      //trường hơp 3: tháng nhập vào là tháng 5,7,10,12 thì ngày trước đó sẽ là 30
      if (m == 5 || m == 7 || m == 10 || m == 12) {
        pd = 30;
        pm = m - 1;
      }
    }
    //nếu tháng nhập vào là tháng 1 và ngày 1 thì ngày tháng năm trước đó sẽ là ngày 31 tháng 12 năm trước đó
    else if (m == 1 && d == 1) {
      pd = 31;
      py = y - 1;
      pm = 12;
    }
  }
  console.log("       The day before was: " + pd + "/" + pm + "/" + py);
}
previousDay(2022, 1, 1);

// BÀI 2: Cho biết tháng có bao nhiêu ngày

/*
    Sơ đồ 3 khối
    INPUT: tháng, năm 

     PROCESS:
       1. Lấy input (m,y)
       2. Kiểm tra năm nhuận: year chia hết cho 4 và không chia hết cho 100 HOẶC năm đó chia hết cho 400 => năm nhuận
       3. Kiểm tra số ngày trong tháng đó.
        3.1 Nếu là tháng 1,3,5,7,8,10,12 => 31 ngày
        3.2 Nếu là tháng 2 của năm nhuận => 29 ngày, tháng 2 năm không nhuận => 28 ngày
        3.3 Nếu là tháng 4,6,9,11 => có 30 ngày
       5. In ra màn hình số ngày của tháng đó

    OUTPUT: số ngày của tháng đó

*/
function leapYear2(y) {
  return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
}

function numberOfDays2(m, y) {
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      return 31;
      break;
    }
    case 2: {
      if (leapYear2(y)) {
        return 29;
      }
      return 28;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      return 30;
    }
  }
}
var numberOfDays = numberOfDays2(2, 2020);
console.log("BÀI 2: Số ngày trong tháng là: " + numberOfDays);

//  BÀI 3: Cách đọc số nguên 3 chữ số

/*
    Sơ đồ 3 khối
    INPUT: số nguyên có 3 chữ số 

     PROCESS:
       1. Lấy input (n)
       2. Lấy ra các số hàng đơn vị(n%10), hàng chục ((n/10)%10), hàng trăm(n/100)
       3. Kiểm tra số đó có phải số nguyên có 3 chữ số không n<100 hoặc n>99 => không phải số có 3 chữ số.
        4. Xét trường hợp đọc số hàng trăm tương ứng như 1 sẽ là Một trăm, 2 sẽ là Hai trăm... rồi in ra
        5. Xét trường hợp đọc số hàng chục tương ứng như 1 sẽ là mười, 2 sẽ là 2 mươi... rồi in ra
        6. Xét trường hợp đọc số hàng đơn vị tương ứng như 1 sẽ là một, 2 sẽ là hai...  rồi in ra
        7. Xét trường hợp số hàng chục bằng không thì in ra chữ "lẻ" (số hàng chục chia hết cho 10 và số hàng đơn vị khác 0)
        8. Với những số <0 thì ta thêm từ "Âm" vào trước hàng trăm ( do là số có 3 chữ số);
       5. In ra màn hình cách đọc của số đó

    OUTPUT: cách đọc của số đó

*/
var n = -254;

var a = n % 10;
//b là chục
var b = Math.floor(n / 10) % 10;
//c là hàng trăm
var c = Math.floor(n / 100);
  if (n > 0) {
    console.log("BÀI 3: Số " + n + " có cách đọc là: ");
    switch (c) {
      case 1:
        console.log("                               Một trăm ");
        break;
      case 2:
        console.log("                               Hai trăm ");
        break;
      case 3:
        console.log("                               Ba trăm ");
        break;
      case 4:
        console.log("                               Bốn trăm ");
        break;
      case 5:
        console.log("                               Năm trăm ");
        break;
      case 6:
        console.log("                               Sáu trăm ");
        break;
      case 7:
        console.log("                               Bảy trăm ");
        break;
      case 8:
        console.log("                               Tám trăm ");
        break;
      case 9:
        console.log("                               Chín trăm ");
        break;
    }
    // in ra chử "lẻ" nếu hàng chục ằ;ng không
    if (b % 10 == 0 && a != 0) {
      console.log("lẻ ");
    }
    //in ra hàng chục
    switch (b) {
      case 1:
        console.log("mười ");
        break;
      case 2:
        console.log("                               hai mươi ");
        break;
      case 3:
        console.log("                               ba mươi ");
        break;
      case 4:
        console.log("                               bốn mươi ");
        break;
      case 5:
        console.log("                               năm mươi ");
        break;
      case 6:
        console.log("                               sáu mươi ");
        break;
      case 7:
        console.log("                               bảy mươi ");
        break;
      case 8:
        console.log("                               tám mươi ");
        break;
      case 9:
        console.log("                               chín mươi ");
        break;
    }
    //in ra hàn đơn vị
    switch (a) {
      case 1:
        console.log("                               một ");
        break;
      case 2:
        console.log("                               hai ");
        break;
      case 3:
        console.log("                               ba ");
        break;
      case 4:
        console.log("                               bốn ");
        break;
      case 5:
        console.log("                               lăm ");
        break;
      case 6:
        console.log("                               sáu ");
        break;
      case 7:
        console.log("                               bảy ");
        break;
      case 8:
        console.log("                               tám ");
        break;
      case 9:
        console.log("                               chín ");
        break;
    }
  }
  else{
    a = -n % 10;
    b = Math.floor(-n / 10) % 10;
    c = Math.floor(-n / 100);
    console.log("BÀI 3: Số "+ n + " có cách đọc là:");
    switch(c){
      case 1: console.log("                              Âm Một trăm ");break;
      case 2: console.log("                              Âm Hai trăm ");break;
      case 3: console.log("                              Âm Ba trăm ");break;
      case 4: console.log("                              Âm Bốn trăm ");break;
      case 5: console.log("                              Âm Năm trăm ");break;
      case 6: console.log("                              Âm Sáu trăm ");break;
      case 7: console.log("                              Âm Bảy trăm ");break;
      case 8: console.log("                              Âm Tám trăm ");break;
      case 9: console.log("                              Âm Chín trăm ");break;
    };
    // in ra chử "lẻ" nếu hàng chục bằng không
    if(b % 10 == 0 && a != 0){
      console.log("lẻ ");
    }
    //in ra hàng chục
    switch(b){
      case 1: console.log("mười ");break;
      case 2: console.log("                               hai mươi ");break;
      case 3: console.log("                               ba mươi ");break;
      case 4: console.log("                               bốn mươi ");break;
      case 5: console.log("                               năm mươi ");break;
      case 6: console.log("                               sáu mươi ");break;
      case 7: console.log("                               bảy mươi ");break;
      case 8: console.log("                               tám mươi ");break;
      case 9: console.log("                               chín mươi ");break;
    }
    //in ra hàn đơn vị
    switch(a){
      case 1: console.log("                               một ");break;
      case 2: console.log("                               hai ");break;
      case 3: console.log("                               ba ");break;
      case 4: console.log("                               bốn ");break;
      case 5: console.log("                               lăm ");break;
      case 6: console.log("                               sáu ");break;
      case 7: console.log("                               bảy ");break;
      case 8: console.log("                               tám ");break;
      case 9: console.log("                               chín ");break;
    }
  }

// Bài 4: Tọa độ.

/*
    Sơ đồ 3 khối
    INPUT: không 

     PROCESS:
       1. Lấy input
       2. Tính quãng đường từ nhà của sinh viên tới trường = Math.sqrt(Math.pow((hoành độ của trường - hoành độ của sinh viên),2) + Math.pow((tung độ của trường - tung độ của sinh viên),2))
       3. Kiểm tra số đó có phải số nguyên có 3 chữ số không n<100 hoặc n>99 => không phải số có 3 chữ số.
       4. So sánh khoảng cách giữa các sinh viên tới trường. Khai báo cho sinh viên đầu tiên có khoảng cách lớn nhất, nếu sinh viên thứ 2 lớn hơn max thì gán max = sinh viên thứ 2, nếu sinh viên thứ 3 > max thì gán max= sinh viên thứ 3 => max
       5. Kiểm tra giá trị max tương ứng với khoảng cách nào để suy ra sinh viên có khoảng cách xa nhất
       5. In ra màn hình tên sinh viên có khoảng cách xa nhất

    OUTPUT: tên sinh viên có khoảng cách xa nhất

*/

var name1 = "TIẾN";
var name2 = "NGA";
var name3 = "PHÁT";

var x1=8;
var y1=9;
var x2=2;
var y2=3;
var x3=1;
var y3=1;

var x = 5;
var y= 5;

var distanceTien =Math.sqrt(Math.pow((5-8),2) + Math.pow((5-9),2));
var distanceNga =Math.sqrt(Math.pow((5-2),2) + Math.pow((5-3),2));
var distancePhat =Math.sqrt(Math.pow((5-1),2) + Math.pow((5-1),2));

console.log("Bài 4: \n Sinh viên",name1,"có khoảng cách tới trường là ",distanceTien +"\n Sinh viên",name2,"có khoảng cách tới trường là ",distanceNga +"\n Sinh viên",name3,"có khoảng cách tới trường là ",distancePhat)

var max = distanceTien;

  if(distanceNga>max)
  {
    max=distanceNga;
  }
  if(distancePhat>max)
  {
      max=distancePhat;
  }
  switch (max) {
    case distanceTien:
      console.log(" Sinh vien xa trường nhất là: " + name1 + " với khoảng cách là: " + max);
      break;
    case distanceNga:
      console.log(" Sinh vien xa trường nhất là: " + name2 + " với khoảng cách là: " + max);
      break;
    case distancePhat:
      console.log(" Sinh vien xa trường nhất là: " + name3 + " với khoảng cách là: " + max);
      break;
  
    default:
      break;
  }


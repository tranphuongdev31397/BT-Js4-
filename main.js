/*Bài 1: Nhập vào 3 số nguyên , viết chương trình sắp xếp các số thoe thứ tự tăng dần
B1 : Input : Nhập vào ngày tháng năm tìm ngày tiếp theo và ngày trước đó
B2: Handle:
Ngày tháng năm phải thỏa các điều kiên.
Tháng < 12 và > 0 
ngày > 0
1. Tính ngày tiếp theo
Các case đặc biệt: 
Ngày cuối của mỗi tháng 30 hoặc 31 (dùng switch case)
ngayHienTai = 1;
thangHienTai++
Ngày 31/12
ngayHienTai = 1
thangHienTai = 1
namHienTai++
-Case tháng 2
ngayHienTai % 4 || ngayHienTai % 400 -> Năm Nhuận -> 29 ngày
ngày 29 :
ngayHienTai = 1
thangHienTai ++
<29 : ngayHienTai++
Else -> 28 ngày :
ngày 28 : ngayHienTai = 1 
thangHienTai++
<28: ngayHienTai++
2. Tính ngày trước đó
Ngày  1/1 :
ngayHienTai=31
thangHienTai = 12
namHienTai--
ngày 1 các tháng có 30 và 31 ngày :tương tự như trên
-Case tháng 2{
    Năm nhuân 29 ngày ngày trước là 28
    Năm k nhuận 28 ngày ngày trước là 27
}
B3: In ra kết quả tăng dần là : a, b, c


*/



var ngayThangNam = document.getElementById('ngayThangNam')
var btnB1 = document.getElementById('btnB1');
var ketQuaB1 = document.getElementById('ketQuaB1')
var btnB1_2 = document.getElementById('btnB1-2');
var ketQuaB1_2 = document.getElementById('ketQuaB1-2')
var ngayTruocDo = document.getElementById('ngayTruocDo')

btnB1.onclick = function () {
    ketQuaB1.style.display = 'block';
    var ngayHienTai = document.getElementById('ngayHienTai').value;
    var thangHienTai = document.getElementById('thangHienTai').value;
    var namHienTai = document.getElementById('namHienTai').value;
    ngayHienTai = Number(ngayHienTai)
    thangHienTai = Number(thangHienTai)
    namHienTai = Number(namHienTai)

    if (thangHienTai < 1 || thangHienTai > 12 || ngayHienTai == 0) {
        alert('Vui lòng nhập đúng giá trị')
    } else {
        //Tinh ngay tiep theo của tháng có 31 ngày
        switch (thangHienTai) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:

                if (thangHienTai == 12 && ngayHienTai == 31) {
                    ngayHienTai = 1
                    thangHienTai = 1
                    namHienTai++
                } else if (ngayHienTai === 31) {
                    ngayHienTai = 1
                    thangHienTai++
                } else if (ngayHienTai > 31) {
                    alert('Tháng này chỉ có 31 ngày')
                } else if (ngayHienTai < 31) {
                    ngayHienTai++
                } ngayThangNam.innerHTML = 'Ngày tiếp theo là: ' + ngayHienTai + '/' + thangHienTai + '/' + namHienTai;
                return
        }
        //Tính ngày tiếp theo của tháng có 30 ngày
        switch (thangHienTai) {
            case 4:
            case 6:
            case 9:
            case 11:
                if (ngayHienTai == 30) {
                    ngayHienTai = 1;
                    thangHienTai++;
                } else if (ngayHienTai > 30) {
                    alert('Tháng này chỉ có  30 ngày')
                } else if (ngayHienTai < 30) {
                    ngayHienTai++
                } ngayThangNam.innerHTML = 'Ngày tiếp theo là: ' + ngayHienTai + '/' + thangHienTai + '/' + namHienTai;
                return
        }
        //Tính ngày tiếp theo của tháng 2
        switch (thangHienTai) {
            case 2:
                if (namHienTai % 4 == 0 || namHienTai % 400 == 0) {
                    ngayHienTai <= 29
                    if (ngayHienTai > 29) {
                        alert('Tháng 2 năm nhuận chỉ có 29 ngày')
                    } else if (ngayHienTai == 29) {
                        ngayHienTai = 1
                        thangHienTai++;
                    } else if (ngayHienTai < 29) {
                        ngayHienTai++
                    } ngayThangNam.innerHTML = 'Ngày tiếp theo là: ' + ngayHienTai + '/' + thangHienTai + '/' + namHienTai;

                } else {
                    if (ngayHienTai > 28) {
                        alert('Tháng 2 năm không nhuận chỉ có 28 ngày')
                    } else if (ngayHienTai == 28) {
                        ngayHienTai = 1
                        thangHienTai++;
                    } else if (ngayHienTai < 28) {
                        ngayHienTai++
                    } ngayThangNam.innerHTML = 'Ngày tiếp theo là: ' + ngayHienTai + '/' + thangHienTai + '/' + namHienTai;

                }
                return
        }

    }
}
btnB1_2.onclick = function () {
    ketQuaB1_2.style.display = 'block';
    var ngayHienTai = document.getElementById('ngayHienTai').value;
    var thangHienTai = document.getElementById('thangHienTai').value;
    var namHienTai = document.getElementById('namHienTai').value;
    ngayHienTai = Number(ngayHienTai)
    thangHienTai = Number(thangHienTai)
    namHienTai = Number(namHienTai)
    if (thangHienTai < 1 || thangHienTai > 12 || ngayHienTai == 0) {
        alert('Vui lòng nhập đúng giá trị')
    } else {
        //Tinh ngay trước đó của tháng có 31 ngày
        switch (thangHienTai) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:

                if (thangHienTai == 1 && ngayHienTai == 1) {
                    ngayHienTai = 31
                    thangHienTai = 12
                    namHienTai--
                } else if (ngayHienTai === 1) {
                    ngayHienTai = 30
                    thangHienTai--
                } else if (ngayHienTai > 31) {
                    alert('Tháng này chỉ có 31 ngày')
                } else if (ngayHienTai <= 31) {
                    ngayHienTai--
                } ngayTruocDo.innerHTML = 'Ngày trước đó là: ' + ngayHienTai + '/' + thangHienTai + '/' + namHienTai;
                return
        }
        //Tính ngày tiếp theo của tháng có 30 ngày
        switch (thangHienTai) {
            case 4:
            case 6:
            case 9:
            case 11:
                if (ngayHienTai == 1) {
                    ngayHienTai = 31;
                    thangHienTai--;
                } else if (ngayHienTai > 30) {
                    alert('Tháng này chỉ có  30 ngày')
                } else if (ngayHienTai <= 30) {
                    ngayHienTai--
                } ngayTruocDo.innerHTML = 'Ngày trước đó là: ' + ngayHienTai + '/' + thangHienTai + '/' + namHienTai;
                return
        }
        //Tính ngày tiếp theo của tháng 2
        switch (thangHienTai) {
            case 2:
                if (namHienTai % 4 == 0 || namHienTai % 400 == 0) {
                    if (ngayHienTai > 29) {
                        alert('Tháng 2 năm nhuận chỉ có 29 ngày')
                    } else if (ngayHienTai == 1) {
                        ngayHienTai = 31
                        thangHienTai--;
                    } else if (ngayHienTai <= 29) {
                        ngayHienTai--
                    } ngayTruocDo.innerHTML = 'Ngày trước đó là: ' + ngayHienTai + '/' + thangHienTai + '/' + namHienTai;

                } else {
                    if (ngayHienTai > 28) {
                        alert('Tháng 2 năm không nhuận chỉ có 28 ngày')
                    } else if (ngayHienTai == 1) {
                        ngayHienTai = 31
                        thangHienTai--;
                    } else if (ngayHienTai <= 28) {
                        ngayHienTai--
                    } ngayTruocDo.innerHTML = 'Ngày trước đó là: ' + ngayHienTai + '/' + thangHienTai + '/' + namHienTai;

                }
                return
        }
    }
}
/* Bài 2: Nhập vào tháng năm cho biết tháng dó có bn ngày
B1 : Input 
Nhập vào tháng năm
B2 : Handle
Dom tới các id BtnB2, day , ketQuaB2
Tạo biến _ngay
Click vào btn2 function () {
    Dom tới các id ipNgay, ipNam lấy các value
    Kiểm tra tháng < 1 hoặc tháng >12 thì báo nhập sai
    else{
        switch case 1 3 5 7 8 10 12 => 31 ngày
        sưitch case 4 6 9 11 => 30 ngày
        tháng 2 if {
            Năm nhuận = ipNam % 4 || ipNam % 400 => 29ngày
            => 28 ngày
        }
    }
}
B3 : In ra màn hình kết quả
*/
var btnB2 = document.getElementById('btnB2')
var day = document.getElementById('day')
var ketquaB2 = document.getElementById('ketQuaB2')
var _ngay
btnB2.onclick = function () {
    ketquaB2.style.display = 'block'
    var ipThang = document.getElementById('ipThang').value;
    var ipNam = document.getElementById('ipNam').value;
    ipThang = Number(ipThang)
    ipNam = Number(ipNam)
    if (ipThang < 1 || ipThang > 12) {
        alert('Vui lòng nhập đúng giá trị')
    } else {
        switch (ipThang) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                _ngay = 31;
        }
        switch (ipThang) {
            case 4:
            case 6:
            case 9:
            case 11:
                _ngay = 30
        }
        if (ipThang == 2) {
            if (ipNam % 4 == 0 || ipNam % 400 == 0) {
                _ngay = 29
            } else {
                _ngay = 28
            }
        }
        day.innerHTML = 'Tháng này có: ' + _ngay + ' ngày'
    }

}
/* Bài 3 : Nhập vào số nguyên có 3 chữ số   
B1 : Input : Nhập vào 3 số nguyên
B2 : Handle
Khai báo các biến docSoNguyen, btnB3, ketQuaB3,
Lệnh onclick cho btnB3 và Dom tới giá trị soNguyen
Khai báo biến soHangTram, soHangChuc, soHangDv
Kiểm tra người dùng nhập vào có phải số nguyên không => if parseInt
Nếu là số nguyên kiểm tra số có phải 3 chữ số không 
>100 && <1000 || <-100 && >-1000
Nếu đúng thì sử dụng hàm để lấy hàng trăm chục đơn vị
soHangTram = Math.floor(Math.abs(soNguyen/100 ))(dùng floor kẹp ngoài abs để lấy chính xác phần nguyên)
soHangChuc = (soNguyen%100)/10 (nhớ dùng abs và floor)
soHangDv = (soNguyen%100) % 10
Dùng case cho từng soHangTram, soHangChuc, soHangDv để in ra cách đọc
 
B3 : In ra màn hình cách đọc
*/
var btnB3 = document.getElementById('btnB3')
var docSoNguyen = document.getElementById('docSoNguyen')
var ketquaB3 = document.getElementById('ketQuaB3')

btnB3.onclick = function () {
    ketquaB3.style.display = 'block'
    var soNguyen = Number(document.getElementById('soNguyen').value);
    var soHangTram
    var soHangChuc
    var soHangDv
    if (soNguyen !== parseInt(soNguyen)) {
        alert('Hãy nhập số nguyên')
    } else if (soNguyen < 100 && soNguyen >= 0 || soNguyen >= 1000) {
        alert('Vui lòng điền số từ 100  trở lên và nhỏ hơn 1000')
    } else if (soNguyen > -100 && soNguyen < 0 || soNguyen <= -1000) {
        alert('Vui lòng điền số từ -100 trở xuống và lớn hơn -1000')
    }
    else {
        soHangTram = Math.floor(Math.abs(soNguyen / 100));
        soHangChuc = Math.floor(Math.abs((soNguyen % 100) / 10))
        soHangDv = Math.abs(Math.floor((soNguyen % 100) % 10))
        switch (soHangTram) {
            case 1:
                soHangTram = 'Một'
                break
            case 2:
                soHangTram = 'Hai'
                break
            case 3:
                soHangTram = 'Ba'
                break
            case 4:
                soHangTram = 'Bốn'
                break
            case 5:
                soHangTram = 'Năm'
                break
            case 6:
                soHangTram = 'Sáu'
                break
            case 7:
                soHangTram = 'Bảy'
                break
            case 8:
                soHangTram = 'Tám'
                break
            case 9:
                soHangTram = 'Chín'
                break
        }
        switch (soHangChuc) {
            case 0:
                if (soHangDv === 0 && soHangChuc === 0) {
                    soHangChuc = ' '
                } else {
                    soHangChuc = 'Lẻ'
                } break
            case 1:
                soHangChuc = 'Mười'
                break
            case 2:
                soHangChuc = 'Hai mươi '
                break
            case 3:
                soHangChuc = 'Ba mươi '
                break
            case 4:
                soHangChuc = 'Bốn mươi'
                break
            case 5:
                soHangChuc = 'Năm mươi'
                break
            case 6:
                soHangChuc = 'Sáu mươi'
                break
            case 7:
                soHangChuc = 'Bảy mươi'
                break
            case 8:
                soHangChuc = 'Tám mươi'
                break
            case 9:
                soHangChuc = 'Chín mươi'
                break
        }
        switch (soHangDv) {
            case 0:
                soHangDv = ' '
                break
            case 1:
                soHangDv = 'Mốt'
                break
            case 2:
                soHangDv = 'Hai'
                break
            case 3:
                soHangDv = 'Ba'
                break
            case 4:
                soHangDv = 'Bốn'
                break
            case 5:
                soHangDv = 'Năm'
                break
            case 6:
                soHangDv = 'Sáu'
                break
            case 7:
                soHangDv = 'Bảy'
                break
            case 8:
                soHangDv = 'Tám'
                break
            case 9:
                soHangDv = 'Chín'
                break
        }
    } if (soNguyen > 0) {
        docSoNguyen.innerHTML = soHangTram + ' trăm ' + soHangChuc + ' ' + soHangDv
    } else if (soNguyen < 0) {
        docSoNguyen.innerHTML = 'Âm ' + soHangTram + ' trăm ' + soHangChuc + ' ' + soHangDv
    }

}

/* Bài 4 : Cho biết tọa độ trường là O (0,0) nghĩa là Ox = 0 ; Oy = 0, tọa độ của A (xA,yA) ; B (xB,yB) ; C (xC ; yC).
B1 : Input : Ox = 0 ; Oy = 0, tọa độ A B C
B2 : Handle
Khai báo các biến Oxa , OyA, OxB, OyB , OxC ,OyC , OzA, OzB, OzC
Tìm Oz bằng cthức Pitago
Math.max để tìm Oz max
Khai báo biến nguoiXaNhaNhat 
Sử dụng switch case (Max)
case OzA: 
tenNguoiXaNhat = 'A'
innerHtml ... tenNguoiXaNhat
tương tự OzB OzC
B3 : In ra kết quả cần
*/
var btnB4 = document.getElementById('btnB4')
var nhaXaNhat = document.getElementById('nhaXaNhat')
var ketquaB4 = document.getElementById('ketQuaB4')
var OzA, OzB, OzC = 0
var Max
var tenNguoiXaNhat
btnB4.onclick = function () {
    ketQuaB4.style.display = 'block'
    var OxA = document.getElementById('OxA').value
    var OyA = document.getElementById('OyA').value
    var OxB = document.getElementById('OxB').value
    var OyB = document.getElementById('OyB').value
    var OxC = document.getElementById('OxC').value
    var OyC = document.getElementById('OyC').value
    OzA = Math.sqrt(OxA * OxA + OyA * OyA)
    OzB = Math.sqrt(OxB * OxB + OyB * OyB)
    OzC = Math.sqrt(OxC * OxC + OyC * OyB)
    Max = Math.max(OzA, OzB, OzC)
    if (OzA !== Number(OzA) || OzB !== Number(OzB) || OzC !== Number(OzC)) {
        alert('Hãy điền vào số')
    }
    switch (Max) {
        case OzA:
            tenNguoiXaNhat = 'A'
            nhaXaNhat.innerHTML = 'Người xa trường nhất là: ' + tenNguoiXaNhat;
            break
        case OzB:
            tenNguoiXaNhat = 'B'
            nhaXaNhat.innerHTML = 'Người xa trường nhất là: ' + tenNguoiXaNhat;
            break
        case OzC:
            tenNguoiXaNhat = 'C'
            nhaXaNhat.innerHTML = 'Người xa trường nhất là: ' + tenNguoiXaNhat;
            break
    }
}

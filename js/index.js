function dang_nhap() {
    window.location.href = "/html/login.html";
}
function dang_ki() {
    window.location.href = "/html/dang_ki.html";
}
function logo() {
    window.location.href = "index.html";
}
function youtube() {
    window.location.href = "https://www.youtube.com";
}
function facebook() {
    window.location.href = "https://www.facebook.com";
}
function instagram() {
    window.location.href = "https://www.instagram.com";
}
function thong_tin_hang() {
    window.location.href = "/html/thong_tin_hang.html";
}
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Chuyển đổi nội dung JSON thành đối tượng JavaScript
        const values = data.thong_tin_hang;
        var count = values.length;
        console.log(count)
        for (var i = 0; i < 10; i++) {
            const a = i + 1;
            const hang = $("<div class='khung'data-product-id='" + a + "'></div>");
            hang.append("<img class='anh_hang' src='/img/" + values[i].anh + "'onclick='thong_tin_hang()'>");
            hang.append("<div class='ten_hang'>" + values[i].ten + "</div>");
            hang.append("<div class='gia_hang'>" + values[i].gia+'.đ' + "</div>");
            $(".san_pham").append(hang);
        }
    })
    .catch(error => console.error(error));
function search() {
    const searchInput = document.getElementById("searchInput");
    const searchValue = searchInput.value;

    // Đọc file JSON
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Tìm kiếm sản phẩm theo tên
            const products = data.thong_tin_hang;
            const searchResults = products.filter(product => product.ten.includes(searchValue));

            // Hiển thị kết quả tìm kiếm
            const sanPham = document.querySelector(".san_pham");
            sanPham.innerHTML = "";
            searchResults.forEach(product => {
                const khung = document.createElement("div");
                khung.classList.add("khung");

                const anhHang = document.createElement("img");
                anhHang.classList.add("anh_hang");
                anhHang.src = "/img/" + product.anh;

                const tenHang = document.createElement("div");
                tenHang.classList.add("ten_hang");
                tenHang.textContent = product.ten;

                const giaHang = document.createElement("div");
                giaHang.classList.add("gia_hang");
                giaHang.textContent = product.gia+'.đ';

                khung.appendChild(anhHang);
                khung.appendChild(tenHang);
                khung.appendChild(giaHang);
                sanPham.appendChild(khung);
                console.log(product);
            });
        })
        .catch(error => console.error(error));
}
function gio_hang() {
  const cartIcon = document.getElementById('cart-icon');

  // Thêm sự kiện click vào biểu tượng giỏ hàng
  cartIcon.addEventListener('click', () => {
    // Chuyển hướng người dùng đến trang mới
    window.location.href = 'gio_hang.html';
  });
}

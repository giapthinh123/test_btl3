function dang_nhap() {
    window.location.href = "login.html";
}
function dang_ki() {
    window.location.href = "dang_ki.html";
}
function logo() {
    window.location.href = "index.html";
}
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Chuyển đổi nội dung JSON thành đối tượng JavaScript
        const values = data.thong_tin_hang;
        var count = values.length;
        for (var i = 10; i < 20; i++) {
            const a = i + 1;
            const hang = $("<div class='khung'data-product-id='" + a + "'></div>");
            hang.append("<img class='anh_hang' src='/img/" + values[i].anh + "'>");
            hang.append("<div class='ten_hang'>" + values[i].ten + "</div>");
            hang.append("<div class='gia_hang'>" + values[i].gia + "</div>");
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
                giaHang.textContent = product.gia;

                khung.appendChild(anhHang);
                khung.appendChild(tenHang);
                khung.appendChild(giaHang);
                sanPham.appendChild(khung);
                console.log(product);
            });
        })
        .catch(error => console.error(error));
}
var xyz_ = 0,
    colors = ["#ff6651", "#42a5f5", "#66bb6a", "#ab47bc", "#ffa726", "#ec407a", "#26c6da", "#78909c", "#ffca28", "#5c6bc0", "#8d6e63", "#26a69a"];
jQuery(document).ready(function (a) {
    a("body").click(function (o) {
        var t = new Array("Sức khỏe 💕", "Nhà giàu ❤️", "Đẹp trai 💛", "Lắm tiền 💚", "Soái ca 💙", "Địa vị 💜", "Xinh đẹp 🖤", "Ga lăng 💖", "Nam thần 💝", "Tài tử 💞", "Chủ tịch 💓", "Khiêm tốn 💋"),
            c = a("<span/>").text(t[xyz_]),
            n = colors[Math.floor(Math.random() * colors.length)];
        xyz_ = (xyz_ + 1) % t.length;
        var e = o.pageX,
            r = o.pageY,
            i = Math.floor(9990001 * Math.random()) + 9999,
            f = r - 20,
            h = e,
            l = n;
        c.css({
            "z-index": i,
            top: f,
            left: h,
            position: "absolute",
            "font-weight": "bold",
            color: l
        });
        a("body").append(c);
        c.animate({
            top: r - 180,
            opacity: 0
        }, 1500, function () {
            c.remove();
        });
    });
});
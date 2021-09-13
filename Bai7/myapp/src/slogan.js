import React from "react";
import "./app.css"

function Slogan() {
    return (
        <div className="slogan-container">
            <div className="slogan1"></div>
            <div className="right-slogan">
                <div className="slogan2"></div>
                <div className="slogan3"></div>
            </div>
        </div>
    )
}

function Service() {
    return (
        <div className="container-service">
            <div className="service service1">
                <img src="https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi"></img>
                <p>Tech Zone - Siêu thị điện tử</p>
            </div>
            <div className="service service2">
                <img src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi"></img>
                <p>Gì cũng rẻ - Từ 1K</p>
            </div>
            <div className="service service3">
                <img src="https://cf.shopee.vn/file/9da9a3acb5520d601f86a90434f455a5_xhdpi"></img>
                <p>Hoàn xu 20% - Đơn từ 0Đ</p>
            </div>
            <div className="service service4">
                <img src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi"></img>
                <p>Nạp thẻ, Hóa đơn & E-...</p>
            </div>
            <div className="service service5">
                <img src="https://cf.shopee.vn/file/024dcce0aac7ce7f0067ce324eb7ab1e_xhdpi"></img>
                <p>Shopee Số Gì Đây</p>
            </div>
            <div className="service service6">
                <img src="https://cf.shopee.vn/file/6a574d8298eed44c1062a5f1408e4c2b_xhdpi"></img>
                <p>Freeship Xtra 70K Mỗi Ngày</p>
            </div>
            <div className="service service7">
                <img src="https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi"></img>
                <p>Hàng hiệu -50%</p>
            </div>
            <div className="service service8">
                <img src="https://cf.shopee.vn/file/29961f92098bc9153b88332110a91c87_xhdpi"></img>
                <p>Hàng Quốc Tế - Deal Đồng Giá</p>
            </div>
            <div className="service service9">
                <img src="https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi"></img>
                <p>Shopee Premium</p>
            </div>
            <div className="service service10">
                <img src="https://cf.shopee.vn/file/53d059b1f2592c05b8df8ae835950a2b_xhdpi"></img>
                <p>Yên tâm mua hàng</p>
            </div>
        </div>
    )
}

function Advertisiment() {
    return (
        <div className="ad">
            <img src='https://cf.shopee.vn/file/e99560eba58aacfaaa821bd029e43c52_xxhdpi' width="1200"></img>
        </div>
    )
}

function InternationnalProduct() {
    return (
        <div className="inter-product">
            <img src="https://cf.shopee.vn/file/10a2c4dfe23f19cf0749269ed35722d1" height="100px"></img>
            <div className="list-product">
                <div className="best-selling-product">
                    <div className="title">
                        <h2>SẢN PHẨM BÁN CHẠY</h2>
                        <div className="see-more">
                            <p>Xem thêm
                                <span className="material-icons">
                                    chevron_right
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="infor-product">
                            <img src="https://cf.shopee.vn/file/d46485cd996fb521992a1441188ea368_tn"></img>
                            <p>đ69.900</p>
                        </div>
                        <div className="infor-product">
                            <img src="https://cf.shopee.vn/file/d46485cd996fb521992a1441188ea368_tn"></img>
                            <p>đ69.900</p>
                        </div>
                        <div className="infor-product">
                            <img src="https://cf.shopee.vn/file/d46485cd996fb521992a1441188ea368_tn"></img>
                            <p>đ69.900</p>
                        </div>
                    </div>
                </div>
                <div className="best-selling-product">
                    <div className="title">
                        <h2>THƯƠNG HIỆU NỔI BẬT</h2>
                        <div className="see-more">
                            <p>Xem thêm
                                <span class="material-icons">
                                    chevron_right
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="infor-product">
                            <img src="https://cf.shopee.vn/file/d46485cd996fb521992a1441188ea368_tn"></img>
                            <p>đ69.900</p>
                        </div>
                        <div className="infor-product">
                            <img src="https://cf.shopee.vn/file/d46485cd996fb521992a1441188ea368_tn"></img>
                            <p>đ69.900</p>
                        </div>
                        <div className="infor-product">
                            <img src="https://cf.shopee.vn/file/d46485cd996fb521992a1441188ea368_tn"></img>
                            <p>đ69.900</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://cf.shopee.vn/file/16b71e75de5b991a57211afe10762378" height="50" width="100%"></img>
        </div>
    )
}

function Category() {
    return (
        <div className="category">
            <div className="title">
                <h1>DANH MỤC</h1>
            </div>
            <div className="product-container">
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn"></img>
                    <p>Điện thoại & Phụ Kiện</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn"></img>
                    <p>Thiết Bị Điện Tử</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn"></img>
                    <p>Máy Tính & Laptop</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn"></img>
                    <p>Máy ảnh & Máy Quay Phim</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn"></img>
                    <p>Đồng Hồ</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn"></img>
                    <p>Giày Dép Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn"></img>
                    <p>Thiết Bị Điện Gia Dụng</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn"></img>
                    <p>Thể Thao & Du Lịch</p>
                </div>
                <div className="product">
                    <img src="	https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn"></img>
                    <p>Ô tô & Xe Máy & Xe Đạp</p>
                </div>
            </div>
            <div className="product-container">
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                <div className="product">
                    <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"></img>
                    <p>Thời Trang Nam</p>
                </div>
                
            </div>
        </div>
    )
}

function Content() {
    return (
        <div>
            <Slogan></Slogan>
            <Service></Service>
            <Advertisiment></Advertisiment>
            <InternationnalProduct></InternationnalProduct>
            <Category></Category>
        </div>
    )
}

export default Content
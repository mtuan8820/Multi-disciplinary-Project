<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="view\style\base.css">
    <link rel="stylesheet" href="view\style\style.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <title>Homepage</title>
</head>
<body>
    <div class="container-fluid row mw-100 nopadding">
        <!-- begin: admin login -->
        <div class="col-3 vh-100 nopadding d-flex flex-column align-items-center sticky-top">
            <!-- begin: logo -->
            <br>

            <img src="assets\img\project-logo.png" alt="" class="project-logo" 
            style="width: 100px; height: 100px;"><br>   
            <!-- end:logo -->
            <h6>Đăng nhập với tư cách quản trị viên</h6><br>
            <form action="/login" class="d-flex flex-column" method='post'>

                <input type="text" placeholder="ID" name="id" class="margin-bot-20">
                <p class='text-danger'>
                    <?php
                        if (isset($loginErr)) {
                            switch ($loginErr) {
                                case 'invalid id':
                                    echo 'ID chưa được đăng ký!';
                                    break;
                                case 'not manager':
                                    echo "ID tài khoản không phải của quản trị viên";
                                    break;
                                default:
                                    break;
                            }
                        }
                    ?>
                </p>
                <input type="password" placeholder="Password" name="password" class="margin-bot-20">
                <p class='text-danger'>
                    <?php
                        if (isset($loginErr)) {
                            switch ($loginErr) {
                                case 'wrong password':
                                    echo 'Mật khẩu không chính xác!';
                                    break;
                                default:
                                    break;
                            }
                        }
                    ?>
                </p>
                <input type="submit" class="btn btn-sm btn-outline-success">
            </form>
        </div>
        <!-- end: admin login -->

        <!-- begin: website introduction -->
        <div class="col-9 gradient-primary-color-bg mh-100 nopadding ">
            <!-- begin:navbar -->
            <nav class="navbar navbar-light gradient-primary-color-bg d-flex justify-content-between margin-bot-20 sticky-top" >
                    <!-- begin: project name -->
                    <a class="navbar-brand text-white margin-left-20" href="#">Hệ thống quản lí <br> các trạm cho thuê xe đạp thông minh</a>
                    <!-- end: project name -->

                    <!-- begin: project introduction link -->
                    <div class="navbar-nav d-flex flex-row me-5">
                        <a class="nav-link text-white margin-left-20" href="#">Giới thiệu</a>
                        <a class="nav-link text-white margin-left-20" href="#discount">Khuyến mãi</a>
                        <a class="nav-link text-white margin-left-20" href="#working-hour">Thông tin hoạt động</a>
                        <a class="nav-link text-white margin-left-20" href="#guide">Hướng dẫn</a>
                    </div>
                    <!-- end: project introduction link -->
            </nav>
            <!-- end:navbar -->

            <!-- begin: introduction -->
            <div class="card margin-bot-20" style="width: 90%; margin-left:auto; margin-right:auto; min-height: 500px;" >
                <div class="card-body" id="introduction">
                    <h2 class="card-title">Giới thiệu</h2>
                    <p class="card-text">
                        Sau đại dịch Covid, mọi thứ dần trở về quỹ đạo,
                        dẫn đến các nhu cầu về đi lại, giải trí,
                        thể dục gia tăng.Hoạt động du lịch được khôi phục,
                        nhiều mô hình du lịch xanh được triển khai cụ thể như mô hình xe đạp công cộng tại nhiều thành phố(
                            HCM, Huế, Đà Nẵng, ...) Nhận thấy các mô hình hiện tại còn nhiều điểm thiếu sót trong việc quản lý,
                        tổ chức nên nhóm em đề xuất dự án“ Hệ thống quản lí các trạm cho thuê xe đạp thông minh” với mục đích xây dựng và kiểm soát hệ thống cho thuê xe đạp trên địa bàn thành phố Hồ Chí Minh
                        .<br>
                        Hệ thống này sẽ giúp cắt giảm số nhân công cần thiết tại mỗi điểm cho thuê xe,
                        em lại cho khách hàng những trải nghiệm tốt hơn
                        .Cụ thể, trong dự án này, chúng em sẽ hiện thực thiết bị IoT gắn trên xe đạp có nhiệm vụ khóa xe,
                        kết nối với sever, đo các thông số và một app điều khiển thiết bị này,
                        giúp người dùng thuê xe đạp trực tuyến trên ứng dụng mà không cần phải có sự trợ giúp của nhân viên quản lý,
                        khóa xe đạp sẽ được mở bằng mã ID.
                    </p>
                    
                </div>
            </div>
            <!-- end: introduction -->

            <!-- begin: discount -->
            <div class="card margin-bot-20" style="width: 90%; margin-left:auto; margin-right:auto; min-height: 500px;" >
                <div class="card-body" id="discount">
                  
                  <h2>CHƯƠNG TRÌNH GIẢM GIÁ ĐẶC BIỆT</h2>
                  <h2>Từ ngày 25/12/2022 - 15/01/2023</h2>
                  <p class="card-text margin-left-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                        <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
                        <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
                    </svg> Giảm giá thuê 15% tất cả các dòng xe đạp trẻ em từ 20 inch trở xuống <br>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                        <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
                        <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
                    </svg> Giảm giá thuê 25% tất cả các dòng xe người lớn
                  </p>
                  
                </div>
            </div>
            <!-- end: discount -->

            <!-- begin: working hour -->
            <div class="card margin-bot-20" style="width: 90%; margin-left:auto; margin-right:auto; min-height: 500px;" >
                <div class="card-body" id="working-hour">
                    <h2 class="card-title">Thông tin hoạt động</h2>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.Aenean commodo ligula eget dolor
                        .Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.Donec quam felis,
                        ultricies nec, pellentesque eu,
                        pretium quis, sem.Nulla consequat massa quis enim
                        .Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu.In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae,
                        justo.Nullam dictum felis eu pede mollis pretium
                        .Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi
                        .Aenean vulputate eleifend tellus.Aenean leo ligula,
                        porttitor eu, consequat vitae,
                        eleifend ac, enim.Aliquam lorem ante,
                        dapibus in , viverra quis, feugiat a,
                        tellus.Phasellus viverra nulla ut metus varius laoreet
                        .Quisque rutrum.Aenean imperdiet.Etiam ultricies nisi vel augue
                        .Curabitur ullamcorper ultricies nisi.Nam eget dui
                        .Etiam rhoncus.Maecenas tempus, tellus eget condimentum rhoncus,
                        sem quam semper libero, sit amet adipiscing sem neque sed ipsum
                        .Nam quam nunc, blandit vel, luctus pulvinar,
                        hendrerit id, lorem.Maecenas nec odio et ante tincidunt tempus
                        .Donec vitae sapien ut libero venenatis faucibus
                        .Nullam quis ante.Etiam sit amet orci eget eros faucibus tincidunt
                        .Duis leo.Sed fringilla mauris sit amet nibh
                        .Donec sodales sagittis magna.Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </p>
                 
                </div>
            </div>
            <!-- end: working hour -->

            <!-- begin: guide -->
            <div class="card margin-bot-20" style="width: 90%; margin-left:auto; margin-right:auto; min-height: 500px;" >
                <div class="card-body" id="guide">
                    <h2 class="card-title">Hướng dẫn</h2>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.Aenean commodo ligula eget dolor
                        .Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.Donec quam felis,
                        ultricies nec, pellentesque eu,
                        pretium quis, sem.Nulla consequat massa quis enim
                        .Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu.In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae,
                        justo.Nullam dictum felis eu pede mollis pretium
                        .Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi
                        .Aenean vulputate eleifend tellus.Aenean leo ligula,
                        porttitor eu, consequat vitae,
                        eleifend ac, enim.Aliquam lorem ante,
                        dapibus in , viverra quis, feugiat a,
                        tellus.Phasellus viverra nulla ut metus varius laoreet
                        .Quisque rutrum.Aenean imperdiet.Etiam ultricies nisi vel augue
                        .Curabitur ullamcorper ultricies nisi.Nam eget dui
                        .Etiam rhoncus.Maecenas tempus, tellus eget condimentum rhoncus,
                        sem quam semper libero, sit amet adipiscing sem neque sed ipsum
                        .Nam quam nunc, blandit vel, luctus pulvinar,
                        hendrerit id, lorem.Maecenas nec odio et ante tincidunt tempus
                        .Donec vitae sapien ut libero venenatis faucibus
                        .Nullam quis ante.Etiam sit amet orci eget eros faucibus tincidunt
                        .Duis leo.Sed fringilla mauris sit amet nibh
                        .Donec sodales sagittis magna.Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </p>

                </div>
            </div>
            <!-- end: guid -->


        </div>
        <!-- end: website introduction -->
    </div>
</body>
</html>
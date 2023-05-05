<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="view\style\base.css">
    <link rel="stylesheet" href="view\style\style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <title>bike detail</title>
    <!-- important! google CDN -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

    <!-- data table link boostrap -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/dataTables.bootstrap5.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/jquery-3.5.1.js">
    <script defer src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script defer src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script defer src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row mw-100">
            <!--begin: vertical navbar -->
            <div class="col-md-auto background-primary-color vh-100 nopadding">
                <!-- project name -->
                <div class="project d-flex align-items-center">
                    <img src="assets\img\project-logo.png" alt="prjLogo" class="project-logo">
                    <div class="project-name margin-left-10 ">
                        <h4 class="text-white">TRẠM XE <br> THÔNG MINH</h4>
                    </div>
                </div>
                <!-- logined user -->
                <div class="logined-user d-flex align-items-center">
                    <img src="assets\img\294488601_3134523420097821_7397663236363416758_n.jpg" alt="admin-avatar" class="user-img">
                    <div class="user-name margin-left-20">
                        <h6 class="text-white">ADMIN</h6>
                    </div>
                </div>

                <ul class="nav flex-column">
                    <li class="nav-item d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person text-white" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                        <a class="nav-link active text-white nopadding" href="/user_webpage">Quản lý nhân viên</a>
                    </li>
                    <li class="nav-item d-flex  align-items-center" id='stationList'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                        
                        <a class="nav-link active text-white nopadding " href="/station_list"> 
                            Danh sách trạm
                        </a>
                        <i class="ms-2" style="" id='warning' class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                            </svg>
                        </i>
                        <script src="view\script\warning.js"></script>
                    </li>
                    <li class="nav-item pt-0">
                        <ul class=" nav flex-column">
                                <li class="nav-item d-flex align-items-center selected" style="cursor: pointer;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-list-task" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                                        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                                    </svg>
                                    <a class="nav-link active text-white nopadding" href="/environment">Quản lí trạm</a>
                                    
                                </li>
                                <li class="nav-item d-flex align-items-center" style="cursor: pointer;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-sun text-white" viewBox="0 0 16 16">
                                        <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
                                        <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                    <a class="nav-link active text-white nopadding" href="/environment">Tình trạng môi trường</a>
                                </li>
                        </ul>
                    </li>
                    
                    
                    <li class="nav-item d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt text-white" viewBox="0 0 16 16">
                            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <a class="nav-link active text-white nopadding" href="/revenue">Doanh thu</a>
                    </li>
                    
                    <li class="nav-item d-flex align-items-center" style="cursor: pointer;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right text-white" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                        <a class="nav-link active text-white nopadding" href="/logout">Đăng xuất</a>
                    </li>
                    
                </ul>
            </div>
            <!--end: vertical navbar -->
            <?php
              $bikeObj = json_decode($bikeObj);
            ?>
            <!-- content -->
            <div class="content col vh-100" id="mainContent">
                <!-- start: breadcrum -->
              <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                          <a class="link-dark" href="/station_list">Danh sách trạm</a>
                      </li>
                      <li class="breadcrumb-item">
                          <a class="link-dark" href="<?php echo 'station-detail/'.UrlNormal($_SESSION['currStationName']).'/'.$_SESSION['currStationID']  ?>"><?php echo $_SESSION['currStationName'] ?></a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page"><?php echo $bikeObj->name ?></li>
                  </ol>
              </nav>
              <!-- end: breadcrum -->

              <!-- begin: bike detail -->
              <div class="row">
                  <div class="col-4">
                      <!-- bike image -->
                      <img src="./assets/img/touring-bike.jpg" class="img-fluid" alt="">
                      <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <td><?php echo $bikeObj->id ?></td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Số giờ thuê</th>
                              <td><?php echo $bikeObj->hired_hours ?></td>
                            </tr>
                            <tr>
                              <th scope="row">Giá thuê</th>
                              <td><?php echo $bikeObj->price ?>đ/h</td>
                            </tr>
                            <tr>
                              <th scope="row">Tình trạng</th>
                              <td><?php $statusArr = array ('ok' => "Bình thường", "hired" => "Đang thuê", "maintaining" => "Đang sửa"); echo $statusArr[$bikeObj->status] ?></td>
                            </tr>
                          </tbody>
                        </table>
                  </div>

                  <div class="col-8">
                      <!-- begin: bike detail table -->
                      <h3><?php echo $bikeObj->name ?></h3>
                      <table class="table">
                          <tbody>
                              <tr>
                                  <th scope="row">Chất liệu sơn</th>
                                  <td><?php echo $bikeObj->paint ?></td>
                              </tr>
                            <tr>
                              <th scope="row">Chất liệu khung sườn</th>
                              <td><?php echo $bikeObj->frame ?></td>
                            </tr>
                            <tr>
                              <th scope="row">Chất liệu yên</th>
                              <td><?php echo $bikeObj->saddle ?></td>
                            </tr>
                            <tr>
                              <th scope="row">Kích thước, khối lượng:</th>
                              <td>Ngang <?php echo $bikeObj->size_y ?>cm - Cao <?php echo $bikeObj->size_z ?>cm - Rộng <?php echo $bikeObj->size_x ?>cm - Nặng <?php echo $bikeObj->weight ?>kg</td>
                            </tr>
                            <tr>
                              <th scope="row">Tải trọng nguyên xe</th>
                              <td><?php echo $bikeObj->payload ?>kg</td>
                            </tr>
                            
                            <tr>
                              <th scope="row">Chiều cao tối thiểu</th>
                              <td><?php echo $bikeObj->min_height ?></td>
                            </tr>
                            <tr>
                              <th scope="row">Tiện ích</th>
                              <td><?php echo $bikeObj->note ?></td>
                            </tr>
                          </tbody>
                        </table>

                      <!-- end: bike detail table -->
                  </div>
              </div>
            </div>
            
            <!-- end: content -->
        </div>
    </div>

</body>
</html>
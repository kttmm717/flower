<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>flower</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css">
    <link rel="icon" href="{{\Storage::url('img/favicon.ico')}}" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    @vite(['resources/js/index.jsx', 'resources/sass/index.scss'])
</head>

<body>
    <!-- ヘッダー -->
    <header class="header">
        <div class="header__flex">
            <div class="header__logo">
                <img src="{{Storage::url('img/logo.svg')}}" alt="">
            </div>

            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <nav class="navi">
            <ul class="navi__menu">
                <li><a href="#top">TOP</a></li>
                <li><a href="#information">INFORMATION</a></li>
                <li><a href="#gallery">GALLERY</a></li>
                <li><a href="#access">ACCESS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    </header>

    <div id="top" class="mainvisual">
        <img src="{{\Storage::url('img/mainvisual1.jpg')}}">
        <img src="{{\Storage::url('img/mainvisual2.jpg')}}">
        <img src="{{\Storage::url('img/mainvisual3.jpg')}}">
    </div>

    <div class="title fadein">
        <h1 class="fadein">Hello Flower!<br>FA EXHIBITION 2021</h1>
    </div>

    <div class="side__btn">
        <a href="#">FOR VISITOR</a>
        <a href="#">FOR EXHIBITOR</a>
    </div>

    <div id="main" class="main">
        <Main />
    </div>

    <div class="bg"></div>

    <!-- フッター -->
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__address">
                <p>FA EXHIBITION</p>
                <p>〒152-0035 東京都目黒区自由が丘1-1-1 PARK SIDE HALL</p>
                <p>Tel: 03-1111-1111</p>
                <p>E-mail: info@xxxxxxx.jp</p>
            </div>
            <div class="footer__flex">
                <ul class="footer__sns">
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                </ul>
                <ul class="footer__copyright">
                    <p>PRIVACY POLICY</p>
                    <p>© FA EXHIBITION</p>
                </ul>
            </div>
        </div>
    </footer>

    <script src="{{asset('js/index.js')}}"></script>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>KCK Projekt "Drogi"</title>

    <!-- Bootstrap Core CSS - Uses Bootswatch Flatly Theme: http://bootswatch.com/flatly/ -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/freelancer.css" rel="stylesheet">
    <link href="css/drogi.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#page-top">KCK Projekt "Drogi"</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="page-scroll">
                        <a href="#page-top">Autorzy</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#zalozenia">Założenia</a>
                    </li>
                    <li class="page-scroll">
                        <a id="click_edytor" href="#opisz">Edytor</a>
                    </li>
                    <li class="page-scroll">
                        <a id="click_droga" href="#rysuj">Droga</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#page-bottom">Stopka</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <!-- Header -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-text">
                        <span class="name">KCK PROJEKT "DROGI"</span>
                        <hr class="star-light">
                        <?php
                            echo "<span class='skills'>Autorzy:<br>";
                            $tablica[0]="Grzegorz Robalski";
                            $tablica[1]="Rafał Wojciechowicz";
                            $tablica[2]="Patrycja Stafańska";
                            for($i=0;$i<3;$i++) {
                                echo $tablica[$i].'<br>';
                            }
                            if($_GET['zmienna']=='1') {
                                echo 'Jan Kowalski';
                            }
                            echo '</span>';
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Portfolio Grid Section -->
    <section id="zalozenia">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Założenia</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 portfolio-item"></div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/rysunek.png" class="img-responsive" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="success" id="opisz">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Edytor</h2>
                    <hr class="star-light">
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <a onclick="przerysuj();document.getElementById('click_droga').click();" href="javascript:void(0)" class="btn btn-lg btn-outline">
                        Generuj drogę z tekstu
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                    <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="row control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Opis</label>
                                <textarea id="opis" rows="15" class="form-control" placeholder="" id="message" required></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section id="rysuj">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Droga</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <a onclick="rysuj();document.getElementById('click_droga').click();" href="javascript:void(0)" class="btn btn-lg btn-outline">
                        Losuj drogę
                    </a>
                    <a onclick="opisz();document.getElementById('click_edytor').click();" href="javascript:void(0)" class="btn btn-lg btn-outline">
                        Eksportuj do edytora
                    </a>
                </div>
                <div class="col-sm-12">
                    <canvas id="map" class="center-block" width="800" height="600"></canvas>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="page-bottom" class="text-center">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-4">
                        <h3>O projekcie</h3>
                        <p>Projekt generuje losową trasę,<br>zapisuje trasę w trybie tekstowym<br>oraz używając interpretera ponownie generuje z tekstu tą samą trasę</p>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Społeczność</h3>
                        <ul class="list-inline">
                            <li>
                                <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-dribbble"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Dokumentacja</h3>
                        <ul class="list-inline">
                            <li>
                                <a href="doc/dokumentacja_2014.docx" class="btn btn-lg btn-outline">Dokumentacja</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy; KCK Projekt "Drogi" 2014-2015
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll visible-xs visble-sm">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>

    <!-- Portfolio Modals -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>KCK Projekt "Drogi"</h2>
                            <hr class="star-primary">
                            <img src="img/portfolio/rysunek.png" class="img-responsive img-centered" alt="">
                            <p>Pierwotny projekt graficzny i generalne założenie</p>
                            <ul class="list-inline item-details">
                                <li>Projekt:
                                    <strong><a href="#">KCK Projekt "Drogi"</a>
                                    </strong>
                                </li>
                                <li>Data:
                                    <strong><a href="#">Grudzień 2014</a>
                                    </strong>
                                </li>
                                <li>Typ:
                                    <strong><a href="#">Aplikacja JS</a>
                                    </strong>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Zamknij</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="js/classie.js"></script>
    <script src="js/cbpAnimatedHeader.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/freelancer.js"></script>

    <script src="js/drogi.js"></script>

</body>

</html>
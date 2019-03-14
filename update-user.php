<section id="container" class="">
    <input type="hidden" id="userId" value="<?= $_GET['id'] ?>"/>
    <!--header start-->
    <?php include('view/header.html') ?>
    <!--header end-->

    <!--sidebar start-->
    <?php include('view/sidebar.html') ?>
    <!--sidebar end-->

    <!--main content start-->
    <?php include('view/update-user.html') ?>
    <!--main content end-->
</section>
<!-- container section start -->


</body>

</html>

<? 
include './header.html';
 
 
    $menu = $_GET['menu'];
 
    if ($menu == '1') {
        include './menu1.html';
    }
    else if ($menu == '2') {
        include './menu2.html';
    }
    else if ($menu == '3') {
        include './menu3.html';
    }
    else if ($menu == '4') {
        include './menu4.html';
    }
    else {
        include './nopage.html';
    }
 
include './footer.html';
?>
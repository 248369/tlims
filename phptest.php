    <?php

    $background = $_POST['background'];
    $backgroundvalue = substr($background, 1);
    $foreground = $_POST['foreground'];
    $foregroundvalue = substr($foreground, 1);
    $chartsize = $_POST['chartsize'];
    $link = "https://image-charts.com/chart?choe=UTF-8";
    $text_to_qr = $_POST['text_to_qr'];
    $image_format = $_POST['image_format'];

     echo '<img src="'.$link."&chof=.".$image_format."&chs=200x200"."&cht=qr"."&icqrb=".$backgroundvalue."&icqrf=".$foregroundvalue."&chl=".$text_to_qr.'">';
   
   $url = $link."&cht=qr"."&chof=.".$image_format."&icqrb=".$backgroundvalue."&icqrf=".$foregroundvalue."&chs=".$chartsize."x".$chartsize."&chl=".$text_to_qr;
   //echo $url;

    ?>
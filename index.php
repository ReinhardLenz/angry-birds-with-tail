

  <?php include('../templates/header.php'); ?>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
    
<!--    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/addons/p5.sound.min.js"></script> -->
    <script src="https://unpkg.com/matter-js@0.19.0/build/matter.min.js"></script>
    <meta charset="utf-8" />

<!--
    <script src="../matter_sling_chain/slingshot.js"></script>
    <script src="../matter_sling_chain/bird.js"></script>
    <script src="../matter_sling_chain/box.js"></script>
    <script src="../matter_sling_chain/ground.js"></script>
    <script src="../matter_sling_chain/sketch.js"></script>

-->

    <script src="slingshot.js"></script>
    <script src="bird.js"></script>
    <script src="box.js"></script>
    <script src="ground.js"></script>
    <script src="sketch.js"></script>

    <?php

$xml=simplexml_load_file($_SERVER['DOCUMENT_ROOT'] ."/language_xml/languages_saha.xml") or die("xml not found!");
$SA1 =$xml->SA1->$lang;
$SA2 =$xml->SA2->$lang;
$SA3 =$xml->SA3->$lang;
$SA4 =$xml->SA4->$lang;
$SA5 =$xml->SA5->$lang;
$SA6 =$xml->SA6->$lang;
$SA7 =$xml->SA7->$lang;
$SA8 =$xml->SA8->$lang;
$SA9 =$xml->SA9->$lang;
$SA10 =$xml->SA10->$lang;
$SA12 =$xml->SA12->$lang;
$SA13 =$xml->SA13->$lang;
$SA14 =$xml->SA14->$lang;
$SA15 =$xml->SA15->$lang;
$SA16 =$xml->SA16->$lang;
$SA17 =$xml->SA17->$lang;
$SA18 =$xml->SA18->$lang;
$SA19 =$xml->SA19->$lang;
$SA20 =$xml->SA20->$lang;
$SA21 =$xml->SA21->$lang;


?>




<br>
<br>
<br>
<br>

<br>





<h1><?php echo $SA1;?></h1>



<br>
<div id="tryckknapp"></div>

    <div id="mycanvas"></div>
    <br>
    



    <br>
<?php echo $SA20;?><br> 
<br>
<p>
<?php echo $SA2;?><br> 
</p>
<br>
<img src="../sahakuvat/saha1.png" width="300" height="375">

<p>
<?php echo $SA3;?><br> 
</p>
<br>
<img src="../sahakuvat/saha10.png" width="300" height="116">

<p>
<?php echo $SA4;?><br> 
</p>
<br>
<img src="../sahakuvat/saha8.png" >

<p>
<?php echo $SA5;?><br> 
</p>
<br>

<p>
<?php echo $SA6;?><br> 
</p>
<br>

<p>
<?php echo $SA7;?><br> 
</p>
<br>
<img src="../sahakuvat/saha3.png" width="300" height="234">

<p>
<?php echo $SA8;?><br> 
</p>
<br>

<img src="../sahakuvat/saha4.png" width="300" height="277">
<p>
<?php echo $SA9;?><br> 
</p>
<br>

<p>
<?php echo $SA10;?><br> 
</p>
<br>

<p>
<?php echo $SA11;?><br> 
</p>
<br>

<p>
<?php echo $SA12;?><br> 
</p>
<br>
<img src="../sahakuvat/saha6.png" width="300" height="401">

<p>
<?php echo $SA13;?><br> 
</p>
<br>
<img src="../sahakuvat/saha5.png" width="300" height="322">

<p>
<?php echo $SA14;?><br> 
</p>
<br>
<img src="../sahakuvat/saha9.png" width="300" height="400">

<p>
<?php echo $SA15;?><br> 
</p>
<br>
<img src="../sahakuvat/saha7.png" width="300" height="400">

<p>
<?php echo $SA16;?><br> 
</p>
<br>
<img src="../sahakuvat/saha2.png" width="300" height="264">
<p>
<?php echo $SA17;?><br> 
</p>
<br>

<p>
<?php echo $SA18;?><br> 
</p>
<br>

<p>
<?php echo $SA19;?><br> 
</p>
<br>



<br>

<p>
<?php echo $SA21;?><br> 
</p>
<br>


<iframe width="560" height="315" src="https://www.youtube.com/embed/M1qgjf1r4ZU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    




<br>

<!-- 
<script src="saha/slingshot_sketch.js"></script>
    <script src="saha/box.js"></script>
    <script src="saha/bird.js"></script>
    <script src="saha/ground.js"></script>
    <script src="saha/slingshot.js"></script>

-->


<?php include('../templates/footer.php'); ?>



</body>
</html>

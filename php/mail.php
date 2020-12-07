<?php 
    require_once ("Email.php");
    $mail=$name=$option=$input=$output=$description="";
    $name  = $_POST["name"]." ". $_POST["firstname"];$mail =$_POST["mail"];$description=$_POST["description"];$option=$_POST["option"];$input =$_POST["input"];$output = $_POST["output"];
    $email1 = new Email("simulator.gluon@gmail.com","el.salaheddine159@gmail.com",$name,$input,$output,$option,$description,$mail);
    $email2 = new Email("simulator.gluon@gmail.com",$mail,$name,$input,$output,$option,$description,$mail);


    $email1->setMessage1();
    $email1->sendEmail();

    $email2->setMessage2();
    $email2->sendEmail();
    
?>
<?php
    class Email{
        
        private $from;private $to;private $message;private $name;private $in;private $out; private $option;private $description; private $email;

        function __construct($from,$to,$name,$in,$out,$option,$description,$email)
        {
            $this->from = $from;
            $this->to = $to;
            $this->name = $name;
            $this->description = $description;
            $this->option = $option;
            $this->in = $in;
            $this->out = $out;
            $this->email = $email;

        }

        private function getApiKey()
        {
            $str = file_get_contents("./env.json");
            $arr = json_decode($str,true);
            return $arr["sendgrid_api_key"];

    }
        public function setMessage1()
        {
           $this->message =
               "
                    <section>
                        <h1><u>Input and Output</u></h1>
                    </section>
                    <div>
                        <p style='color:#000000' >" .$this->name. "</p>
                        <p style='color:#000007'>" .$this->email."</p>
                        <p><span>Input : ".$this->in. "</span><span>Output: ".$this->out." </span></p>
                        <p>Option : ".$this->option."</p>
                        <p>Description: ".$this->description."</p>
                    </div>
                ";
        }

        public function setMessage2()
        {
            $this->message =
                "
                    <div>
                        <h1><u>Input and Output</u></h1>
                        <p>Thank you ".$this->name."! Your simulation has been sent!</p>
                        <p>Input : ".$this->in." ".". </p>
                        <p>Output : ".$this->out." ".". </p>
                        <p>Option : ".$this->option." </p>
                        <p>Description : ".$this->description." </p>
                    </div>
                ";
        }
        
        public function sendEmail()
        {
            require '../vendor/autoload.php';
            $apiKey  = new \SendGrid($this->getApiKey());
            $email = new \SendGrid\Mail\Mail();
            $email->setFrom($this->from);
            $email->addTo($this->to);
            $email->setSubject("The simulation of ".$this->name);
            $email->addContent("text/html", $this->message);

            $apiKey->send($email);
            header('Location: ../html/simulator.html');

        }
    }
?>
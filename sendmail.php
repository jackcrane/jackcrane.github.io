<?php

require 'vendor/autoload.php';

use SendGrid\Mail\Content;
use SendGrid\Mail\From;
use SendGrid\Mail\Mail;
use SendGrid\Mail\To;

$sendgrid = new SendGrid("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");
$email    = new SendGrid\Mail\Mail();

$email->addTo("3jbc22@gmail.com")
      ->setFrom("aether@aether.com")
      ->setSubject("Sending with SendGrid is Fun")
      ->setHtml("and easy to do anywhere, even with PHP");

echo $email;

$sendgrid->send($email);

?>
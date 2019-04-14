<?php

  // variables
  define('UPLOAD_DIR', 'uploads/'); 
  $fileName = $_POST['file'];


  // function to rename file
  function update_file_name($file) 
  {
    $pos = strrpos($file,'.');
    $ext = substr($file,$pos); 
    $dir = strrpos($file,'/');
    $dr  = substr($file,0,($dir+1)); 

    $arr = explode('/',$file);
    $fName = trim($arr[(count($arr) - 1)],$ext);

    $exist = FALSE;
    $i = 2;
    
    while(!$exist)
    {
      $file = $dr.$fName.'_'.$i.$ext;
      
      if(!file_exists($file))
        $exist = TRUE;
      
      $i++;
    }

    return $file;
  }




  // check for which action should be taken if file already exist
  if(file_exists(UPLOAD_DIR . $fileName['name'])) 
  {
    $updatedFileName = update_file_name(UPLOAD_DIR.$fileName['name']);
    move_uploaded_file($fileName['tmp_name'], $updatedFileName);

    //Message: SUCCESS UPLOAD and RENAME
  }
  else
  {
    move_uploaded_file($fileName['tmp_name'], UPLOAD_DIR.$fileName['name']);
    
    //Message: SUCCESS UPLOAD
  }

?>
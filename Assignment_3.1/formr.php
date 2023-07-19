<?php
		$servername = "localhost";
        $username = "root";
        $password = "";
        $databasename = "newly";
        
        $conn = mysqli_connect($servername, $username, $password, $databasename);

		if ($conn->connect_error) {
            die($conn->connect_error);
        } else {
            echo "MySql Connection Successful!";
        }
        
		$name = $_REQUEST['name'];
		$email = $_REQUEST['email'];
		$phone = $_REQUEST['phone'];
		$subject = $_REQUEST['subject'];
		$feedback = $_REQUEST['feedback'];


		$sql = "INSERT INTO formr VALUES ('$name','$email','$phone','$subject','$feedback')";
		
		if(mysqli_query($conn, $sql)){
			echo " save";
		} else{
			echo "ERROR $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection 
		mysqli_close($conn);
		?>
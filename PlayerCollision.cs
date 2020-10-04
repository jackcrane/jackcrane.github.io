using UnityEngine;
using UnityEngine.UI;


public class PlayerCollision : MonoBehaviour{
		public PlayerMovement movement;
		private int lives = 0;
		public Transform player;
		public Text scoreText;
		public Rigidbody rb = null;
		private bool abort = false;
	void OnCollisionEnter (Collision collisionInfo) {
		if (collisionInfo.collider.tag == "Obstacle") {
			if (lives >= 3) {
				movement.enabled = false;
				Debug.Log("We Hit the thing");
				Debug.Log(movement);
				rb.AddForce(0, 0, 0);
				transform.position = new Vector3(0,1,-30);
				scoreText.text = "Level failed - Press C to try again";

				rb.AddForce(0, 0, 0);
			} else {
				lives = lives + 1;
			}
		}



	}

void FixedUpdate()
    {
    	if (scoreText.text == "-30") {
    		//DISPLAY TEXT AND LEAVE THE VOID FIXEDUPDATE()
        	scoreText.text = "Level failed - Press C to try again";
        	return;
    	} else {
    		//CONTINUE RUNNING THIS UNTILL -30 IS REACHED
    		scoreText.text = player.position.z.ToString("0");
    	}
    	
    	
    }
void Update() {
if ( Input.GetKey("c") ) {
	movement.enabled = true;
        	transform.position = new Vector3(0,1,0);
        	
        	lives = 0;
        }
    }
}

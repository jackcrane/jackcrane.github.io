package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.qualcomm.robotcore.hardware.DcMotorEx;
import org.firstinspires.ftc.robotcore.external.navigation.DistanceUnit;
import com.qualcomm.robotcore.hardware.ColorSensor;
import com.qualcomm.robotcore.hardware.DistanceSensor;
import com.qualcomm.robotcore.hardware.Servo;
import com.qualcomm.robotcore.hardware.CRServo;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.Gamepad;
import com.qualcomm.robotcore.hardware.DcMotor;

@TeleOp
                  

public class DumbMecanum extends OpMode {
    private Gamepad gp1 = null;
    private Gamepad gp2 = null;
    private DcMotor FrontLeft = null;
    private DcMotor FrontRight = null;
    private DcMotor BackLeft = null;
    private DcMotor BackRight = null;
    
    private boolean intakesRunning = false;
    
    private DcMotor leftIntakeWheel = null;
    private DcMotor rightIntakeWheel = null;
    
    private double intakeSpeedModifier = 0.5;
    
    //private CRServo leftIntake = null;
    //private CRServo rightIntake = null;
    private Servo vLower = null;
    private Servo vGrab = null;
    private Servo leftSnatch = null;
    private Servo rightSnatch = null;
    
    private boolean upPressed = false;
    private boolean downPressed = false;
    
    private Servo blinkin = null;
    
    //private CRServo leftPull = null;
    //private CRServo rightPull = null;
    
    private Servo armGrab; //brick grab into slide
    
    private DcMotor armLift;
    private DcMotor armSlide; //slide motors

    protected ColorSensor lColor;
    protected DistanceSensor lDistance;
    protected double ldist;
    
    private double speed = 0.3;
    private double armPos = .5;
    private double dist = 0;
    
    double ServoPosition;
    double ServoSpeed;
    
    int Target_Position0;
    double MaxSpeed0;
    double MaxSpeed1;
    int Target_Position1;
    int Target_Position0_Last;
    int Target_Position1_Last;
    double MaxPos0;
    double MaxPos1;
    double MaxChange0;
    double MaxChange1;
    double MinPos0;
    double MinPos1;
    
    public void init() {
        gp1 = gamepad1;
        gp2 = gamepad2;
        //FrontLeft  = hardwareMap.get(DcMotor.class, "frontLeft");
        //FrontRight = hardwareMap.get(DcMotor.class, "frontRight");
        //BackLeft  = hardwareMap.get(DcMotor.class, "backLeft");
        //BackRight = hardwareMap.get(DcMotor.class, "backRight");
        
        FrontRight  = hardwareMap.get(DcMotor.class, "frontLeft");
        FrontLeft = hardwareMap.get(DcMotor.class, "frontRight");
        BackLeft  = hardwareMap.get(DcMotor.class, "backLeft");
        BackRight = hardwareMap.get(DcMotor.class, "backRight");
        
        leftIntakeWheel = hardwareMap.get(DcMotor.class, "leftIntakeWheel");
        rightIntakeWheel = hardwareMap.get(DcMotor.class, "rightIntakeWheel");
        
        //leftIntake = hardwareMap.get(CRServo.class, "leftIntake");
        //rightIntake = hardwareMap.get(CRServo.class, "rightIntake");
        vLower = hardwareMap.get(Servo.class, "vLower");
        vGrab = hardwareMap.get(Servo.class, "vGrab");
        
        //leftPull = hardwareMap.get(CRServo.class,"leftPull");
        //rightPull = hardwareMap.get(CRServo.class,"rightPull");
        
        leftSnatch = hardwareMap.get(Servo.class, "leftSnatch");
        rightSnatch = hardwareMap.get(Servo.class, "rightSnatch");
        
        
        blinkin = hardwareMap.get(Servo.class, "blinkin");
        //**** The color sensor(s) *****************
        lColor=hardwareMap.colorSensor.get("lColor");
        lDistance=hardwareMap.get(DistanceSensor.class, "lColor");
        lColor.enableLed(true);
        
        armGrab = hardwareMap.servo.get("armGrab");
        
        armLift = hardwareMap.dcMotor.get("armLift");
        armSlide = hardwareMap.dcMotor.get("armSlide");
        
        ServoPosition = 0.5;
        ServoSpeed = 1;
        
        MinPos0 = 0;
        MaxPos0 = 14000;
        MaxSpeed0 = 3500;
        MaxChange0 = -100;
        MinPos1 = 0;
        MaxPos1 = 1240;
        MaxSpeed1 = 740;
        MaxChange1 = -5;
        
        armLift.setDirection(DcMotorSimple.Direction.FORWARD);
        armLift.setMode(DcMotor.RunMode.RUN_USING_ENCODER);
        armSlide.setDirection(DcMotorSimple.Direction.REVERSE);
        armSlide.setMode(DcMotor.RunMode.RUN_USING_ENCODER);
        ((DcMotorEx) armLift).setVelocityPIDFCoefficients(1.17, 0.117, 0, 10);
        ((DcMotorEx) armLift).setPositionPIDFCoefficients(2.5);
        ((DcMotorEx) armSlide).setVelocityPIDFCoefficients(6.97, 0.697, 0, 69.7);
        ((DcMotorEx) armSlide).setPositionPIDFCoefficients(2.5);
        Target_Position0 = armLift.getCurrentPosition();
        Target_Position1 = armSlide.getCurrentPosition();
        
        
        
    }
    public void start() {
        
    }
    public void loop() {
        double strafe = gp1.left_stick_x;
        double norm = gp1.left_stick_y;
        double rotation = gp1.right_stick_x;

        // if(!intakesRunning) {
        //     //Drive controls for when the intake wheels are not running
            
        //     FrontLeft.setPower((strafe + norm + rotation)*speed);
        //     FrontRight.setPower((strafe - norm + rotation)*speed);
        //     BackLeft.setPower((-strafe - norm + rotation)*speed);
        //     BackRight.setPower((-strafe + norm + rotation)*speed);
        // } else {
            //Reversed drive controls for when the intake wheels are running
            
            FrontLeft.setPower((strafe + norm - rotation)*-speed);
            FrontRight.setPower((strafe - norm - rotation)*-speed);
            BackLeft.setPower((-strafe - norm - rotation)*-speed);
            BackRight.setPower((-strafe + norm - rotation)*-speed);
        //}
        
        // ***************************************************
        // *            Mechanum drive code                  *
        // *                                                 *
        // * Occasionally, and for reasons that are beyond   *
        // * me, the drive is occasionally screwed up, being *
        // * reversed on opposite sides. DO NOT MESS WITH    *
        // * THE CODE ABOVE WITHOUT TESTING RIGHT AFTER      *
        // *                                                 *
        // *            ORIGINAL CODE 11/28/19               *
        // * FrontLeft: s+n-r       FrontRight: s-n-r        *
        // * BackLeft: -s-n-r       BackRight: -s+n-r        *
        // *                                                 *
        // *            RECENT CHANGELOG                     *
        // * 11/28 reversed rotation direction on YAW axis   *
        // *   - switched all the rotation ops from + to -   *
        // *                                                 *
        // * Ask jack if it gets messed up again...          *
        // ***************************************************
        
        
        dist = returnDistance();
        
        if (dist > 10 && dist < 20){
            //blinkin.setPosition(0.77);
        } else {
            //blinkin.setPosition(.01);// //WORKING
        }
        
        if(gamepad1.dpad_up) {
            if(upPressed == false) {
                if(intakeSpeedModifier <= 0.99) {
                    intakeSpeedModifier += 0.1;
                }
                
                upPressed = true;
            }
        } else {
            upPressed = false;
        }
        
        if(gamepad1.dpad_down) {
            if(downPressed == false) {
                if(intakeSpeedModifier >= 0.11) {
                    intakeSpeedModifier -= 0.1;
                }
                
                downPressed = true;
            }
        } else {
            downPressed = false;
        }
        
        telemetry.addData("intake speed modifier",intakeSpeedModifier);
        
        if(gamepad1.left_trigger >= 0.01) {
            intakesRunning = true;
            leftIntakeWheel.setPower(1 * intakeSpeedModifier * gamepad1.left_trigger);
            rightIntakeWheel.setPower(1 * intakeSpeedModifier * gamepad1.left_trigger);
            //leftPull.setPower(1);
            //rightPull.setPower(-1);
        } else if(gamepad1.right_trigger >= 0.01) {
            intakesRunning = true;
            leftIntakeWheel.setPower(-1 * intakeSpeedModifier * gamepad1.right_trigger);
            rightIntakeWheel.setPower(-1 * intakeSpeedModifier * gamepad1.right_trigger);
            //leftPull.setPower(-1);
            //rightPull.setPower(1);
        } else {
            intakesRunning = false;
            leftIntakeWheel.setPower(0);
            rightIntakeWheel.setPower(0);
            //leftPull.setPower(0);
            //rightPull.setPower(0);
        }
        
        telemetry.addData("frontLeft",-strafe - norm + rotation);
        telemetry.addData("FrontRight",-strafe + norm + rotation);
        telemetry.addData("BackLeft",strafe - norm + rotation);
        telemetry.addData("BackRight",strafe + norm + rotation);
        
        
        
        
        // to reverse strafeing controls, switch the locations of the negative signs before the var strafe.
        
        
        //telemetry.addData("blinkin val",blinkin.CurrentValue);
        telemetry.update();
        
        
        //if(gp.left_trigger >= 0.1) {
        //    leftIntake.setPower(1);
         //   rightIntake.setPower(-1);
        //} else if (gp.right_trigger >= 0.1) {
         //   leftIntake.setPower(-1);
          //  rightIntake.setPower(1);
        //} else {
        //    leftIntake.setPower(0);
        //    rightIntake.setPower(0);
        //}
        
        if(gp2.a) {
             vLower.setPosition(0.35);//DOWN
             
        } 
        
        if(gp2.y) {
             vLower.setPosition(0.65);
             vGrab.setPosition(1.25);///UP
        } 
        
        if(gp2.x) {
            vGrab.setPosition(0.75);//RELEASE
        } 
        
        if (gp2.b) {
            vGrab.setPosition(1.25);//GRAB
    }
    
        if(gp2.right_bumper) {
            leftSnatch.setPosition(0.7);
            rightSnatch.setPosition(0.65);
        } 
        if(gp2.left_bumper) {
            leftSnatch.setPosition(.5);
            rightSnatch.setPosition(0.8);
        }
        
        if(gp1.left_bumper) {
            speed=.2;
        }
        else {
            speed=1;
        }
        dist =  returnDistance();
        // if (dist > 15.5 && dist < 18.5){
        //     blinkin.setPosition(0.77);
        // } else{
        //     blinkin.setPosition(0.87);
        // }
        
        
        if (gamepad2.left_trigger > 0.1) {
            ServoPosition = 0.6;
        }
        if (gamepad2.right_trigger > 0) {
            ServoPosition = 0.2;
        }
        ServoPosition = Math.min(Math.max(ServoPosition, 0.2), 0.6);
        armGrab.setPosition(ServoPosition);
        telemetry.addData("ServoCmd", ServoPosition);
        telemetry.addData("armGrab", armGrab.getPosition());
        telemetry.update();
        
        
        while (!gamepad2.left_bumper) {
            ((DcMotorEx) armLift).setVelocity(gamepad2.left_stick_y * (MaxSpeed0 / -4));
            ((DcMotorEx) armSlide).setVelocity(gamepad2.right_stick_y * (MaxSpeed1 / -8));
        }
        armLift.setMode(DcMotor.RunMode.STOP_AND_RESET_ENCODER);
        armSlide.setMode(DcMotor.RunMode.STOP_AND_RESET_ENCODER);
        armLift.setMode(DcMotor.RunMode.RUN_TO_POSITION);
        armSlide.setMode(DcMotor.RunMode.RUN_TO_POSITION);
        
        Target_Position0_Last = Target_Position0;
        Target_Position1_Last = Target_Position1;
        if (gamepad2.left_stick_y < 0) {
          if (Target_Position0 < MaxPos0) {
            Target_Position0 += gamepad2.left_stick_y * MaxChange0;
          }
        }
        if (gamepad2.left_stick_y > 0) {
          if (Target_Position0 > MinPos0) {
            Target_Position0 += gamepad2.left_stick_y * MaxChange0;
          }
        }
        if (Target_Position0 != Target_Position0_Last) {
          armLift.setTargetPosition((int) Math.min(Math.max(Target_Position0, MinPos0), MaxPos0));
          ((DcMotorEx) armLift).setVelocity(MaxSpeed0);
        }
        if (gamepad2.right_stick_y < 0) {
          if (Target_Position1 < MaxPos1) {
            Target_Position1 += gamepad2.right_stick_y * MaxChange1;
          }
        }
        if (gamepad2.right_stick_y > 0) {
          if (Target_Position1 > MinPos1) {
            Target_Position1 += gamepad2.right_stick_y * MaxChange1;
          }
        }
        if (Target_Position1 != Target_Position1_Last) {
          armSlide.setTargetPosition((int) Math.min(Math.max(Target_Position1, MinPos1), MaxPos1));
          ((DcMotorEx) armSlide).setVelocity(MaxSpeed1);
        }
        telemetry.addData("LeftStickY", gamepad2.left_stick_y);
        telemetry.addData("Target Position0", Target_Position0);
        telemetry.addData("Target Position0Last", Target_Position0_Last);
        telemetry.addData("Encoder Position0", armLift.getCurrentPosition());
        telemetry.addData("Motor Velocity0", ((DcMotorEx) armLift).getVelocity());
        telemetry.addData("RightStickY", gamepad2.right_stick_y);
        telemetry.addData("Target Position1", Target_Position1);
        telemetry.addData("Target Position1Last", Target_Position1_Last);
        telemetry.addData("Encoder Position1", armSlide.getCurrentPosition());
        telemetry.addData("Motor Velocity1", ((DcMotorEx) armSlide).getVelocity());
        telemetry.update();
        
    }
        public double returnDistance(){
        
        Double myDist;
        ldist=lDistance.getDistance(DistanceUnit.CM);
        myDist = ldist;
        if (myDist.isNaN()){
            ldist = 21;
        }
        
        //telemetry.addData("Getting to right distance",ldist);
        //telemetry.addData("distance",ldist);

        //telemetry.update();
        return ldist;
    }
    public void stop() {
        
    }
}

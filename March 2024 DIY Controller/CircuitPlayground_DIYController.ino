#include <Adafruit_CircuitPlayground.h>
#include <Adafruit_Circuit_Playground.h>

int thresh = 400;
int debounce = 100;

void setup() {
  // put your setup code here, to run once:

  Serial.begin(9600);
  delay(1000);
  CircuitPlayground.begin();

}

void loop() {
  // put your main code here, to run repeatedly:

  int left = CircuitPlayground.readCap(A4);
  int right = CircuitPlayground.readCap(A2);
  int up = CircuitPlayground.readCap(A3);
  int down = CircuitPlayground.readCap(A1);

  if(left > thresh) {
    Serial.println("left");
  }
  else if(right > thresh) {
    Serial.println("right");
  }
  else if(up > thresh) {
    Serial.println("up");
  }
  else if(down > thresh) {
    Serial.println("down");
  }
  else {
    Serial.println(0);
  }


}

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WebSocketsClient.h>
WebSocketsClient webSocket;
const char* ssid = "RD_SMART";
const char* password = "Led@RD@99";
const char* ip_host = "192.168.93.163";
const uint16_t port = 3000;

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {
  switch (type) {
    case WStype_DISCONNECTED: // Sự kiện mất kết nối với Server
      Serial.printf("[WSc] disconnected!\n");
      break;
    case WStype_CONNECTED: // Sự kiện kết nối với Server
      {
        Serial.printf("[WSc] connected to url: %s\n", payload);
      }
//      break;
//    case WStype_TEXT: // Sự kiện nhận được data từ Server
//    {
//      if (strcmp((char*)payload, "SAon") == 0){
//         Serial.println('A');
//      }
//      else if (strcmp((char*)payload, "SBon") == 0){
//         Serial.println('B');
//      }
//       else if (strcmp((char*)payload, "SCon") == 0){
//         Serial.println('C');
//      } 
//       else if (strcmp((char*)payload, "SDon") == 0){
//         Serial.println('D');
//      }
      
//      const char *char_pointer = (char*)payload;
//      int payload_length = strlen(char_pointer);
//      char kichbandieukhien = (*(char_pointer+payload_length-2));
//
//      //Dieu khien theo kich ban dieu khien below !!!!
//      if(kichbandieukhien =='0'){
//        Serial.println('A');
//      } else if(kichbandieukhien =='1'){
//        Serial.println('B');
//      } else if(kichbandieukhien =='2'){
//        Serial.println('C');
//      }

      break;
    }
  }

void setup() {
  Serial.begin(9600);
  Serial.println("ESP8266 Websocket Client");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  webSocket.begin(ip_host, port);
//  webSocket.begin(ip_host, port, "/app/viewtrackingdata/");
  webSocket.onEvent(webSocketEvent);
}
void loop() {
  webSocket.loop();
  data();
}
void data(){
  String json = "{\"id1\":";
  json += random(2);
  json += ",\"id2\":";  
  json += random(2);
  json += ",\"id3\":";
  json += random(2);
  json += ",\"id4\":";
  json += random(2);
  json += ",\"id5\":";
  json += random(2);
  json += ",\"id6\":";
  json += random(2);
  json += ",\"id7\":";
  json += random(2);
  json += ",\"id8\":";
  json += random(2);
  json += ",\"id9\":";
  json += random(2);
  json += "}";
  webSocket.sendTXT(json.c_str(),json.length());
  delay(650);
}

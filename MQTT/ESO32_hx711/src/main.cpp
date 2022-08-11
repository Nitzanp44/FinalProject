#include <Arduino.h>
#include "soc/rtc.h"
#include "HX711.h"
#include <stdlib.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <BlynkSimpleEsp32.h>
#include <Adafruit_I2CDevice.h>
#include <SimpleTimer.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <Adafruit_Sensor.h>
#include <ctime>
#include <iostream>
#include <iomanip>
#include <ESP32Time.h>

#define MQTTpubQos     1    

// WiFi
const char *ssid = "Reut";         // Enter your WiFi name
const char *password = "12345678"; // Enter WiFi password


// MQTT Broker
//const char *mqtt_broker = "broker.emqx.io";
const char *mqtt_broker = "192.168.43.190";
const char *topic = "esp32_hx711";
String topicA=WiFi.macAddress();
//const char *topicA = "esp32_hx711A";
//const char *topicB = "esp32_hx711B";
const char *mqtt_username = "emqx";
const char *mqtt_password = "public";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

#define DOUT 26
#define CLK 27
#define MQTTpubQOS 1
HX711 scaleA;
HX711 scaleB;

int rbutton = 18; // this button will be used to reset the scale to 0.
String myString;
String myStringA;
String myStringB;
char buff[10];
float weightA;
float weightB;
String arrWeightA;
String arrWeightB;
float weight;
float calibration_factor = -12705.00; // for me this vlaue works just perfect 206140

ESP32Time rtc(3600); 

SimpleTimer timer;

void callback(char *topic, byte *payload, unsigned int length)
{
    Serial.print("Message arrived in topic: ");
    Serial.println(topic);
    Serial.print("Message:");
    for (int i = 0; i < length; i++)
    {
        Serial.print((char)payload[i]);
    }
    Serial.println();
    Serial.println("-----------------------");
}

void setup()
{
    scaleA.begin(DOUT, CLK);
    scaleB.begin(DOUT, CLK);
    Serial.begin(9600);
    rtc.setTime(30, 43, 10, 13, 6, 2022);
    // connecting to a WiFi network
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print("Connecting to WiFi..");
        Serial.println(WiFi.status());
    }
    Serial.println("Connected to the WiFi network");
    // connecting to a mqtt broker
    client.setServer(mqtt_broker, mqtt_port);
    client.setCallback(callback);
    while (!client.connected())
    {
        String client_id = "esp32-client-";
        client_id += String(WiFi.macAddress());
        Serial.printf("The client %s connects to the public mqtt broker\n", client_id.c_str());
        //if (client.connect(client_id.c_str(), mqtt_username, mqtt_password))
        //if (client.connect(client_id.c_str(),NULL,NULL,"esp32_hx711B",2,false,"not connected"))
        if (client.connect(client_id.c_str()))
        {
            Serial.println("Public mqtt broker connected");
        }
        else
        {
            Serial.print("failed with state ");
            Serial.print(client.state());
            delay(2000);
        }
    }

    scaleA.set_scale();
    scaleA.tare();                            // Reset the scale to 0
    scaleA.set_scale(calibration_factor);

    scaleB.set_scale();
    scaleB.tare();                            // Reset the scale to 0
    scaleB.set_scale(calibration_factor);
}

void loop()
{

    timer.run(); // Initiates SimpleTimer
    int ms = rtc.getMillis();
    int ss = rtc.getSecond();
    int mm = rtc.getMinute();
    int hh = rtc.getHour(true);
    char buffer[14];
    sprintf(buffer, "%02d:%02d:%02d:%03d", hh, mm, ss,ms);  //buffer time string

        arrWeightA=buffer;
        for(int i=1; i<3;i++)
        {
            arrWeightA += ',';
            weightA = scaleA.get_units();
            if (weightA<0)
            {weightA=0;}
            myStringA = dtostrf(weightA, 3, 3, buff);
            arrWeightA += (myStringA);
        }
        for(int j=3; j<5;j++)
        {
            arrWeightA += ',';
            weightB = scaleB.get_units();
            if (weightB<0)
            {weightB=0;}
            myStringB = dtostrf(weightB, 3, 3, buff);
            arrWeightA += (myStringB);  
        }
        Serial.println(arrWeightA);
        client.publish(topicA.c_str(), arrWeightA.c_str());
        //client.publish(topicA, arrWeightA.c_str()); 

    arrWeightA.clear();
}

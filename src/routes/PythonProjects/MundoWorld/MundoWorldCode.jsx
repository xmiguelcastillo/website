import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/brewer.css";

function MundoWorldCode() {
  const [activeTab, setActiveTab] = useState(0);

  const codeSnippets = [
    {
      label: "Python",
      code: `
from rest_framework import serializers, status
from .models import *
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ["employee", "department"]

class AirportSerializer(serializers.ModelSerializer):
    airportname = serializers.CharField(required=False, allow_blank=True)
    airportcode = serializers.CharField(required=False, allow_blank=True)
    city = serializers.CharField(required=False, allow_blank=True)
    country = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Airport
        fields = ["airportname", "airportcode", "city", "country"]

class FlightSerializer(serializers.ModelSerializer):
    depart_location = AirportSerializer()
    return_location = AirportSerializer()

    class Meta:
        model = Flight
        fields = [
            "depart_location",
            "return_location",
            "airline",
            "depart_date",
            "return_date",
            "flightnumber",
            "class_flight",
            "passenger_flight",
            "price_flight",
            "depart_time",
            "return_time",
            "depart_time_arrival",
            "return_time_arrival",
            "depart_duration",
            "return_duration",
        ]

    def create(self, validated_data):
        depart_location_data = validated_data.pop("depart_location")
        return_location_data = validated_data.pop("return_location")

        depart_location = Airport.objects.create(**depart_location_data)
        return_location = Airport.objects.create(**return_location_data)

        flight = Flight.objects.create(
            depart_location=depart_location,
            return_location=return_location,
            **validated_data
        )

        return flight

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["email", "password"]

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = [
            "user",
            "flight",
            "passenger_name",
            "passenger_email",
            "seat_number",
            "payment_status",
        ]

    def create(self, validated_data):
        ticket = super().create(validated_data)
        return ticket
      `,
    },
    {
      label: "React",
      code: `


import React from "react";
import axios from "axios";
import dayjs from "dayjs";
class ResultBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }
  formatDate(dateString) {
    return dayjs(dateString).format("DD, MMMM YYYY");
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/flights")
      .then((res) => {
        this.setState({
          details: res.data,
        });
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }

  render() {
    return (
      <div>
        {this.state.details.length > 0 &&
          this.state.details.map((flight, id) => (
            <div key={id}>
              <div className="w-[1200px] h-[300px] mb-4 flex flex-row bg-[#378ac5] border-4 rounded-lg border-black text-shadow-sm">
                {/* Airline Details */}
                <div className=" w-1/6 h-full flex flex-col text-shadow-sm">
                  <div className=" w-full h-1/2 flex items-center justify-center p-2 text-shadow-sm">
                    <div className=" border-4 bg-white border-black rounded-lg p-2 text-center text-shadow-sm">
                      {flight.airline}
                    </div>
                  </div>
                  <div className=" w-full h-1/2 flex items-center justify-center p-2 text-shadow-sm">
                    <div className=" border-4 bg-white border-black rounded-lg p-2 text-center text-shadow-sm">
                      {flight.airline}
                    </div>
                  </div>
                </div>

                {/* Flight Details */}
                <div className="w-3/5 h-full flex flex-col space-y-2 text-shadow-sm">
                  {/* Departure Details */}
                  <div className=" w-full h-1/2 flex flex-row p-2 text-shadow-sm">
                    <div className=" h-full flex flex-row w-full rounded-lg text-shadow-sm">
                      <div className=" h-full flex items-center justify-center w-4/12 p-2 text-shadow-sm">
                        <div className=" bg-[#2d80f3] border-black border-4 rounded-lg text-center p-2 text-shadow-xs">
                          Depart: {flight.return_location.airportname}
                        </div>
                      </div>
                      <div className=" w-4/5 h-full flex flex-col justify-evenly p-2 text-shadow-sm">
                        <div className="flex items-center justify-center text-shadow-sm">
                          <div className="w-[300px] bg-[#002662] border-black border-4 rounded-lg text-center p-2 text-white text-shadow-sm">
                            {this.formatDate(flight.depart_date)}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-shadow-sm">
                          <div className=" w-1/5 bg-white border-black border-4 rounded-lg text-center p-2 text-shadow-sm">
                            {new Date(
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </div>
                          <hr className="w-full h-[4px] bg-black border-0 mx-2 text-shadow-sm" />
                          <div className=" w-1/5 bg-white border-black border-4 rounded-lg text-center p-2 text-shadow-sm">
                            {new Date(
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Return Details */}
                  <div className=" w-full h-1/2 flex flex-row p-2 text-shadow-sm">
                    <div className=" h-full flex flex-row w-full rounded-lg text-shadow-sm">
                      <div className=" h-full flex items-center justify-center w-4/12 p-2 text-shadow-sm">
                        <div className=" bg-[#2d80f3] border-black border-4 rounded-lg text-center p-2 text-shadow-xs">
                          From: {flight.return_location.airportname}
                        </div>
                      </div>
                      <div className=" w-4/5 h-full flex flex-col justify-evenly p-2 text-shadow-sm">
                        <div className="flex items-center justify-center text-shadow-sm">
                          <div className="w-[300px] bg-[#002662] border-black border-4 rounded-lg text-center p-2 text-white text-shadow-sm">
                            {this.formatDate(flight.return_date)}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-shadow-sm">
                          <div className=" w-1/5 bg-white border-black border-4 rounded-lg text-center p-2 text-shadow-sm">
                            {new Date(
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </div>
                          <hr className="w-full h-[4px] bg-black border-0 mx-2 text-shadow-sm" />
                          <div className=" w-1/5 bg-white border-black border-4 rounded-lg text-center p-2 text-shadow-sm">
                            {new Date(
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchase Details */}
                <div className=" w-1/5 h-full flex flex-col justify-between p-2 rounded-lg text-shadow-sm">
                  <div className="h-1/3 text-shadow-xs  text-white text-center p-2 text-shadow-sm justify-center">
                    <div className="flex justify-center items-center">
                      Class: {flight.class_flight}
                    </div>
                    <div>Passenger: {flight.passenger_flight}</div>
                  </div>
                  <div className="h-1/3  flex items-center justify-center text-shadow-sm">
                    <button className=" bg-[#00ff37] border-4 rounded-lg border-black w-[200px] h-[50px] text-shadow-sm">
                      Purchase
                    </button>
                  </div>
                  <div className="h-1/3  text-center p-2 text-shadow-xs">
                    Flight Number: {flight.flightnumber}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default ResultBox;
      `,
    },
  ];

  useEffect(() => {
    hljs.highlightAll(); // Apply syntax highlighting
  }, [activeTab]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="mt-6 w-[600px]">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md ${activeTab === index
                ? "bg-blue-950 border-[#111111] border-2 text-white"
                : "bg-gray-200 text-black"
              }`}
          >
            {snippet.label}
          </button>
        ))}
      </div>
      {/* Code Block */}
      <div className="relative bg-[#111111] text-white rounded-s4 p-4">
        <div
          className="overflow-auto max-h-[1000px] text-sm leading-5"
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          <pre>
            <code
              className={`language-${codeSnippets[
                activeTab
              ].label.toLowerCase()}`}
            >
              {codeSnippets[activeTab].code.trim()}
            </code>
          </pre>
        </div>
        {/* Copy Button */}
        <button
          onClick={() => copyToClipboard(codeSnippets[activeTab].code)}
          className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default MundoWorldCode;

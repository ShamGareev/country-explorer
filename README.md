# 🌍 Country Explorer

A clean, lightweight frontend web application that allows users to explore country profiles instantly. This project was built to practice asynchronous JavaScript, API integration, and handling network lifecycles (including CORS management).

## 🚀 Features
* **Live API Integration:** Fetches accurate, up-to-date data from the Nager.Date API.
* **Dynamic Flag Rendering:** Communicates with FlagsAPI to instantly load country flags based on ISO codes.
* **Enhanced UX:** Supports both button clicks and pressing the `Enter` key for seamless searching.
* **Robust Error Handling:** Catch-blocks handle typos and network drops gracefully.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3
* **Logic:** Vanilla JavaScript (ES6+ Fetch API)
* **APIs Used:** * [Nager.Date API](https://date.nager.at/)
  * [FlagsAPI](https://flagsapi.com/)

## 📝 What I Learned
* How to manage **Cross-Origin Resource Sharing (CORS)** issues by pivoting to compliant API endpoints.
* How to parse complex JSON objects and dynamically manipulate the DOM to inject content.
* Asynchronous workflow structures using `.then()` and `.catch()` blocks.

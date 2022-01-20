<p align="center">
  <img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/frontend/src/Assets/coffeesteam.gif" width="12%" height="12%" />
</p>

<h1 align="center">
  Expresso: An Online Ordering App
</h1>

## Introduction

Princeton University's Coffee Club, a student-led organization, has already brought together thousands of students since its founding in 2019, with a menu featuring dozens of food and drink options as well as a sit-down venue for people to enjoy each other's company.

The wildly successful Coffee Club ran into what most would consider a great problem to have: long wait times due to queues that went out the door. Given that most students on campus only have minutes to spare to get their daily coffee dose, the Coffee Club staff needed to find a way to keep traffic moving and process orders as quickly as possible. The club's queue system entailed every student to wait on line and order at the register, which proved to be the traffic bottleneck.

Thus, along with four other Princeton students, I helped develop a web application, Expresso, designed exclusively for the Coffee Club that allows anyone with a Princeton University ID (PUID) order online in advance and pick up their completed order the moment they step into the club. This allows students in a hurry to save precious time between classes, meetings, or any of the other numerous obligations college students have.

Expresso was launched early in the 2020 Spring semester and is being used heavily by students across campus.

## About

Expresso was developed in Princeton University's COS 333: Advanced Programming Techniques Fall 2019 course. The frontend is written in JavaScript/React and the backend in Python/Flask. The app is hosted on cPanel. Google Maps API is used for geo-location and the map display. More information about the Coffee Club can be found [here](https://pucoffeeclub.com/). Note that this repository is duplicated from the original repository my team and I worked on (which is a private repository).

## Demo

The web app is live [here](http://coffeeclub.princeton.edu/landing). Anyone can view the landing, team, about, and location pages. Unfortunately, only people with a PUID can login, view the menu, and place orders. For those without a PUID, I've included screen captures of all pages below.

## Screen Captures

### Landing Interface

<img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/landing_page.png" width="49%" height="49%" /> <img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/sidebar.png" width="49%" height="49%" />

<img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/about_page.png" width="49%" height="49%" /> <img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/location_page.png" width="49.5%" height="49.5%" />

### Customer Interface

<img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/menu_page.png" width="49%" height="49%" /> <img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/order_page.png" width="49%" height="49%" />

<img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/FAQ_page.png" width="49%" height="49%" /> <img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/contact_page.png" width="49%" height="49%" />

### Barista Interface

<img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/barista_page.png" width="49%" height="49%" /> <img src="https://raw.githubusercontent.com/spoiledhua/expresso/master/screen_captures/inventory_page.png" width="49%" height="49%" />

## Features

Expresso's main features include:

#### Dual Interface
Customers and baristas have completely different interfaces: Customers can view the menu, add items to their cart, place orders, view order history, send feedback, and more. Baristas can view the queue of orders, complete orders, view order history, change inventory, and more.

#### Secure Login
Customers must login with a valid PUID to view the menu and place orders, and can choose to stay logged in. Baristas must login with a valid username and password to use the barista interface. An admin login also exists and allows more privileges on the barista interface.

#### Online and In-person Payment
Customers can either pay for their order online using their PUID, which will directly charge their Princeton financial account to save time and allow them to grab-and-go, or pay in person at the register. They make this selection before placing their order. (Trivia: We're the first group in COS 333 history to integrate PUID payment into our project.)

#### Delayed Ordering
Customers can either place their order immediately, or select a valid time during Coffee Club hours to place a delayed order. This order will not pop up on the barista interface until the selected time.

#### Notifications
Customers will receive a notification via email after they place an order with details about the order.

#### Menu
Customers can click on any item on the menu to render a popup with more details, along with any add-ons they'd like to make. Baristas can toggle any item's availability on and off which will affect item status on the customer menu, and can enable/disable ordering at any time. Admins can add and remove items from the menu.

#### Tablet and Mobile
Expresso is mobile-friendly—we anticipated that most of our users would place orders through their phones. It is also tablet-friendly since the Coffee Club anticipates providing tablets for baristas to handle orders.

## Additional Information
To learn more about Expresso and see additional details about its functionality from a customer's point of view, navigate to the User's Guide our team wrote [here](https://github.com/spoiledhua/expresso/blob/master/UsersGuide.pdf). To learn about the technical implementation, navigate to the Programmer's Guide we put together [here](https://github.com/spoiledhua/expresso/blob/master/ProgrammersGuide.pdf).

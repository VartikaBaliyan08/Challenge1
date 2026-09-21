# Challenge 1 – Smart Price Finder

## 📌 Overview

Smart Price Finder is a simple web application that helps users find products closest to a target price.

The user enters a price and clicks the **Search** button. The application displays the closest matching products with their name, brand, price, and rating.

## 🎯 Objective

The main goal of this challenge is to find products efficiently without checking every product one by one.

To achieve this, **Binary Search** is used on products sorted according to their price.

## ✨ Features

* Enter a target price
* Search for products near the target price
* Display closest products
* Show product name
* Show brand
* Show price
* Show rating
* View Product button
* Responsive product-card layout

## 🧠 Algorithm Used

### Binary Search

First, the products are sorted by price.

Binary Search is then used to find the position where the target price would be located.

This reduces unnecessary searching compared to checking every product.

### Time Complexity

* Sorting: `O(n log n)`
* Searching: `O(log n)`

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript
* Binary Search

## 📁 Project Structure

```text
Challenge1/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ How to Run

1. Download or clone the repository.
2. Open the `Challenge1` folder.
3. Open `index.html` in a browser.
4. Enter a target price.
5. Click **Search**.
6. The closest products will be displayed.

## 💡 Example

If the user enters:

```text
70000
```

The application can show products such as:

```text
Dell Inspiron 14       ₹68,999
Google Pixel 9         ₹69,999
Lenovo ThinkPad E14    ₹72,999
```

## 👨‍💻 Challenge

**Challenge 1 – Smart Price Finder**

Level: **Medium**

# online-store-buddy

Your task is to implement an online store.

Specific requirements for an online store
Site categories
All users have access to the categories: "About us", "Catalog", "Where to find us?". You also need to make the login and registration button in the menu.
 
About Us page
The company's logo is displayed on the page and the company's motto is written. There is also a slider ("New products of the company") with the five last added products (a photo of the product and its name are displayed).

The Catalog page
By default, the page shows all products, ordered by novelty (from newly added to older ones). You can sort the goods: by year of production, by name, by price. You can also filter products by category (laser printers, inkjet printers, thermal printers). Each product card is represented by an image, name and price. When you click on the product, a separate product page opens. The user is always shown products that are only in stock.

The Product page
Each page contains a photo of the product, name, price and characteristics (country of origin, year of manufacture, model).

The page "Where can I find us?"
contains a map and contact information (address, phone number, email).

Registering a new client
The registration form for a new user in the system must contain the following fields:
• name - required field, allowed characters (Cyrillic, space and dash):
• surname - required field, allowed characters (Cyrillic, space and dash);
• patronymic - optional field, allowed characters (Cyrillic, space and dash);
• login is a mandatory and unique field, allowed characters (Latin letters, numbers and dashes);
• email is a mandatory and unique field, email verification:
• password - required field, at least 6 characters;
• password repeat - required field, must match the password field:
• rules - agreement with the registration rules.
In case of validation errors, messages should be displayed to the user without reloading the page.

Authentication
The user's authorization form in the system must contain the following fields:
• login;
•	password.
In case of validation errors, messages should be displayed to the user.

Exit
Allows the user to make a logout, then redirects to the "About us" page.

Client functionality
Creating a basket
After authorization, the user has a "Add to cart" button on the product cards in the catalog, as well as on the product page itself. Each click adds 1 item to the cart. You cannot add more items to the cart than are

available (an error message is displayed without reloading the page).

Managing the shopping cart
You can add or remove a unit of each product in the cart (taking into account the restrictions on the quantity in stock). After that, the user can create an order.

Making an order
The user enters his password to confirm the order and clicks the "Generate order" button (an error message is displayed without reloading the page in case of incorrect password entry).

Viewing orders
The user can view a list of his orders (each has the number of products, its name and their status), ordered from new to old. The user also has the option to delete new orders.

The functionality of the administrator
View a list of all orders
The administrator can view all orders, filtering them by: new, confirmed, canceled. The list shows the timestamp of the order, the customer's full name and the number of ordered goods. By default, all orders have the status "New".

Order Management
The administrator can cancel the order by specifying the reason for the refusal or confirm the order.

Product Management
The administrator publishes, deletes and edits products.

Viewing orders
The user can view a list of his orders (each has the number of products, its name and their status), ordered from new to old. The user also has the option to delete new orders.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/online-store-buddy.git
cd online-store-buddy
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

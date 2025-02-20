import csv
import os
import uuid
from datetime import datetime
from utils.validations import validate_product
from utils.file_handler import read_csv, write_to_csv
from models.product import Product

PRODUCTS_FILE = "data/products.csv"

def add_product(name, price, category):
    product_id = str(uuid.uuid4())
    created_at = datetime.today().strftime("%Y-%m-%d")

    new_product = Product(product_id=product_id, created_at=created_at, name=name, price=float(price), category=category)

    if not validate_product(new_product):
        print("❌ Invalid product data! Please check the input values.")
        return

    products = read_csv(PRODUCTS_FILE)
    products.append(new_product.to_dict())
    write_to_csv(PRODUCTS_FILE, products)
    print ("Product added successfully!")

def update_product(product_name):
    products = read_csv(PRODUCTS_FILE)

    matching_products = [p for p in products if product_name.lower() in p["name"].lower()]

    if not matching_products:
        print("❌ No matching products found.")
        return

    if len(matching_products) > 1:
        print("\n🔍 Multiple products found. Please choose one:")
        for index, product in enumerate(matching_products, start=1):
            print(f"{index}. {product['name']} - ${product['price']} - {product['category']}")

        try:
            choice = int(input("\nEnter the number of the product to update: ")) - 1
            if choice < 0 or choice >= len(matching_products):
                print("❌ Invalid selection.")
                return
        except ValueError:
            print("❌ Please enter a valid number.")
            return

        product_to_update = matching_products[choice]
    else:
        product_to_update = matching_products[0]

    #Prompt new values

    new_name = input(f"Enter new name ({product_to_update['name']}): ").strip() or product_to_update["name"]
    new_price = input(f"Enter new price (${product_to_update['price']}): ").strip() or product_to_update["price"]
    new_category = input(f"Enter new category ({product_to_update['category']}): ").strip() or product_to_update["category"]

    try:
        new_price = float(new_price)
    except ValueError:
        print("❌ Invalid price format! Update canceled.")
        return

    for product in products:
        if product["product_id"] == product_to_update["product_id"]: 
            product["name"] = new_name
            product["price"] = new_price
            product["category"] = new_category
            break

    write_to_csv(PRODUCTS_FILE, products)
    print("✅ Product updated successfully!")

def delete_product(product_name):
    products = read_csv(PRODUCTS_FILE)

    matching_products = [p for p in products if product_name.lower() in p["name"].lower()]

    if not matching_products:
        print("❌ No matching products found.")
        return


    if len(matching_products) > 1:
        print("\n🔍 Multiple products found. Please choose one to delete:")
        for index, product in enumerate(matching_products, start=1):
            print(f"{index}. {product['name']} - ${product['price']} - {product['category']}")

        try:
            choice = int(input("\nEnter the number of the product to delete: ")) - 1
            if choice < 0 or choice >= len(matching_products):
                print("❌ Invalid selection.")
                return
        except ValueError:
            print("❌ Please enter a valid number.")
            return

        product_to_delete = matching_products[choice]
    else:
        product_to_delete = matching_products[0]

    confirm = input(f"⚠️ Are you sure you want to delete '{product_to_delete['name']}'? (yes/no): ").strip().lower()
    if confirm != "yes":
        print("❌ Deletion canceled.")
        return

    products = [p for p in products if p["product_id"] != product_to_delete["product_id"]]

    write_to_csv(PRODUCTS_FILE, products)
    print(f"✅ Product '{product_to_delete['name']}' deleted successfully!")

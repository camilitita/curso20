import os
from utils.validations import validate_product_name, validate_price
from utils.validations import valid_email, validate_name
from models.product import Product
from models.user import User
from utils.file_handler import read_csv, write_to_csv
from controllers.product_controller import add_product, update_product, delete_product
from controllers.user_controller import add_user, update_user, delete_user


def clear_screen():
  """Clears the console screen."""
  os.system('cls' if os.name == 'nt' else 'clear')

def main_menu():
  while True:
    clear_screen()
    print("\n📦 Inventory System Menu 📦")
    print("1️⃣  Manage Products")
    print("2️⃣  Manage Users")
    print("3️⃣  Exit")

    choice = input("\nEnter your choice: ")

    if choice == "1":
      product_menu()
    elif choice == "2":
      user_menu()
    elif choice == "3":
      print("\nGoodbye! 👋")
      break
    else:
      input("\n❌ Invalid choice! Press Enter to try again.")

def product_menu():
  while True:
    clear_screen()
    print("\n🛒 Product Management")
    print("1️⃣  Add Product")
    print("2️⃣  Update Product")
    print("3️⃣  Delete Product")
    print("4️⃣  Search Product")
    print("5️⃣  List Products (Paginated)")
    print("6️⃣  Back to Main Menu")

    choice = input("\nEnter your choice: ")

    if choice == "1":

      name = input("\nEnter product name: ")
      if not validate_product_name(name):
        input("❌ Invalid name! Press Enter to retry.")
        continue

      price = input("Enter product price: ")
      if not validate_price(price):
        input("❌ Invalid price! Press Enter to retry.")
        continue

      category = input("Enter product category: ").strip()
      if not category:
        input("❌ Invalid category! Press Enter to retry.")
        continue

      add_product(name, price, category)
      input("\n✅ Product added successfully! Press Enter to continue.")

    elif choice == "2":
      name = input("\nEnter product name to update: ")
      update_product(name)
      input("\n✅ Product updated successfully! Press Enter to continue.")

    elif choice == "3":
      name = input("\nEnter product name to delete: ")
      delete_product(name)
      input("\n✅ Product deleted successfully! Press Enter to continue.")

    #elif choice == "4":
      #query = input("\nEnter product name to search: ")
      #results = search_product(query)
      #print("\n🔍 Search Results:")
      #paginate(results)

    #elif choice == "5":
      #print("\n📋 Product List:")
      #products = list_products()
      #paginate(products)

    elif choice == "6":
      break

    else:
      input("\n❌ Invalid choice! Press Enter to try again.")

def user_menu():
  while True:
    clear_screen()
    print("\n👤 User Management")
    print("1️⃣  Add User")
    print("2️⃣  Update User")
    print("3️⃣  Delete User")
    print("4️⃣  Search User")
    print("5️⃣  List Users (Paginated)")
    print("6️⃣  Back to Main Menu")

    choice = input("\nEnter your choice: ")

    if choice == "1":
      name = input("\nEnter user name: ")
      if not validate_name(name):
        input("❌ Invalid name! Press Enter to retry.")
        continue

      email = input("Enter user email: ")
      if not valid_email(email):
        input("❌ Invalid email! Press Enter to retry.")
        continue

      phone = input("Enter phone number: ")
      address = input("Enter address: ")

      added = add_user(name, email, phone, address)
      if added:
        input("\n✅ User added successfully! Press Enter to continue.")
      else:
        input("\n❌ Failed to add user! Press Enter to retry.")

    elif choice == "2":
      name = input("\nEnter user name to update: ")
      update_user(name)
      input("\n✅ User updated successfully! Press Enter to continue.")

    elif choice == "3":
      name = input("\nEnter user nameto delete: ")
      delete_user(name)
      input("\n✅ User deleted successfully! Press Enter to continue.")

    #elif choice == "4":
      #query = input("\nEnter user name or email to search: ")
      #results = search_user(query)
      #print("\n🔍 Search Results:")
      #paginate(results)

    #elif choice == "5":
        #print("\n📋 User List:")
        #users = list_users()
        #paginate(users)

    elif choice == "6":
      break

    else:
      input("\n❌ Invalid choice! Press Enter to try again.")

if __name__ == "__main__":
    main_menu()
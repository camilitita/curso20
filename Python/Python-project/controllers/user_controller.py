from models.user import User
from utils.validations import valid_email, email_exists
from utils.file_handler import read_csv, write_to_csv

def add_user(name, phone, address, email):
  if not valid_email(email):
    print("Error: Invalid email format!")
    return False

  if email_exists(email):
    print("Error: Email already exists!")
    return False

  new_user = User(name, phone, address, email)

  users = read_csv("data/users.csv")

  users.append({"name": new_user.name,
                "phone": new_user.phone,
                "address": new_user.address,
                "email": new_user.email,
                "created_at": new_user.created_at})

  write_to_csv("data/users.csv", users, ["name", "phone", "address", "email","created_at"])
  print("User added successfully!")
  return True

def update_user(name):

  users = read_csv("data/users.csv")

  matching_users = [p for p in users if name.lower() in p["name"].lower()]

  if not matching_users:
    print("❌ No matching users found.")
    return

  if len(matching_users) > 1:
    print("\n🔍 Multiple users found. Please choose one to update:")
    for index, user in enumerate(matching_users, start=1):
      print(f"{index}. {user['name']} - {user['phone']} - {user['address']} - {user['email']}")

    try:
      choice = int(input("\nEnter the number of the user to update: ")) - 1
      if choice < 0 or choice >= len(matching_users):
        print("❌ Invalid selection.")
        return
    except ValueError:
      print("❌ Please enter a valid number.")
      return

    user_to_update = matching_users[choice]
  else:
    user_to_update = matching_users[0]

  #New values
  new_name = input(f"Enter new name: ({user_to_update['name']}): ").strip() or user_to_update["name"]
  new_phone = input(f"Enter new phone: ({user_to_update['phone']}): ").strip() or user_to_update["phone"]
  new_address = input(f"Enter new address: ({user_to_update['address']}): ").strip() or user_to_update["address"]
  new_email = input(f"Enter new email: ({user_to_update['email']}): ").strip() or user_to_update["email"]

  if new_email != user_to_update["email"]:
    if not valid_email(new_email):
      print("❌ Invalid email format!")
      return
    if email_exists(new_email):
      print("❌ Email already exists!")
      return

  for user in users:
    if user["email"] == user_to_update["email"]:
      user["name"] = new_name
      user["phone"] = new_phone
      user["address"] = new_address
      user ["email"] = new_email
      break

  #Save changes
  write_to_csv("data/users.csv", users, ["name", "phone", "address", "email","created_at"])
  print("User updated successfully!")

def delete_user(name):
  users = read_csv("data/users.csv")

  matching_users = [p for p in users if name.lower() in p["name"].lower()]

  if not matching_users:
    print("❌ No matching users found.")
    return

  if len(matching_users) > 1:
    print("\n🔍 Multiple users found. Please choose one to delete:")
    for index, user in enumerate(matching_users, start=1):
      print(f"{index}. {user['name']} - {user['phone']} - {user['address']} - {user['email']}")

    try:
      choice = int(input("\nEnter the number of the user to delete: ")) - 1
      if choice < 0 or choice >= len(matching_users):
        print("❌ Invalid selection.")
        return
      user_to_delete = matching_users[choice]
    except ValueError:
      print("❌ Please enter a valid number.")
      return
  else:
    user_to_delete = matching_users[0]

  confirm = input(f"⚠️ Are you sure you want to delete '{user_to_delete['name']}'? (yes/no): ").strip().lower()
  if confirm not in ["yes", "y"]:
    print("❌ Deletion canceled.")
    return

  users = [user for user in users if user["email"] != user_to_delete["email"]]

  write_to_csv("data/users.csv", users, ["name", "phone", "address", "email","created_at"])
  print("User deleted successfully!")

import re
#Users
def valid_email(email):
  email_pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
  return bool(re.match(email_pattern, email))

def email_exists(email, filename="data/users.csv"):
  """Checks if the email is already registered."""
  users = read_csv(filename)
  return any(user["email"] == email for user in users)

#Products
def validate_id(product_id):
  return bool(re.fullmatch("^[a-zA-Z0-9]+$", product_id))
def validate_product_name(name):
  return bool(re.fullmatch("^[a-zA-Z0-9\\s]+$", name))
def validate_price(price):
  return bool(re.fullmatch("^\\d+(\\.\\d{1,2})?$", price))

def validate_category(category):
  return bool(re.fullmatch("^[a-zA-Z0-9\\s]+$", category))

def validate_creation_date(date):
  return bool(re.fullmatch("^\\d{4}-\\d{2}-\\d{2}$", date))

def validate_product(product):
  print(f"Validating Product: {product.product_id}, {product.name}, {product.price}, {product.category}, {product.created_at}")

  if not validate_id(product.product_id):
    print("❌ Failed ID validation")
    return False

  if not validate_product_name(product.name):
    print("❌ Failed Name validation")
    return False

  if not validate_price(product.price):
    print("❌ Failed Price validation")
    return False

  if not validate_category(product.category):
    print("❌ Failed Category validation")
    return False

  if not validate_creation_date(product.created_at):
    print("❌ Failed Date validation")
    return False

  print("✅ Product validation passed!")
  return True
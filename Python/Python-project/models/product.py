import uuid
from datetime import datetime
from utils.validations import validate_product

class Product:
  def __init__ (self, product_id, name, price, category, created_at=None):
    self.product_id = str(uuid.uuid4())[:8]
    self.name = name
    self.price = price
    self.category = category
    self.created_at = created_at if created_at else datetime.today().strftime('%Y-%m-%d')

    if not validate_product(self):
      print(f"Failed validation for product: {self.name}, {self.price}, {self.category}")
      raise ValueError("Invalid product data! Please check the input values.")

  def to_dict(self):
    return {
      "product_id": self.product_id,
      "name": self.name,
      "price": self.price,
      "category": self.category,
      "created_at": self.created_at
    }

  def __str__(self):
    return f"ID: {self.product_id}, Name: {self.name}, Price: ${self.price}, Category: {self.category}, Added: {self.created_at}"

import datetime
import csv
from utils.validations import valid_email, email_exists
class User:
  def __init__(self, name, email, phone, address):
    if not valid_email(email):
      raise ValueError("Invalid email format.")

    if email_exists(email):
      raise ValueError("This email is already registered.")

    self.name = name
    self.email = email
    self.phone = phone
    self.address = address

  def to_dict(self):
    return {
      "name": self.name,
      "phone": self.phone,
      "address": self.address,
      "email": self.email}


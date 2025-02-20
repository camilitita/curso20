import csv
def write_to_csv(filename, data):
  if not data:
    return
  with open(filename, mode="w", newline="") as file:
    fieldnames = data[0].keys()
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    if file.tell() == 0:
      writer.writeheader()
    writer.writerows(data)
def read_csv(filename):
  try:
    with open(filename, mode="r", newline="") as file:
      reader = csv.DictReader(file)
      return list(reader)
  except FileNotFoundError:
    return []
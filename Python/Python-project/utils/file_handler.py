def write_to_csv(filename, data):

  with open(filename, mode="a", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=data.keys())

  if file.tell() == 0:
    writer.writeheader()

  writer.writerow(data)

def read_csv(filename):
  try:
    with open(filename, mode="r", newline="") as file:
      reader = csv.DictReader(file)
      return list(reader)
  except FileNotFoundError:
    return []
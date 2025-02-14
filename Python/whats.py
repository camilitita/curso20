#import pywhatkit
import pywhatkit as kit
import datetime
now = datetime.datetime.now()

if(now.minute + 1 == 60):
  now.hour += 1
  now.minute = 0

#kit.sendwhatmsg_to_group("EaQFEvBbbpvE82ZpJn5vdr", "Este mensaje es un mensaje de prueba, ojala funcione", now.hour, now.minute + 1, 20, True)
#print("Mensaje Enviado")

numbers = [
  {
    "name": "Kika",
    "numero": "+584243370875"
  },
  {
    "name": "Nat",
    "numero": "+584124694535"
  },
  {
    "name": "Naka",
    "numero": "58 424-3057915"
  }
]

for number in numbers:
  kit.sendwhatmsg(number["numero"], f"Holaaa esto es con un bot")

#Making a software that scraps data from wikipedia and stores it in a file
import time
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


links = [
  "https://en.wikipedia.org/wiki/Taylor_Swift",
  "https://en.wikipedia.org/wiki/Olivia_Rodrigo",
  "https://en.wikipedia.org/wiki/Sabrina_Carpenter"
]
#Open the browser
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

#Open the links
try:
  for link in links:
    driver.get(link)
    time.sleep(5)

    try:
      #Get the title
      title = driver.find_element(By.TAG_NAME, "h1").text
      #Get the content
      content = driver.find_element(By.ID,"mw-content-text").text
      #Create a safe filename
      filename = f"{title}.txt".replace(" ","_").replace("/","-")
      #Save content to file
      with open(filename, "w", encoding="utf-8") as file:
        file.write(content)

      print (f"Succesfully saved: {filename}")

    except Exception as e:
      print (f"Error scraping {link}: {e}")

finally:
  #Close the browser when finished
  driver.quit()



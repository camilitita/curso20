#Create an AI assistant that can answer any question you ask it
import openai

const openai = new OpenAI()

const completation = client.chat.completions.create(
  model="gpt-4o",
  messages=[
    {"role": "developer", "content": "You are a helpful assistant."},
    {
      "role": "user",
      "content": "Write a haiku about recursion in programming"
    }
  ]
)

print(completion.choices[0].message)



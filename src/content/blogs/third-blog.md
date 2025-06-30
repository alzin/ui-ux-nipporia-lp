---
title: "LangChain for Beginners: Easy Setup and Introduction"
date: "2024-09-15"
description: "numquam Perspiciatis dolor est ad consequuntur. Magni qui autem. Mollitia perspiciatis eos rerum excepturi omnis est harum. Vel id et animi ut fugit est. Saepe facere neque dolorum sapiente quod deserunt accusantium. Qui omnis qui aut accusamus nisi."
images: ["/images/blogs/third-blog.png"]
tags: ["LangChain", "LLMs", "OpenAI API"]
---

[LangChain](https://www.langchain.com/) is a framework that should simplify the creation of applications that use LLM (Large Language Models).

### LangChain UseCases

- Creating chatbot applications for customer services.
- Building tools for automated content generation.
- Building systems for information extraction and analysis from large texts.
- Others (It might be fine to imagine any application you want).

### Installation Step

I use [Google Colab](https://colab.research.google.com/) to run and test the code.

First, we need to install [LangChain Community](https://pypi.org/project/langchain-community/) and [Openai](https://pypi.org/project/openai/) to define a prompt and send requests to [OpenAI](https://openai.com/) API like achieving the result as we talk to [ChatGPT](https://chatgpt.com/).

```bash
!pip install langchain-community
!pip install openai
```

Here are the libraries that are installed with the `!pip install langchain-community` command:

- [dataclasses-json](https://pypi.org/project/dataclasses-json/)
- [h11](https://pypi.org/project/h11/)
- [httpcore](https://pypi.org/project/httpcore/)
- [httpx](https://pypi.org/project/httpx/0.23.1/)
- [jsonpatch](https://pypi.org/project/jsonpatch/)
- [jsonpointer](https://pypi.org/project/jsonpointer/)
- [langchain](https://pypi.org/project/langchain/)
- [langchain-core](https://pypi.org/project/langchain-core/)
- [langchain-text-splitters](https://pypi.org/project/langchain-text-splitters/)
- [langsmith](https://pypi.org/project/langsmith/)
- [marshmallow](https://pypi.org/project/marshmallow/)
- [mypy-extensions](https://pypi.org/project/mypy-extensions/)
- [orjson](https://pypi.org/project/orjson/2.0.1/)
- [tenacity](https://pypi.org/project/tenacity/)
- [typing-inspect](https://pypi.org/project/typing-inspect/)

```python
  from langchain.llms import OpenAI
  from langchain.prompts import PromptTemplate
  from langchain.chains import LLMChain
```

We import OpenAI, enabling us to communicate with GPT's models using an API key.

Then, we import PromptTemplate which allows us to define a general prompt with some variable inputs that would be dynamic texts.

Then, LLMChain is used to connect both the LLM instance with the prompt so it executes the prompt and returns the result.

### Define LLM instance

```python
# Inilialize the GPT (gpt-3.5-turbo-instruct) as our LLM
llm = OpenAI(temperature=0.7)
```

But after running this code we get this error:

_Did not find openai_api_key, please add an environment variable_ `OPENAI_API_KEY` _which contains it, or pass_ `openai_api_key` _as a named parameter. (type=value_error)_

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1724218248163/34972618-0622-44d0-80d8-69617c71c089.png align="center")

### Add OpenAI API Key to Google Colab

[platform.openai.com](https://platform.openai.com/api-keys)

So this is a good time for you to go and create a new API key so we can use OpenAI LLM models.

Now, we need to use the OpenAI API key and there are many ways to put it securely in an environment. But this time I use the Google Colab default one which you can define in the Secrets of the Notebook.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1724220980173/4a04872f-fcf1-4be2-87d3-3ebb6351cdee.png align="center")

```python
from google.colab import userdata
OPENAI_API_KEY = userdata.get('OPENAI_API_KEY')

# Inilialize the GPT (gpt-3.5-turbo-instruct) as our LLM
llm = OpenAI(temperature=0.7, openai_api_key = OPENAI_API_KEY)
print(llm)
```

`OpenAI Params: {'model_name': 'gpt-3.5-turbo-instruct', 'temperature': 0.7, 'top_p': 1.0, 'frequency_penalty': 0.0, 'presence_penalty': 0.0, 'n': 1, 'logit_bias': {}, 'max_tokens': 256}`

As you can see here the default parameters are already set for us.

Usually, we need to think about the model we might use and its operating temperature. Each model has different capabilities. You can think of the temperature here as a variable value between zero and one. The closer to zero the more the output will be factual and maybe shorter. The closer to one the response be more likely imagining more details in writing its output text. So play with it to see how it is best depending on your use case.

### Define a senior SEO writer prompt template

```python
template = """
You are a senior SEO writer and your job is to do the following:
  Write about {topic}.
  Write the article response in the following JSON format.
  Make sure of new line to be presented via use \\n.
  {json_format}
"""
```

So here I choose a use case where I want the model to write articles that might support SEO. Feel free to change the prompt template and add as many input variables as needed depending on your scenario.

If you notice I define two dynamic texts the **topic** of the article and the **json_format** of the output so each time I can change it to get different article formats depending on the need.

```python
prompt = PromptTemplate(
    input_variables=["topic", "json_format"],
    template=template
)
print(prompt)
```

### Create LLMChain instance

Next, let's define the **chain** taking the responsibility of invoking our **llm** using the defined **prompt** by passing in the input variables.

```python
chain = LLMChain(llm=llm, prompt=prompt)
print(chain)
```

Now, the chain is available for us to use it.

```python
# An example article topic
article_topic = "The best ways to teach your kids coding online"

# An example wanted article format
article_format =  """
{
    "title": "Title of the article",
    "body": "Body of the article"
}
"""

response = chain.invoke({"topic": article_topic, "json_format": article_format})
#print(response)

# Extract the text (which should be a JSON string) from the response
text = response['text']
print(text)
```

`{ "title": "The Best Ways to Teach Your Kids Coding Online", "body": "In today's digital age, coding has become an essential skill that can open up endless opportunities for children. Teaching your kids how to code not only prepares them for future careers in technology, but also enhances their problem-solving and critical thinking skills. With the rise of online learning, there are now more options than ever for parents to introduce their kids to coding. Here are some of the best ways to teach your kids coding online:\n\n1. Interactive Coding Games and Apps\nOne of the most engaging ways to teach coding to kids is through interactive games and apps. There are numerous options available, such as Scratch,` [`Code.org`](http://Code.org)`, and Tynker, which use fun and interactive methods to introduce coding concepts to children. These platforms offer a variety of games, puzzles, and challenges that can keep kids entertained while they learn the fundamentals of coding.\n\n2. Online Coding Courses\nMany online learning platforms, such as Udemy, Coursera, and Khan Academy, offer coding courses specifically designed for kids. These courses are taught by experienced instructors and cover a wide range of topics, from basic coding concepts to advanced programming languages. The advantage of these courses is that`

If you notice here, we get almost the format that we requested the model to follow but it stopped suddenly without any excuses on

`The advantage of these courses is that`

Do you know the reason?

It is because if you have noticed above the `max_tokens` is by default `256`

### Token calculation using tiktoken

Let's make sure that the output text is really `256`, we need to install the [tiktoken](https://github.com/openai/tiktoken):

```python
import tiktoken

# Load the encoding model based on the OpenAI model you are using.
encoding = tiktoken.encoding_for_model("gpt-3.5-turbo-instruct")

# Encode the text to tokens
tokens = encoding.encode(json_text)

# Count the number of tokens
num_tokens = len(tokens)

# Display the number of tokens
print(f"Number of tokens: {num_tokens}")
```

`Number of tokens: 256`

I think here we have two different solutions, either we limit the number of words that should be generated by editing the prompt or we might increase the parameter `max_tokens` giving the mode an extra space for creativity. However, please note that higher`max_tokens` would be, the higher the pay to OpenAI API would be too.

I choose to increase the number of tokens available for the `gpt-3.5-turbo-instruct` to the max [gpt-3-5-turbo](https://platform.openai.com/docs/models/gpt-3-5-turbo) of **4,096 tokens.**

```python
llm = OpenAI(temperature=0.7, openai_api_key = OPENAI_API_KEY, max_tokens=4096)
print(llm)

# Update the chain instance with the new llm
chain = LLMChain(llm=llm, prompt=prompt)
```

`OpenAI Params: {'model_name': 'gpt-3.5-turbo-instruct', 'temperature': 0.7, 'top_p': 1.0, 'frequency_penalty': 0.0, 'presence_penalty': 0.0, 'n': 1, 'logit_bias': {}, 'max_tokens': 4096}`

### Define another article format

```python
article_topic = "The best ways to teach your kids coding online"

article_format =  """
{
    "title": "",
    "meta_description": "",
    "introduction": "",
    "body": ""
}
"""
```

`BadRequestError: Error code: 400 - {'error': {'message': "This model's maximum context length is 4097 tokens, however you requested 4176 tokens (80 in your prompt; 4096 for the completion). Please reduce your prompt; or completion length.", 'type': 'invalid_request_error', 'param': None, 'code': None}}`

I got another error, do you know why?

Yes, as the error message says that we request `4176` so we need to remove 80 for the prompt from the maximum available tokens:

4096 - 80 = 4016 tokens we can pass

Note that if you have a different prompt. You would need to do your calculation too.

```python
llm = OpenAI(temperature=0.7, openai_api_key = OPENAI_API_KEY, max_tokens=4016)
print(llm)

# Update the chain instance with the new llm
chain = LLMChain(llm=llm, prompt=prompt)
```

```python
response = chain.invoke({"topic": article_topic, "json_format": article_format})
json_text = response['text']
print(json_text)
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1724251401046/aa0b48f6-3fc6-4123-9389-3d082b123c6f.png align="center")

```python
import json

# Convert the JSON string to a Python dictionary
article_data = json.loads(json_text)

# Now you can access any key value pair in the json
print(article_data["title"])
print(article_data["meta_description"])
```

`The Best Ways to Teach Your Kids Coding Online Discover the top methods for introducing your children to coding through online resources.`

Please let me know if you have any questions in the comment below.
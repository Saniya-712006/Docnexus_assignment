from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

def generate_email(campaign_data):

    prompt = f"""
You are an AI healthcare outreach assistant.

Generate a personalized outreach email template.

Campaign Name:
{campaign_data["campaignName"]}

Campaign Type:
{campaign_data["campaignType"]}

Requirements:

- Professional
- Healthcare focused
- Use these placeholders exactly:

{{{{doctor_name}}}}
{{{{specialty}}}}
{{{{affiliation}}}}

- Mention specialty
- Mention affiliation
- Include a clear call to action
- Keep under 150 words

Return EXACTLY:

SUBJECT:
<subject>

BODY:
<body>
"""

    completion = client.chat.completions.create(

        model="llama-3.3-70b-versatile",

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return (
        completion
        .choices[0]
        .message.content
    )
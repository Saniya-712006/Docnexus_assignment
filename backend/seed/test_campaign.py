import sys
import os

sys.path.append(
    os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..")
    )
)

from config import db
from models.campaign_model import create_campaign
from models.sequence_step_model import create_sequence_step

step1 = create_sequence_step(
    1,
    0,
    "Introduction",
    "Hello {{doctor_name}}"
)

step2 = create_sequence_step(
    2,
    5,
    "Follow Up",
    "Just checking in"
)

campaign = create_campaign(
    "Test Campaign",
    "cold_outbound",
    [],
    [step1, step2]
)

db.campaigns.insert_one(campaign)

print("Campaign inserted")
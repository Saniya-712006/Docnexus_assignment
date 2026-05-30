from config import db
from models.campaign_model import create_campaign


def save_campaign(
    name,
    campaign_type,
    enrolled_physician_ids,
    sequences
):
    campaign = create_campaign(
        name,
        campaign_type,
        enrolled_physician_ids,
        sequences
    )

    result = db.campaigns.insert_one(campaign)

    campaign["_id"] = str(result.inserted_id)

    return campaign
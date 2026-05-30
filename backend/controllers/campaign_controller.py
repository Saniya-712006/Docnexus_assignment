from config import db
from models.campaign_model import create_campaign
from bson import ObjectId

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


def launch_campaign(campaign_id):

    db.campaigns.update_one(
        {"_id": ObjectId(campaign_id)},
        {
            "$set": {
                "status": "active"
            }
        }
    )

    campaign = db.campaigns.find_one(
        {"_id": ObjectId(campaign_id)}
    )

    campaign["_id"] = str(
        campaign["_id"]
    )

    return campaign


def get_all_campaigns():

    campaigns = list(
        db.campaigns.find()
    )

    for campaign in campaigns:

        campaign["_id"] = str(
            campaign["_id"]
        )

    return campaigns


def get_campaign_by_id(campaign_id):

    campaign = db.campaigns.find_one(
        {"_id": ObjectId(campaign_id)}
    )

    if not campaign:
        return None

    campaign["_id"] = str(
        campaign["_id"]
    )

    return campaign
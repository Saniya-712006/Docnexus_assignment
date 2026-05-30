import uuid
from datetime import datetime


def create_campaign(
    name,
    campaign_type,
    enrolled_physician_ids,
    sequences
):
    return {
        "id": str(uuid.uuid4()),
        "name": name,
        "type": campaign_type,
        "status": "draft",
        "createdAt": datetime.utcnow().isoformat(),
        "enrolledPhysicianIds": enrolled_physician_ids,
        "sequences": sequences
    }
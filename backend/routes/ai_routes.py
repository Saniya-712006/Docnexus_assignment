from flask import (
    Blueprint,
    request
)

from controllers.ai_controller import (
    generate_email
)


ai_bp = Blueprint(
    "ai",
    __name__
)

@ai_bp.route(
    "/ai/generate-email",
    methods=["POST"]
)
def generate():

    campaign_data = request.json

    result = generate_email(
        campaign_data
    )

    return {
        "email": result
    }
from flask import Blueprint, request, jsonify

from controllers.campaign_controller import save_campaign

campaign_bp = Blueprint(
    "campaign_bp",
    __name__
)


@campaign_bp.route(
    "/campaigns",
    methods=["POST"]
)
def create_campaign_route():

    data = request.get_json()

    campaign = save_campaign(
        data["name"],
        data["type"],
        data["enrolledPhysicianIds"],
        data["sequences"]
    )

    return jsonify(campaign), 201
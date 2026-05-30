from flask import Blueprint, request, jsonify

from controllers.campaign_controller import get_all_campaigns, save_campaign,get_campaign_by_id
campaign_bp = Blueprint(
    "campaign_bp",
    __name__
)

from controllers.campaign_controller import (
    save_campaign,
    launch_campaign
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


@campaign_bp.route(
    "/campaigns/<campaign_id>/launch",
    methods=["PATCH"]
)
def launch_campaign_route(campaign_id):

    result = launch_campaign(
        campaign_id
    )

    return jsonify(result), 200


@campaign_bp.route(
    "/campaigns",
    methods=["GET"]
)
def get_campaigns_route():

    campaigns = get_all_campaigns()

    return jsonify(
        campaigns
    ), 200


@campaign_bp.route(
    "/campaigns/<campaign_id>",
    methods=["GET"]
)
def get_campaign_route(campaign_id):

    campaign = get_campaign_by_id(
            campaign_id
        )

    if not campaign:

        return jsonify(
            {"error": "Not found"}
        ), 404

    return jsonify(
        campaign
    ), 200
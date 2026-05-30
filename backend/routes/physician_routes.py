from flask import Blueprint, jsonify, request
from config import db

physician_bp = Blueprint("physician_bp", __name__)


@physician_bp.route("/physicians", methods=["GET"])
def get_physicians():

    query = {}

    specialty = request.args.get("specialty")
    state = request.args.get("state")
    affiliation = request.args.get("affiliation")

    if specialty:
        query["specialty"] = specialty

    if state:
        query["state"] = state

    if affiliation:
        query["affiliation"] = affiliation

    physicians = list(db.physicians.find(query))

    for physician in physicians:
        physician.pop("_id", None)

    return jsonify(physicians)
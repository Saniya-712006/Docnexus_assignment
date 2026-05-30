from flask import Flask
from flask_cors import CORS
from config import db
from routes.physician_routes import physician_bp
from routes.campaign_routes import campaign_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(physician_bp)
app.register_blueprint(campaign_bp)

@app.route("/")
def home():
    count = db.physicians.count_documents({})
    return {
        "message": "Backend running",
        "physician_count": count
    }

if __name__ == "__main__":
    app.run(debug=True)
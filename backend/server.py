from flask import Flask, jsonify

app = Flask(__name__)


@app.after_request
def apply_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.get("/api/status")
def api_status():
    return jsonify(
        {
            "status": "OK",
            "users": 12,
            "uptime": "5h 23m",
        }
    )


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)

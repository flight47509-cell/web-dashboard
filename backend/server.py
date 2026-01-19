from flask import Flask, jsonify

app = Flask(__name__)


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

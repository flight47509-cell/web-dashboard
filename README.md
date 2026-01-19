# System Dashboard

Simple web dashboard with a Flask backend and vanilla frontend.

## Install dependencies

```bash
cd dashboard/backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

## Run the backend

```bash
cd dashboard/backend
python server.py
```

The API will be available at `http://127.0.0.1:5000/api/status`.

## Open the frontend

Open `dashboard/frontend/index.html` in your browser. The cards will load data from the backend.

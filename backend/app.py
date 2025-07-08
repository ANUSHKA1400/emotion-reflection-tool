# backend/app.py
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time

# Initialize FastAPI app
app = FastAPI(
    title="Emotion Reflection Tool API",
    description="A simple API for mock emotion analysis.",
    version="1.0.0",
)

# Configure CORS middleware
# This allows your React frontend (running on localhost:3000) to make requests to this API (localhost:8000)
origins = [
    "http://localhost",
    "http://localhost:3000", # Your React frontend URL
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allow all methods (GET, POST, etc.)
    allow_headers=["*"], # Allow all headers
)

# Define a Pydantic model for the request body
class TextInput(BaseModel):
    text: str

# Define a Pydantic model for the response body
class EmotionResponse(BaseModel):
    emotion: str
    confidence: float

@app.post("/analyze", response_model=EmotionResponse)
async def analyze_emotion(input_data: TextInput):
    """
    API endpoint to receive text input and return a mock emotion analysis.
    Expects a JSON payload with a 'text' field.
    Returns a JSON response with 'emotion' and 'confidence'.
    """
    text = input_data.text

    if not text:
        raise HTTPException(status_code=400, detail="Missing 'text' in request body")

    # --- Mock Emotion Analysis Logic ---
    lower_text = text.lower()

    emotion = "Neutral"
    confidence = 0.60

    if "nervous" in lower_text or "anxious" in lower_text or "worried" in lower_text:
        emotion = "Anxious"
        confidence = 0.85
    elif "happy" in lower_text or "joy" in lower_text or "excited" in lower_text:
        emotion = "Joyful"
        confidence = 0.90
    elif "sad" in lower_text or "unhappy" in lower_text or "depressed" in lower_text:
        emotion = "Sad"
        confidence = 0.75
    elif "angry" in lower_text or "frustrated" in lower_text or "mad" in lower_text:
        emotion = "Angry"
        confidence = 0.80
    elif "calm" in lower_text or "relaxed" in lower_text or "peaceful" in lower_text:
        emotion = "Calm"
        confidence = 0.92

    # Simulate a small delay to show loading state
    time.sleep(1.5)

    return EmotionResponse(emotion=emotion, confidence=confidence)

# You don't need if __name__ == '__main__': for Uvicorn as it's run via command line
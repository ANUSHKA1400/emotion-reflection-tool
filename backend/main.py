from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

# Allow requests from your frontend (React running on localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Change if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request body model
class TextInput(BaseModel):
    text: str

# Response model (optional for clarity)
class EmotionResponse(BaseModel):
    emotion: str
    confidence: float

# Endpoint to handle emotion analysis
@app.post("/analyze", response_model=EmotionResponse)
async def analyze_emotion(input: TextInput):
    # Mock emotion analysis
    emotions = ["Happy", "Sad", "Anxious", "Angry", "Excited", "Nervous"]
    selected_emotion = random.choice(emotions)
    confidence = round(random.uniform(0.7, 0.99), 2)

    return {"emotion": selected_emotion, "confidence": confidence}

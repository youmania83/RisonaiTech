---
title: "Full-Duplex Voice AI Telephony: Sub-500ms Architecture"
description: "An engineering blueprint for full-duplex conversational voice AI: sub-500ms WebRTC/SIP streaming, turn-taking, barge-in detection, and multilingual call automation."
url: "https://risonaitech.com/blog/full-duplex-voice-ai-telephony-architecture"
last_updated: "2026-11-21"
---

## Full-Duplex Voice AI Telephony

Full-duplex voice AI telephony is an audio pipeline where both the human caller and the AI agent can transmit and receive voice simultaneously over bidirectional streaming protocols (WebRTC or SIP).

### Sub-500ms Streaming Audio Stack
- **Streaming STT**: Deepgram Nova-3 over WebSockets (~120ms latency).
- **Speculative LLM**: Claude 3.5 Haiku / GPT-4o-mini with token streaming (~180ms TTFT).
- **Streaming TTS**: Cartesia Sonic chunked raw audio streaming (~90ms TTFB).
- **Total Round-Trip**: 370ms – 490ms end-to-end conversation turn latency.

### Natural Barge-In & Interruption Handling
- **Acoustic Echo Cancellation (AEC)** prevents the agent from self-canceling.
- **Silero VAD** detects human speech energy on 20ms frames within 120ms.
- **Telephony Audio Queue Flusher** drops in-flight audio buffers within 40ms upon valid user interruption.

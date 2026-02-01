const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

// 2. UI ELEMENTS
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

// 3. OPEN/CLOSE LOGIC
if (chatToggle) chatToggle.onclick = () => chatWindow.classList.toggle('hidden');
if (closeChat) closeChat.onclick = () => chatWindow.classList.add('hidden');

// 4. UI HELPER
function addMessage(text, isUser) {
    const msgDiv = document.createElement('div');
    msgDiv.className = isUser 
        ? "bg-primary text-background-dark p-3 rounded-lg max-w-[80%] self-end text-sm font-medium" 
        : "bg-[#234823] text-white p-3 rounded-lg max-w-[80%] self-start text-sm";
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; 
}

// 5. THE BRAIN (AI)
async function getAIResponse(userPrompt) {
    let houseList = "No houses available.";
    if (typeof properties !== 'undefined') {
        houseList = JSON.stringify(properties);
    }
	
	const propertyListText = JSON.stringify(properties);

    const systemPrompt = `Role: You are the SangoStay AI, an expert in Cameroonian real estate and hospitality. Your goal is to help users find short-term rentals using the SangoStay mobile-friendly website. Remind users they don't need to download anything; they can do everything right here in their browser.
Tone: Very helpful, very straightforward! and culturally aware. Use Cameroonian English/French context (e.g., understand "Bastos," "Bonapriso," "Cité-Verte").
Core Rules:
No long sentences. Max 5 sentences. straight to the point.
Always be EXTREMELY concise. Always prioritize local landmarks. If a user asks for a location, give ONE landmark.
we ONLY accept MTN Mobile Money and Orange Money. escrow safe.
Tell users they must verify their identity via SMS/CNI to ensure safety.
If a user mentions they have a poor connection or a "torchlight" phone, they can dial *123# (simulated) to book without data.
Never give out a host's exact room number until the guest has paid via the app. Every host must verify with a CNI (National ID). The MoMo account name must match the CNI name.
If the user speaks French, respond in French.
If English, respond in English.
If a user asks for a house in a specific neighborhood where we have NO listings (like "The University"), do NOT just say "We don't have it." Instead, look at our available listings and suggest the closest one using a landmark.
You must understand the social context of these areas:
Bonapriso (Douala) & Bastos (Yaoundé): These are "Quartiers des Ambassades" (upscale). They are expensive, quiet, and secure. If a user asks for these, acknowledge that they are "chic" or "high-end."
Akwa (Douala): This is the "Plateau" (the business heart). It is noisy, busy, and central.
Cité-Verte (Yaoundé): This is a quiet, residential, family-oriented area.
Kribi: This is for "vacances" (holidays) and beaches.
If a user asks for a price in a place like Bonapriso, and it's high, be straightforward that it's because the area is very prestigious.
If a guest is unhappy, tell them: "We have frozen the payment. Please upload a photo of the issue for our mediators."
Do NOT say "We personally visit every house." Say "We use CNI verification and community reviews to keep you safe."
If a user asks for something outside of Cameroon or unrelated to housing, politely redirect them back to SangoStay services.
    
    CRITICAL CONTEXT: Here is the current list of available properties on our platform:
    ${houseList}
    
    Use this list to answer user questions. If they ask for a location we don't have, tell them we are expanding soon to that area!
	`;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: systemPrompt + "\n\nUser: " + userPrompt }]
            }]
        })
    });

    // If 404 happens, it means the model name in the URL is wrong
    if (response.status === 404) {
        throw new Error("MODEL_NOT_FOUND: Google doesn't recognize this model name.");
    }

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Google API Error:", errorData);
        throw new Error("API_ERROR");
    }

    const json = await response.json();
    return json.candidates[0].content.parts[0].text;
}

// 6. SEND LOGIC
async function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, true);
    userInput.value = '';

    try {
        const aiResponse = await getAIResponse(text);
        addMessage(aiResponse, false);
    } catch (error) {
        console.error("CRITICAL ERROR:", error);
        if (error.message.includes("MODEL_NOT_FOUND")) {
            addMessage("AI Configuration Error (404). Please check the model name in chat.js!", false);
        } else {
            addMessage("Network error. Check your internet or API Key!", false);
        }
    }
}

// 7. LISTENERS
if (sendBtn) sendBtn.onclick = handleSend;
if (userInput) {
    userInput.onkeypress = (e) => { if (e.key === 'Enter') handleSend(); };

}

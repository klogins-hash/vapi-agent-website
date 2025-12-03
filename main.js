/**
 * Vapi Configuration
 * Environment variables are loaded from .env file (via build process)
 * DO NOT hardcode API keys or sensitive data
 */

// Get configuration from environment or use fallback
const VAPI_PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY || 'VAPI_PUBLIC_KEY_HERE';
const ASSISTANT_ID = import.meta.env.VITE_ASSISTANT_ID || '5287ce68-f609-4105-bd2e-d7732062ef74';

// Validate configuration on page load
function validateConfiguration() {
    if (!VAPI_PUBLIC_KEY || VAPI_PUBLIC_KEY === 'VAPI_PUBLIC_KEY_HERE') {
        console.error('❌ Vapi configuration error: VITE_VAPI_PUBLIC_KEY is not set');
        document.body.innerHTML += '<div style="background: #fee; padding: 20px; margin: 20px; border: 1px solid #f00; border-radius: 8px;"><strong>⚠️ Configuration Error:</strong> Please add your Vapi Public Key to the .env file. See the README for instructions.</div>';
        return false;
    }
    return true;
}

// Initialize Vapi instance using official SDK pattern
let vapi = null;

function initializeVapi() {
    if (!validateConfiguration()) return;

    try {
        vapi = new Vapi({
            apiKey: VAPI_PUBLIC_KEY,
        });

        setupVapiListeners();
        console.log('✅ Vapi initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize Vapi:', error);
        alert('Failed to initialize AI assistant. Please check your configuration.');
    }
}

// Setup event listeners following Vapi official patterns
function setupVapiListeners() {
    // Call started
    vapi.on('call-start', () => {
        console.log('📞 Call started');
        const statusEl = document.querySelector('.cta-section p');
        if (statusEl) statusEl.style.color = '#22c55e';
    });

    // Call ended
    vapi.on('call-end', () => {
        console.log('📞 Call ended');
        const statusEl = document.querySelector('.cta-section p');
        if (statusEl) statusEl.style.color = '#666';
    });

    // Call failed
    vapi.on('error', (error) => {
        console.error('❌ Vapi error:', error);
        alert(`Error: ${error.message || 'An error occurred'}`);
    });

    // Message events (optional)
    vapi.on('message', (message) => {
        console.log('💬 Message:', message);
    });

    // Volume update events (optional)
    vapi.on('volume-level', (level) => {
        console.log('🔊 Volume level:', level);
    });
}

/**
 * Start a call using official Vapi SDK pattern
 * @async
 */
async function startVapiCall() {
    if (!vapi) {
        try {
            initializeVapi();
        } catch (error) {
            console.error('Failed to initialize Vapi:', error);
            return;
        }
    }

    try {
        console.log('Starting call with assistant:', ASSISTANT_ID);

        // Start call using official SDK pattern
        await vapi.start({
            assistantId: ASSISTANT_ID,
            // Optional: Add custom configuration
            variableValues: {
                // You can pass custom variables to your assistant here
            },
        });

        console.log('✅ Call started successfully');
    } catch (error) {
        console.error('❌ Error starting call:', error);
        alert(`Failed to start call: ${error.message || 'Unknown error'}`);
    }
}

/**
 * Stop the current call
 * Follows official Vapi SDK pattern
 */
async function stopVapiCall() {
    if (!vapi) return;

    try {
        await vapi.stop();
        console.log('✅ Call stopped');
    } catch (error) {
        console.error('❌ Error stopping call:', error);
    }
}

// Initialize Vapi when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Vapi Agent Website loaded');
    validateConfiguration();
    // Don't initialize Vapi until user clicks the button
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (vapi && typeof vapi.stop === 'function') {
        try {
            vapi.stop();
        } catch (e) {
            console.log('Vapi already stopped');
        }
    }
});

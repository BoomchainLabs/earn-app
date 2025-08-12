# BoomChainLabs Earn App

A blockchain-powered earn rewards platform featuring a pixel-art horizontal runner and a spin wheel game. Users connect their wallets using WalletConnect v2 (via Reown Project ID) on Base Mainnet, earn BOOM tokens, and claim rewards securely.

---

## Features

- WalletConnect v2 integration with Reown Project ID  
- Base Mainnet support via Alchemy RPC  
- ERC-20 token rewards on BOOM token contract (`0xcd96b6aded93fb64c295bdba10865765f5e7acbe`)  
- Spin Wheel and Horizontal Pixel Runner games for rewards  
- Real-time leaderboard pulling from Neon Postgres DB  
- Secure payout with signature verification  
- Sound effects with mute option  
- Backend powered by Flask and SQLAlchemy connected to Neon Postgres  
- Easy deployment with Docker and Expo EAS build  

---

## Getting Started

### Prerequisites

- Node.js >= 18  
- Python 3.8+  
- Docker & Docker Compose (optional, for backend)  
- Expo CLI (`npm install -g expo-cli`)  

### Installation

Clone the repo:

```bash
git clone https://github.com/BoomchainLabs/earn-app.git
cd earn-app


Backend Setup

Environment Variables

Create a .env file in the backend folder or use the provided .env.example and set:
BASE_RPC_URL=https://base-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
DATABASE_URL=postgres://username:password@host:port/dbname
REOWN_PROJECT_ID=your_reown_project_id
PRIVATE_KEY=your_wallet_private_key
REWARD_WALLET=your_reward_wallet_address
TOKEN_CONTRACT=0xcd96b6aded93fb64c295bdba10865765f5e7acbe
TEST_MODE=0


Note: Never commit .env with secrets to source control.

Running Backend Locally

Using Docker Compose:
cd backend
docker-compose up --build
cd backend
docker-compose up --build

Or directly with Python:
cd backend
pip install -r requirements.txt
flask run
cd backend
pip install -r requirements.txt
flask run


Frontend Setup
cd frontend
npm install
expo start

Scan the QR code with your mobile wallet app to connect.

⸻

Usage
	1.	Connect your wallet with WalletConnect (via Reown Project ID).
	2.	Play the Spin Wheel or Horizontal Runner to earn rewards.
	3.	Claim rewards through the “Claim Rewards” button.
	4.	View the leaderboard of top earners.

⸻

Deployment
	•	Backend: Deploy to any cloud or 0v.dev with environment variables set.
	•	Frontend: Build with Expo EAS and publish OTA updates.

See DEPLOYMENT.md for detailed instructions.

⸻

Contributing

Feel free to open issues or submit pull requests.

⸻

License

MIT License


Contact

BoomchainLabs Team — silvestremoney@boomchainlab.com

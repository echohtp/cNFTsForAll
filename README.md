# cNFTs for all

Welcome to "cNFTs for all"! This project is designed to automagically mint compressed NFTs using the Underdog Protocol and deposit them into a fresh Tiplink wallet. 

The mission is to make NFTs more accessible and meet users wherever they are.

## Features

- **Automagical Minting**: No manual intervention required. Just set it up and let the magic happen.
- **Compressed NFTs**: Using Underdog Protocol, we mint compressed NFTs
- **Tiplink Wallet Integration**: Newly minted NFTs are directly sent to a fresh Tiplink wallet, ensuring a seamless user experience.

## Prerequisites

- Node.js (v14+ recommended)
- Yarn or npm

## Setup

0. **Create Project with https://underdogprotocol.com/, get API key**

1. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/cNFTs-for-all.git
   cd cNFTs-for-all
   ```

2. **Install Dependencies**:
   If you're using npm:
   ```
   npm install
   ```
   If you're using Yarn:
   ```
   yarn
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory of the project. Use details from step 0.

   Example:
   ```
   NEXT_PUBLIC_UNDERDOG_API_KEY=
   NEXT_PUBLIC_UNDERDOG_ENDPOINT=
   NEXT_PUBLIC_UNDERDOG_PROJECT_ID=
   ```

4. **Run the Application**:
   If you're using npm:
   ```
   npm run dev
   ```
   If you're using Yarn:
   ```
   yarn dev
   ```

   This will start the Next.js development server, and the application will be accessible at `http://localhost:3000`.

## Contributing

We welcome contributions! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please fork the repository and submit a pull request.

## License

This project is licensed under the AGPL 2.0

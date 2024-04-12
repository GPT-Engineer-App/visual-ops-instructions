# visual-ops-instructions

Project Description:

Develop a Python-based web app to visualize system operation instructions from a JSON file onto an HMI picture. Users can upload both files.

Key Features:

File Upload: Allow users to upload JSON file and HMI picture.
JSON Parsing: Extract operation instructions including equipment modules, controllers, transitions, prompts, and messages.
Name Extraction: Extract valve and pump names, equipment modules, controllers, transitions, prompts, and messages from JSON and HMI picture.
Image Processing: Process HMI picture to overlay extracted information onto images.
Sequence Generation: Generate image sequence representing each operation step.
Visualization: Display images with operation instructions. Place controllers, transitions, prompts, and messages outside images.
User Interaction: Implement user-friendly features like step navigation.
Additional Considerations:

Ensure robustness against various JSON structures and HMI picture qualities.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/visual-ops-instructions.git
cd visual-ops-instructions
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

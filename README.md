# WhatsApp Inspired React Web Page

## Project Overview
This project is a WhatsApp-inspired web page created using React and Vite. The goal of the project is to recreate a modern messaging interface using reusable React components and responsive design principles.

## Features
- Sidebar navigation
- Chat list panel
- Active chat window
- Message bubbles
- Input bar for sending messages
- Responsive design for desktop, tablet, and mobile

## Component Structure
App
- Sidebar
- ChatList
  - ChatItem
- ChatWindow
  - MessageBubble
  - MessageInput

## Reusable Components
- ChatItem is reusable for each chat in the list
- MessageBubble is reusable for all sent and received messages

## Data Source
The chat data is stored in a separate file:
`src/data/chats.js`

## Technologies Used
- React.js
- Vite
- CSS

## Functionality
The application allows users to:
- View chat contacts
- Select a conversation
- Read messages
- Send a new message in the active chat

## Responsive Design
The layout adjusts for desktop, tablet, and mobile screen sizes using CSS media queries.

## How to Run
```bash
npm install
npm run dev
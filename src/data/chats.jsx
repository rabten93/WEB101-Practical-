export const chats = [
  {
    id: 1,
    name: "Sonam",
    avatar: "S",
    lastMessage: "Are you coming to class today?",
    time: "9:10 AM",
    status: "online",
    messages: [
      { id: 1, text: "Hey, good morning!", sent: false, time: "9:00 AM" },
      { id: 2, text: "Good morning 😄", sent: true, time: "9:01 AM" },
      { id: 3, text: "Are you coming to class today?", sent: false, time: "9:10 AM" }
    ]
  },
  {
    id: 2,
    name: "Karma",
    avatar: "K",
    lastMessage: "Please send the assignment file.",
    time: "Yesterday",
    status: "last seen today at 8:30 AM",
    messages: [
      { id: 1, text: "Can you help me with the practical?", sent: false, time: "8:00 AM" },
      { id: 2, text: "Yes, I will send it soon.", sent: true, time: "8:05 AM" },
      { id: 3, text: "Please send the assignment file.", sent: false, time: "8:20 AM" }
    ]
  },
  {
    id: 3,
    name: "Pema",
    avatar: "P",
    lastMessage: "Let’s meet after lunch.",
    time: "Monday",
    status: "online",
    messages: [
      { id: 1, text: "Are you free later?", sent: false, time: "12:10 PM" },
      { id: 2, text: "Yes, after lunch is fine.", sent: true, time: "12:11 PM" },
      { id: 3, text: "Let’s meet after lunch.", sent: false, time: "12:12 PM" }
    ]
  },
  {
    id: 4,
    name: "Class Group",
    avatar: "CG",
    lastMessage: "Reminder: project demo tomorrow.",
    time: "Sunday",
    status: "32 participants",
    messages: [
      { id: 1, text: "Reminder: project demo tomorrow.", sent: false, time: "7:00 PM" },
      { id: 2, text: "Thanks for the reminder!", sent: true, time: "7:05 PM" }
    ]
  }
]
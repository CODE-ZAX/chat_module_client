export const chat = {
  id: "1234", // a unique identifier for the chat
  name: "My Chat", // a name for the chat
  description: "A chat about topic X", // a description of the chat
  participants: [
    "asdasdasdasd","asdasdasvgfsgwefwf"
    // additional participants...
  ],
  messages: [
    {
      id: "m1", // a unique identifier for the message
      sender: ""
      content: "Hello world", // the content of the message
      timestamp: 1645170000000, // a Unix timestamp for when the message was sent (in milliseconds)
      replies: [
        {
          id: "m1.1", // a unique identifier for the reply
          sender: {
            id: "user2",
            name: "Jane Doe",
            avatar: "https://example.com/user2.jpg",
            isOnline: false,
          },
          content: "Hey John, how are you?",
          timestamp: 1645170200000,
        },
        // additional replies...
      ],
    },
    {
      id: "m2",
      sender: {
        id: "user2",
        name: "Jane Doe",
        avatar: "https://example.com/user2.jpg",
        isOnline: false,
      },
      content: "Hey there!",
      timestamp: 1645170100000,
      replies: [],
    },
    // additional messages...
  ],
  createdAt: 1645100000000, // a Unix timestamp for when the chat was created (in milliseconds)
  updatedAt: 1645200000000, // a Unix timestamp for when the chat was last updated (in milliseconds)
};

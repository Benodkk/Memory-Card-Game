const levelTypes = [
  {
    difficulty: {
      id: "easy",
      label: "Easy",
    },
    levels: [
      {
        level: 1,
        cards: 2,
      },
      {
        level: 2,
        cards: 2,
      },
      {
        level: 3,
        cards: 2,
      },
    ],
  },
  {
    difficulty: {
      label: "Medium",
      id: "medium",
    },
    levels: [
      {
        level: 1,
        cards: 6,
      },
      {
        level: 2,
        cards: 8,
      },
      {
        level: 3,
        cards: 10,
      },
    ],
  },
  {
    difficulty: {
      label: "Hard",
      id: "hard",
    },
    levels: [
      {
        level: 1,
        cards: 8,
      },
      {
        level: 2,
        cards: 10,
      },
      {
        level: 3,
        cards: 12,
      },
    ],
  },
];

export default levelTypes;

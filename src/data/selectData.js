export const addComponentSelect = [
  {
    selectHeader: "Zadanie",
    selectValue: "task",
  },
  {
    selectHeader: "Wydatek",
    selectValue: "expense",
  },
  {
    selectHeader: "Cel",
    selectValue: "goal",
  },
  {
    selectHeader: "Oszczędzanie",
    selectValue: "save-money",
  },
];

export const taskSelect = [
  {
    selectHeader: "Sortowanie po nazwie malejąco",
    selectValue: "name-down",
  },
  {
    selectHeader: "Sortowanie po nazwie rosnąco",
    selectValue: "name-up",
  },
  {
    selectHeader: "Sortowanie po dacie malejąco",
    selectValue: "date-down",
  },
  {
    selectHeader: "Sortowanie po dacie rosnąco",
    selectValue: "date-up",
  },
];

export const budgetSelect = [
  {
    selectHeader: "Sortowanie po koszcie malejąco",
    selectValue: "cost-down",
  },
  {
    selectHeader: "Sortowanie po koszcie rosnąco",
    selectValue: "cost-up",
  },
  {
    selectHeader: "Sortowanie po dacie malejąco",
    selectValue: "date-down",
  },
  {
    selectHeader: "Sortowanie po dacie rosnąco",
    selectValue: "date-up",
  },
];

export const goalActiveSelect = [
  {
    selectHeader: "Sortowanie po progresie malejąco",
    selectValue: "progress-down",
  },
  {
    selectHeader: "Sortowanie po progresie rosnąco",
    selectValue: "progress-up",
  },
  {
    selectHeader: "Sortowanie po dacie malejąco",
    selectValue: "date-down",
  },
  {
    selectHeader: "Sortowanie po dacie rosnąco",
    selectValue: "date-up",
  },
];

export const goalHistorySelect = [
  {
    selectHeader: "Sortowanie po dacie malejąco",
    selectValue: "date-down",
  },
  {
    selectHeader: "Sortowanie po dacie rosnąco",
    selectValue: "date-up",
  },
];

export const weekPlanSettings = () => {
  let hours = [];

  for (let i = 0; i < 23; i++) {
    hours.push({
      selectHeader: `${i}:00`,
      selectValue: `${i}:00`,
    });
  }
  return hours;
};

export const addWeekPlan = () => {
  let hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(
      {
        selectHeader: i + ":00",
        selectValue: i + ":00",
      },
      {
        selectHeader: i + ":15",
        selectValue: i + ":15",
      },
      {
        selectHeader: i + ":30",
        selectValue: i + ":30",
      },
      {
        selectHeader: i + ":45",
        selectValue: i + ":45",
      }
    );
  }
  return hours;
};

export const weekPlanDay = [
  {
    selectHeader: "Poniedziałek",
    selectValue: "1",
  },
  {
    selectHeader: "Wtorek",
    selectValue: "2",
  },
  {
    selectHeader: "Środa",
    selectValue: "3",
  },
  {
    selectHeader: "Czwartek",
    selectValue: "4",
  },
  {
    selectHeader: "Piątek",
    selectValue: "5",
  },
  {
    selectHeader: "Sobota",
    selectValue: "6",
  },
  {
    selectHeader: "Niedziela",
    selectValue: "7",
  },
]

export const budgetDay = () => {
  let day= []

  for(let i = 0; i <= 29; i++) {
    day.push({
      selectHeader: i.toString(),
      selectValue: i.toString(),
    })
  }

  return day
} 
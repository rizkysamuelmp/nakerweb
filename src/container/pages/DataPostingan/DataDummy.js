export const dataContent = [
  {
    no: 1,
    username: "@arif76440",
    post: "How Xiaowu woos a global audience and boosts revenue on Facebook",
    interaction: "Industri pakaian",
    feature: "Grup",
    date: "20 September 2022",
  },
  {
    no: 2,
    username: "@okisetiawan",
    post: "A multi-channel network and digital publisher, Xiaowu is headquartered in Hangzhou, China",
    interaction: "Tambang Nikkel",
    feature: "Medsos",
    date: "21 Oktober 2022",
  },
  {
    no: 3,
    username: "@adyt",
    post: "Since launching its first Facebook Page in 2019, Xiaowu has seen significant growth",
    interaction: "Pabrik Sepatu",
    feature: "Grup",
    date: "29 Agustus 2022",
  },
  {
    no: 3,
    username: "@kubu.id",
    post: "Expand its presence on Facebook to diversify its revenue streams and boost the company's ",
    interaction: "Pabrik Elektronik",
    feature: "Grup",
    date: "29 Agustus 2022",
  },
];

export const dataPost = [
  {
    title: "A multi-channel network and digital publisher,",
    name: "Muh. Arifandi",
    like: 250,
    comment: 250,
    share: 250,
  },
  {
    title: "A multi-channel network and digital publisher,",
    name: "Muh. Arifandi",
    like: 250,
    comment: 250,
    share: 250,
  },
  {
    title: "A multi-channel network and digital publisher,",
    name: "Muh. Arifandi",
    like: 250,
    comment: 250,
    share: 250,
  },
  {
    title: "A multi-channel network and digital publisher,",
    name: "Muh. Arifandi",
    like: 250,
    comment: 250,
    share: 250,
  },
  {
    title: "A multi-channel network and digital publisher,",
    name: "Muh. Arifandi",
    like: 250,
    comment: 250,
    share: 250,
  },
];

export const dataSet = [
  {
    label: "Pribadi",
    data: [
      82, 15, 34, 95, 28, 3, 48, 76, 65, 29, 50, 36, 7, 4, 67, 15, 83, 21, 94,
      70, 77, 57, 55, 22, 80, 5, 95, 32, 94, 39,
    ],
    borderColor: "#FC720E",
    backgroundColor: "#FC720E",
    tension: 0.3,
    pointStyle: "rectRounded",
  },
  {
    label: "Publik",
    data: [
      94, 100, 28, 42, 14, 49, 1, 95, 81, 63, 20, 28, 55, 73, 71, 58, 12, 44,
      66, 50, 68, 20, 93, 25, 30, 28, 74, 69, 93, 77,
    ],
    borderColor: "#FF4F79",
    backgroundColor: "#FF4F79",
    tension: 0.3,
    pointStyle: "rectRounded",
    borderDash: [4, 5],
  },
];

export const labels = [
  "1 Jul",
  "3 Jul",
  "5 Jul",
  "7 Jul",
  "9 Jul",
  "11 Jul",
  "14 Jul",
  "16 Jul",
  "18 Jul",
  "21 Jul",
];

export const chartLineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          size: 14,
        },
        usePointStyle: true,
      },
    },
    title: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 13,
        },
        autoSkip: true,
        maxTicksLimit: 4,
      },
      position: "right",
    },
    y: {
      position: "right",
    },
  },
};

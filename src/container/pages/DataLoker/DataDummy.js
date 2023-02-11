export const lokasiTrending = [
  {
    name: "Jakarta Utara",
    detail: "100 Loker",
  },
  {
    name: "Jakarta Selatan",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
  {
    name: "Jakarta",
    detail: "100 Loker",
  },
];

export const sektorTrending = [
  {
    name: "Industri Pertanian",
    detail: "100 Loker",
  },
  {
    name: "Industri Pertanian",
    detail: "100 Loker",
  },
  {
    name: "Industri Pertanian",
    detail: "100 Loker",
  },
  {
    name: "Industri Pertanian",
    detail: "100 Loker",
  },
  {
    name: "Industri Pertanian",
    detail: "100 Loker",
  },
  {
    name: "Industri Pertanian",
    detail: "100 Loker",
  },
];

export const lokerTranding = [
  {
    name: "Android developer",
    detail: "100 Pelamar",
  },
  {
    name: "Android developer",
    detail: "100 Pelamar",
  },
  {
    name: "Android developer",
    detail: "100 Pelamar",
  },
  {
    name: "Android developer",
    detail: "100 Pelamar",
  },
  {
    name: "Android developer",
    detail: "100 Pelamar",
  },
  {
    name: "Android developer",
    detail: "100 Pelamar",
  },
  {
    name: "Android developer",
    detail: "100 Pelamar",
  },
  {
    name: "Android developer",
    detail: "100 Pelamar",
  },
];

export const dataChart = [
  {
    data: [40, 25, 35],
    backgroundColor: ["#115ABE", "#FA3E3E", "#03B74B"],
    borderColor: ["#115ABE", "#FA3E3E", "#03B74B"],
    borderWidth: 1,
    label: [
      {
        title: "Diterima",
        color: "#115ABE",
      },
      {
        title: "Ditolak",
        color: "#FA3E3E",
      },
      {
        title: "Dilamar",
        color: "#03B74B",
      },
    ],
  },
];

export const dataHeader = [
  {
    title: "No",
    key: "loker_id",
    width: 30,
  },
  {
    title: "Posisi",
    key: "job_position",
  },
  {
    title: "Perusahaan",
    key: "name",
  },
  {
    title: "Lokasi",
    key: "city",
  },
  {
    title: "Tanggal Buka",
    key: "start_open",
  },
  {
    title: "Sektor",
    key: "name",
    render: (rowData) => <p>{rowData.level === "0" ? "Pria" : "Wanita"}</p>,
  },
  {
    title: "Kategori",
    key: "provinice",
  },
  {
    title: "Status",
    key: "status",
    width: 120,
    render: (rowData) => (
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {rowData.status === "Aktif" ? (
          <div
            style={{
              border: "1px solid #039C40",
              backgroundColor: "#AEF8AC",
              borderRadius: "30px",
              padding: "4px 20px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "16px",
              color: "#039C40",
            }}
          >
            {rowData.status}
          </div>
        ) : (
          <div
            style={{
              border: "1px solid #C80707",
              backgroundColor: "#F5969633",
              borderRadius: "30px",
              padding: "4px 20px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "16px",
              color: "#C80707",
            }}
          >
            {rowData.status}
          </div>
        )}
      </div>
    ),
    center: true,
  },
];

export const dataContent = [
  {
    no: 1,
    position: "Operator penjahit baju",
    company: "PT. MAJU MUNDUR JAYA",
    location: "Depok",
    openingDate: "20 September 2022",
    sector: "Industri pakaian",
    category: "Part Time",
    status: "Aktif",
  },
  {
    no: 2,
    position: "Supir 10 Roda",
    company: "PT. USAHA MAKMUR",
    location: "Jakarta Timur",
    openingDate: "21 Oktober 2022",
    sector: "Tambang Nikkel",
    category: "Full time",
    status: "Aktif",
  },
  {
    no: 3,
    position: "Supir Pribadi",
    company: "CV. ABADI JAYA PRATAMA",
    location: "Jakarta Barat",
    openingDate: "29 Agustus 2022",
    sector: "Pabrik Sepatu",
    category: "Freelancer",
    status: "Tidak Aktif",
  },
  {
    no: 3,
    position: "Operator Percetakan",
    company: "UD. USAHAWAN BUMI",
    location: "Jakarta Selatan",
    openingDate: "29 Agustus 2022",
    sector: "Pabrik Elektronik",
    category: "Full time",
    status: "Tidak Aktif",
  },
];

export const dataContentAll = [
  {
    no: 1,
    position: "Operator penjahit baju",
    company: "PT. MAJU MUNDUR JAYA",
    location: "Depok",
    openingDate: "20 September 2022",
    sector: "Industri pakaian",
    category: "Part Time",
    status: "Aktif",
  },
  {
    no: 2,
    position: "Supir 10 Roda",
    company: "PT. USAHA MAKMUR",
    location: "Jakarta Timur",
    openingDate: "21 Oktober 2022",
    sector: "Tambang Nikkel",
    category: "Full time",
    status: "Aktif",
  },
  {
    no: 3,
    position: "Supir Pribadi",
    company: "CV. ABADI JAYA PRATAMA",
    location: "Jakarta Barat",
    openingDate: "29 Agustus 2022",
    sector: "Pabrik Sepatu",
    category: "Freelancer",
    status: "Tidak Aktif",
  },
  {
    no: 3,
    position: "Operator Percetakan",
    company: "UD. USAHAWAN BUMI",
    location: "Jakarta Selatan",
    openingDate: "29 Agustus 2022",
    sector: "Pabrik Elektronik",
    category: "Full time",
    status: "Tidak Aktif",
  },
];

export const infoPerusahaan = {
  namaPerusahaan: "PT. Indo Syarikat pekerja",
  alamat:
    "Jl. Loker Desain RT001 RW001, Kel. Loker, Kec. Loker, Kab. Loker, Prov. Loker-Loker",
  telepon: "+621234567890",
  kategori: "Pabrik Pakaian",
  namaPic: "Muh. Arifandi",
  email: "loker@syarikat.com",
};

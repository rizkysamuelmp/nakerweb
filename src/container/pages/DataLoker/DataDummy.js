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

export const dataHeader = [
  {
    title: "No",
    key: "no",
    width: 30,
  },
  {
    title: "Posisi",
    key: "position",
  },
  {
    title: "Perusahaan",
    key: "company",
  },
  {
    title: "Lokasi",
    key: "location",
  },
  {
    title: "Tanggal Buka",
    key: "openingDate",
  },
  {
    title: "Sektor",
    key: "sector",
  },
  {
    title: "Kategori",
    key: "category",
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
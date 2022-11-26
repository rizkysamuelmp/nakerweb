import Button from "../../../components/Button";

// asset
import eye from "../../../assets/icon/Eye.svg";

export const dataHeader = [
  {
    title: "No",
    key: "no",
    width: 30,
    center: true,
  },
  {
    title: "Judul",
    key: "title",
  },
  {
    title: "Pengirim",
    key: "sender",
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
  {
    title: "Tgl kirim",
    key: "deliveryDate",
    center: true,
  },
  {
    title: "Balasan terakhir",
    key: "lastReply",
    center: true,
  },
  {
    title: "Prioritas",
    key: "priority",
    render: (rowData) => (
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {rowData.priority === "Hight" ? (
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
            {rowData.priority}
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
            {rowData.priority}
          </div>
        )}
      </div>
    ),
    center: true,
  },
  {
    title: "Aksi",
    key: "action",
    render: (rowData) => (
      <Button
        variant="contained"
        borderRadius="5px"
        padding="0px 7px 0px 9px"
        onClick={() => console.log("la")}
      >
        {rowData.action}
        <img src={eye} alt="eye" />
      </Button>
    ),
    center: true,
  },
];

export const dataContent = [
  {
    no: 1,
    title: "Android Engineer",
    sender: "@arifandi",
    status: "Aktif",
    deliveryDate: "07 Agu 2022",
    lastReply: "12 Agu 2022",
    priority: "Hight",
    action: "Detail",
  },
  {
    no: 2,
    title: "Android Engineer",
    sender: "@arifandi",
    status: "Aktif",
    deliveryDate: "07 Agu 2022",
    lastReply: "12 Agu 2022",
    priority: "Hight",
    action: "Detail",
  },
  {
    no: 3,
    title: "Android Engineer",
    sender: "@arifandi",
    status: "Tidak Aktif",
    deliveryDate: "07 Agu 2022",
    lastReply: "12 Agu 2022",
    priority: "Low",
    action: "Detail",
  },
  {
    no: 3,
    title: "Android Engineer",
    sender: "@arifandi",
    status: "Tidak Aktif",
    deliveryDate: "07 Agu 2022",
    lastReply: "12 Agu 2022",
    priority: "Hight",
    action: "Detail",
  },
];

export const message = [
  {
    img: "../../../assets/img/profile.svg",
    nickName: "Muh. Arifandi",
    message: "Selamat malam",
    time: "Hari ini pada 09:00 AM",
  },
  {
    img: "../../../assets/img/profile.svg",
    nickName: "Muh. Arifandi",
    message: "Selamat malam",
    time: "Hari ini pada 09:00 AM",
  },
  {
    img: "../../../assets/img/profile.svg",
    nickName: "Muh. Arifandi",
    message: "Selamat malam",
    time: "Hari ini pada 09:00 AM",
  },
];

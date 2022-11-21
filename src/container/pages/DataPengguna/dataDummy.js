import Button from "../../../components/Button";

// asset
import eye from "../../../assets/icon/Eye.svg";
import profile from "../../../assets/img/profile-post.png";

export const dataHeader = [
  {
    title: "No",
    key: "no",
    width: 30,
    center: true,
  },
  {
    title: "Profile",
    key: "profile",
    render: (rowData) => (
      <img
        src={profile}
        alt="profile"
        style={{
          width: "24px",
        }}
      />
    ),
    width: 40,
    center: true,
  },
  {
    title: "Nama Lengkap",
    key: "fullName",
  },
  {
    title: "Jenis Kelamin",
    key: "gender",
    center: true,
  },
  {
    title: "Kota",
    key: "city",
    center: true,
  },
  {
    title: "Telepon",
    key: "numberPhone",
    center: true,
  },
  {
    title: "Email",
    key: "email",
  },
  {
    title: "Sektor",
    key: "sector",
  },
  {
    title: "Usia",
    key: "age",
    width: 50,
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
    fullName: "All Fine Maulinaro",
    gender: "P",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 2,
    fullName: "All Fine Maulinaro",
    gender: "P",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 3,
    fullName: "All Fine Maulinaro",
    gender: "L",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 3,
    fullName: "All Fine Maulinaro",
    gender: "P",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 1,
    fullName: "All Fine Maulinaro",
    gender: "P",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 2,
    fullName: "All Fine Maulinaro",
    gender: "P",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 1,
    fullName: "All Fine Maulinaro",
    gender: "P",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 2,
    fullName: "All Fine Maulinaro",
    gender: "P",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 3,
    fullName: "All Fine Maulinaro",
    gender: "L",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
    action: "Detail",
  },
  {
    no: 3,
    fullName: "All Fine Maulinaro",
    gender: "P",
    city: "Yogyakarta",
    numberPhone: "+62-853-1654-7777",
    email: "maulinaro@yahoo.com",
    sector: "Pabrik Elektronik",
    age: "21 Thn",
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

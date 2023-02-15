// Page Semua Proyek
// --------------------------------------------------------

import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import { styled } from "@mui/material/styles";
import Table from "../../../components/Table";
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";
import InputAdornment from "@mui/material/InputAdornment";
import InputText from "../../../components/InputText";
import Colors from "../../../utils/helpers/colors";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DropDown from "../../../components/DropDown";

// Asset
import eye from "../../../assets/icon/Eye.svg";
import iconSlider from "../../../assets/icon/icon-slider.png";
import iconExport from "../../../assets/icon/icon-export.png";
import iconSearch from "../../../assets/icon/icon-search.png";
import iconXls from "../../../assets/icon/icon-xls.png";
import iconPdf from "../../../assets/icon/icon-pdf.png";

// Dummy Data
import { ReactComponent as IconGroup } from "../../../assets/icon/icon_group.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailDataProyek,
  getFilterDataProyek,
} from "../../../store/actions/dataPtoyek";

const SemuaProyek = ({ setActiveStep, setHistory }) => {
  const dataHeader = [
    {
      title: "No",
      key: "id_proyek",
      width: 20,
      center: true,
    },
    {
      title: "Profile",
      width: 50,
      center: true,
      render: (rowData) => (
        <img
          alt="profile-chat"
          src={rowData.cover}
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "24px",
          }}
        />
      ),
    },
    {
      title: "Nama Proyek",
      width: 250,
      key: "nama_proyek",
    },
    {
      title: "Jenis Proyek",
      key: "privacy",
      center: true,
      render: (rowData) => (
        <span>{rowData.privacy === "1" ? "Private" : "Public"}</span>
      ),
    },
    {
      title: "Pembuat Proyek",
      key: "full_name",
    },
    {
      title: "Member",
      width: 70,
      center: true,
      render: (rowData) => (
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          <IconGroup />
          <p>{rowData.total_member}</p>
        </div>
      ),
    },
    {
      title: "Tanggal Dibuat",
      key: "create_at",
      center: true,
      render: (rowData) => <p>{rowData.create_at.split(" ", 1)}</p>,
    },
    {
      title: "Status",
      width: 160,
      center: true,
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rowData.status === "Sudah Dikerjakan" ? (
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
          ) : rowData.status === "Sedang Berjalan" ? (
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
          ) : (
            <div
              style={{
                border: "1px solid #2C4AE9",
                backgroundColor: "#B5BEE94A",
                borderRadius: "30px",
                padding: "4px 20px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "16px",
                color: "#2C4AE9",
              }}
            >
              {rowData.status}
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Aksi",
      width: 100,
      render: (rowData) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            borderRadius="5px"
            padding="0px 7px 0px 9px"
            onClick={() => {
              setActiveStep("info");
              dispatch(getDetailDataProyek(rowData.id_proyek));
              setHistory("all");
            }}
          >
            Detail
            <img src={eye} alt="eye" />
          </Button>
        </div>
      ),
      center: true,
    },
  ];

  const [search, setSearch] = useState("");
  const [menuExport, setMenuExport] = useState(null);
  const [menuFilter, setMenuFilter] = useState(null);

  // state for filter
  const [gender, setGender] = useState([""]);
  const [kategori, setKategori] = useState([""]);
  const [isStatus, setIsStatus] = useState([""]);
  const [pages, setPages] = useState(1);

  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.dataProyek);

  useEffect(() => {
    dispatch(getFilterDataProyek(gender, kategori, isStatus, pages));
  }, [dispatch, gender, kategori, isStatus, pages]);

  return (
    <Container>
      {/* Title */}
      <Title title="Semua Grup" withBack onBack={() => setActiveStep("page")}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {/* Pencarian */}
          <InputText
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="pencarian"
            noPadding
            width="175px"
            borderRadius="5px"
            borderColor="#115AAA"
            iconAdornment={
              <InputAdornment
                position="start"
                className="inputAdorment"
                sx={{
                  zIndex: 200,
                  height: "40px",
                  justifyContent: "center",
                  width: "67px",
                  maxHeight: "56px",
                  borderRadius: "5px 0px 0px 5px",
                  backgroundColor: Colors.primary.hard,
                  ".MuiTypography-root": {
                    color: "white",
                    fontSize: "0.938rem",
                    fontWeight: "400",
                    lineHeight: "1.124rem",
                  },
                }}
              >
                <img
                  src={iconSearch}
                  alt="icon-search"
                  width={24}
                  height={24}
                />
              </InputAdornment>
            }
          />
          {/* Tombol Export */}
          <div
            style={{ display: "flex", gap: "2px" }}
            onClick={(event) => setMenuExport(event.currentTarget)}
          >
            <Button
              padding="8px"
              width="fit-content"
              borderRadius="5px 0px 0px 5px"
            >
              Export
            </Button>
            <Button
              padding="8px"
              width="fit-content"
              borderRadius="0px 5px 5px 0px"
            >
              <img src={iconExport} alt="icon-slider" width={24} height={24} />
            </Button>
          </div>
          {/* List Menu Exoprt */}
          <Menu
            id="menu-appbar"
            anchorEl={menuExport}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              top: "40px",
              left: "10px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "16px",
              color: "#000000",
              "& .MuiPaper-root": {
                borderRadius: "10px",
              },
              "& .MuiList-root": {
                padding: "0px",
              },
            }}
            open={Boolean(menuExport)}
            onClose={() => setMenuExport(null)}
          >
            <MenuItem
              onClick={() => setMenuExport(null)}
              sx={{ padding: "8px 12px 3px 12px" }}
            >
              <img src={iconXls} alt="icon-xls" width={24} height={24} />
              Export Excel
            </MenuItem>
            <div style={{ border: "1px solid #E5E5E5" }} />
            <MenuItem
              onClick={() => setMenuExport(null)}
              sx={{ padding: "3px 12px 8px 12px" }}
            >
              <img src={iconPdf} alt="icon-pdf" width={24} height={24} />
              Export Pdf
            </MenuItem>
          </Menu>
          {/* Tombol Filter */}
          <Button
            padding="8px"
            width="fit-content"
            onClick={(event) => {
              setMenuFilter(event.currentTarget);
            }}
          >
            <img src={iconSlider} alt="icon-slider" width={24} height={24} />
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={menuFilter}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              top: "40px",
              left: "10px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "18px",
              color: "#000000",
              "& .MuiPaper-root": {
                borderRadius: "10px",
              },
              "& .MuiList-root": {
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              },
            }}
            open={Boolean(menuFilter)}
            onClose={() => setMenuFilter(null)}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih jenis grup :</p>
              <DropDown
                dropdownValue={gender}
                handleChange={(e) => setGender([e.target.value])}
                listDropDown={[
                  {
                    label: "Publik",
                    value: 0,
                  },
                  { label: "Private", value: 1 },
                ]}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih Kategori grup :</p>
              <DropDown
                dropdownValue={kategori}
                handleChange={(e) => setKategori([e.target.value])}
                listDropDown={[
                  {
                    label: "Perusahaan",
                    value: 0,
                  },
                  { label: "Organisasi", value: 1 },
                  { label: "Komunitas", value: 2 },
                ]}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih status grup :</p>
              <DropDown
                dropdownValue={isStatus}
                handleChange={(e) => setIsStatus([e.target.value])}
                listDropDown={[
                  {
                    label: "Aktif",
                    value: 0,
                  },
                  { label: "Tidak Aktif", value: 1 },
                  { label: "Menunggu", value: 2 },
                ]}
              />
            </div>
          </Menu>
        </div>
      </Title>

      {/* Table */}
      <RowWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <Table headerContent={dataHeader} dataContent={allData} />
          <Pagination
            count={10}
            currentData={10}
            totalData={100}
            page={pages}
            onChange={(e, value) => {
              setPages(value);
            }}
          />
        </div>
      </RowWrapper>
    </Container>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const RowWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  width: "100%",
}));

export default SemuaProyek;

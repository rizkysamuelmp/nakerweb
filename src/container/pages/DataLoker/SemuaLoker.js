/* eslint-disable react-hooks/exhaustive-deps */
// Page Semua Loker
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

// Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getJobType,
  setPagination,
  setValueJobType,
  setValueSector,
  setValueStatus,
  getLokerFilter,
  setSearch,
  setActiveStep,
} from "../../../store/actions/dataLoker";

// Asset
import iconSlider from "../../../assets/icon/icon-slider.png";
import iconExport from "../../../assets/icon/icon-export.png";
import iconSearch from "../../../assets/icon/icon-search.png";
import iconXls from "../../../assets/icon/icon-xls.png";
import iconPdf from "../../../assets/icon/icon-pdf.png";
import iconPlus from "../../../assets/icon/icon-plus-white.svg";

const SemuaLoker = () => {
  const dispatch = useDispatch();

  const [menuExport, setMenuExport] = useState(null);
  const [menuFilter, setMenuFilter] = useState(null);
  const [dropDown, setDropDown] = useState();

  // Get data redux
  const {
    allLoker,
    headerTable,
    pagination,
    dropDownSector,
    valueSector,
    dropDownJobType,
    valueJobType,
    valueStatus,
    search,
  } = useSelector((state) => state.dataLoker, shallowEqual);

  // Render pertama untuk get data
  useEffect(() => {
    dispatch(getLokerFilter());
    dispatch(getJobType());
  }, []);

  // Fungsi get data pagination
  const onChangePagination = (_, nextPage) => {
    dispatch(setPagination({ ...pagination, page: nextPage }));
    dispatch(getLokerFilter());
  };

  return (
    <Container>
      {/* Title */}
      <Title
        title="Semua Loker"
        withBack
        onBack={() => dispatch(setActiveStep("page"))}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {/* Pencarian */}
          <InputText
            type="text"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="pencarian"
            noPadding
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                dispatch(setPagination({ ...pagination, page: 1 }));
                dispatch(getLokerFilter());
              }
            }}
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

          {/* Icon Plus */}
          <Button
            padding="12px"
            onClick={() => dispatch(setActiveStep("formulir"))}
          >
            <img alt="icon-plus" src={iconPlus} width={16} height={16} />
          </Button>

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
              <p>Pilih Kategori Loker :</p>
              <DropDown
                dropdownValue={valueJobType}
                listDropDown={dropDownJobType}
                placeHolder="Pilih Kategori Loker"
                handleChange={(e) => {
                  dispatch(setValueJobType([e.target.value]));
                  dispatch(setPagination({ ...pagination, page: 1 }));
                  dispatch(getLokerFilter());
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih lokasi Loker :</p>
              <DropDown
                dropdownValue={dropDown}
                listDropDown={[
                  {
                    label: "Solo",
                    value: 0,
                  },
                  {
                    label: "Yogyakarta",
                    value: 1,
                  },
                ]}
                placeHolder=""
                handleChange={(e) => setDropDown(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih Sektor Loker :</p>
              <DropDown
                dropdownValue={valueSector}
                listDropDown={dropDownSector}
                placeHolder="Pilih Sektor Loker"
                handleChange={(e) => {
                  dispatch(setValueSector([e.target.value]));
                  dispatch(setPagination({ ...pagination, page: 1 }));
                  dispatch(getLokerFilter());
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p>Pilih status Loker :</p>
              <DropDown
                dropdownValue={valueStatus}
                listDropDown={[
                  {
                    label: "Aktif",
                    value: 0,
                  },
                  {
                    label: "Tidak Aktif",
                    value: 1,
                  },
                ]}
                placeHolder="Pilih status Loker"
                handleChange={(e) => {
                  dispatch(setValueStatus([e.target.value]));
                  dispatch(setPagination({ ...pagination, page: 1 }));
                  dispatch(getLokerFilter());
                }}
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
          <Table headerContent={headerTable} dataContent={allLoker} />
          <Pagination
            count={pagination.count}
            currentData={pagination.currentData}
            totalData={pagination.totalData}
            page={pagination.page}
            onChange={onChangePagination}
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

export default SemuaLoker;

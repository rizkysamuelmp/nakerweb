import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  TextField,
} from "@mui/material";
import PageContainer from "../../../components/PageContainer";
import InputText from "../../../components/InputText";

// Assets
import profile from "../../../assets/img/profile.png";
import send from "../../../assets/icon/send.svg";
import iconSearch from "../../../assets/icon/icon-search.png";
import sortDown from "../../../assets/icon/sort-arrow-down.svg";

// Data Dummy
const dataDummy = [
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "read",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: false,
    time: "20:00",
    status: "unRead",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "read",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "unRead",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "read",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "unRead",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "read",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "read",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "unRead",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "unRead",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "unRead",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "read",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "unRead",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
    status: "unRead",
  },
];

const chatDummy = [
  {
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nulla, molestias, veniam voluptates dolorum atque reiciendis quae error officiis, est maxime suscipit beatae exercitationem deserunt temporibus odio? Adipisci, fuga a?",
    desc: "pengirim",
    time: "19:56 AM",
  },
  {
    message: "hello",
    desc: "penerima",
    time: "19:00",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nulla, molestias, veniam voluptates dolorum atque reiciendis quae error officiis, est maxime suscipit beatae exercitationem deserunt temporibus odio? Adipisci, fuga a?",
    desc: "penerima",
    time: "19:56 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nulla, molestias, veniam voluptates dolorum atque reiciendis quae error officiis, est maxime suscipit beatae exercitationem deserunt temporibus odio? Adipisci, fuga a?",
    desc: "pengirim",
    time: "19:56 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nulla, molestias, veniam voluptates dolorum atque reiciendis quae error officiis, est maxime suscipit beatae exercitationem deserunt temporibus odio? Adipisci, fuga a?",
    desc: "pengirim",
    time: "19:56 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nulla, molestias, veniam voluptates dolorum atque reiciendis quae error officiis, est maxime suscipit beatae exercitationem deserunt temporibus odio? Adipisci, fuga a?",
    desc: "pengirim",
    time: "19:56 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nulla, molestias, veniam voluptates dolorum atque reiciendis quae error officiis, est maxime suscipit beatae exercitationem deserunt temporibus odio? Adipisci, fuga a?",
    desc: "pengirim",
    time: "19:56 AM",
  },
];

const LiveChat = () => {
  const [inputChat, setInputChat] = useState("");
  const [searchName, setSearchName] = useState("");

  return (
    <PageContainer>
      <Container>
        <Left>
          <HeaderLeft>
            <HeaderText>Chats</HeaderText>
            <InputContainer>
              <InputText
                borderRadius="50px"
                borderColor="#fff"
                backgroundColor={"#D7EAFF"}
                height="38px"
                width="128px"
                placeholder="Search"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                iconAdornment={
                  <InputAdornment
                    position="start"
                    style={{
                      padding: "0 0 0 10px",
                    }}
                  >
                    <img src={iconSearch} alt="search" width="24px" />
                  </InputAdornment>
                }
              />
              <Filter>
                <img src={sortDown} alt="sort-down" />
              </Filter>
            </InputContainer>
          </HeaderLeft>
          <BodyLeft>
            <BodyWrapperLeft>
              {dataDummy.map((item, index) => (
                <ListCustom
                  aria-label="contacts"
                  disablePadding
                  key={index}
                  status={item.status}
                >
                  <ListItemButton
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <img src={item.profile} alt="profile" width="24px" />
                    <NameWrapper>
                      <Name>{item.nama}</Name>
                      <Desc>{item.typing ? "Sedang Mengetik" : ""}</Desc>
                    </NameWrapper>
                    <Time>{item.time}</Time>
                  </ListItemButton>
                </ListCustom>
              ))}
            </BodyWrapperLeft>
          </BodyLeft>
        </Left>
        <Right>
          <Header>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src={profile} alt="profile" />
              <NameWrapper gap="5px">
                <Name>Muh. Arifandi</Name>
                <DescOnline>Online</DescOnline>
              </NameWrapper>
            </div>
          </Header>
          <BodyContainer>
            <BodyRight>
              {chatDummy.map((item) =>
                item.desc === "pengirim" ? (
                  <div
                    style={{
                      padding: "5px",
                      position: "relative",
                    }}
                  >
                    <BubbleSender>
                      {item.message}
                      <TextTime>{item.time}</TextTime>
                    </BubbleSender>
                  </div>
                ) : (
                  <ReceiverWrapper>
                    <BubbleReceiver>
                      {item.message}
                      <TextTime>{item.time}</TextTime>
                    </BubbleReceiver>
                  </ReceiverWrapper>
                )
              )}
            </BodyRight>
            <InputMessage>
              <TextField
                multiline
                maxRows={6}
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
                style={{
                  width: "100%",
                }}
                inputProps={{
                  style: {},
                }}
                InputProps={{
                  endAdornment: (
                    <div
                      onClick={() => console.log("asd")}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img src={send} alt="" width="24px" />
                    </div>
                  ),
                }}
              />
            </InputMessage>
          </BodyContainer>
        </Right>
      </Container>
    </PageContainer>
  );
};

export default LiveChat;

const Container = styled("div")`
  display: flex;
  height: 80vh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Left = styled("div")`
  width: 26%;
  border-right: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const HeaderLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d7eaff;
  height: 13%;
  padding: 0 10px;
  border-radius: 10px 0 0 0;
`;

const Header = styled("div")`
  display: flex;
  align-items: center;
  height: 13%;
  justify-content: space-between;
  background-color: #d7eaff;
  padding: 0 10px;
  border-radius: 0 10px 0 0;
`;

const HeaderText = styled("p")`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: #0d1c2e;
`;

const InputContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Filter = styled(IconButton)`
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  cursor: pointer;
`;

const Right = styled("div")`
  width: 74%;
`;

const BodyLeft = styled("div")`
  height: 100%;
`;

const BodyWrapperLeft = styled("div")`
  display: flex;
  height: 87%;
  position: relative;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: scroll;
`;

const ListCustom = styled(List)`
  width: 100%;
  background-color: ${(props) => (props.status === "read" ? "" : "#d7eaff")};
`;

const NameWrapper = styled("div")`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

const Name = styled("p")`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;

const Desc = styled("span")`
  font-style: italic;
  font-weight: 200;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
`;

const DescOnline = styled("span")`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #03b74b;
`;

const Time = styled("span")`
  width: 15%;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #878686;
`;

const BodyContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 88%;
  padding-bottom: 10px;
`;

const BodyRight = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
  padding: 30px;
`;

const BubbleReceiver = styled("div")`
  position: relative;
  background: rgba(217, 217, 217, 0.4);
  width: fit-content;
  color: #000;
  padding: 6px 10px;
  border-radius: 5px 0 5px 5px;

  font-weight: 400;
  font-size: 15px;
  color: #000000;

  &::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    border-top: 8px solid rgba(217, 217, 217, 0.4);
    border-right: 12px solid transparent;
  }
`;

const ReceiverWrapper = styled("div")`
  padding: 5px;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const BubbleSender = styled("div")`
  position: relative;
  background: #c9d7e6;
  width: fit-content;
  color: #000;
  padding: 6px 10px;
  border-radius: 0 5px 5px 5px;

  font-weight: 400;
  font-size: 15px;
  color: #000000;

  &::before {
    content: "";
    position: absolute;
    right: 100%;
    top: 0;
    border-top: 8px solid #c9d7e6;
    border-left: 12px solid transparent;
  }
`;

const TextTime = styled("p")`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
`;

const InputMessage = styled("div")`
  padding: 0 10px;
`;

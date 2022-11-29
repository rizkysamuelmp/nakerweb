import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import PageContainer from "../../../components/PageContainer";

// Assets
import profile from "../../../assets/img/profile.png";
import send from "../../../assets/icon/send.svg";

// Data Dummy
const dataDummy = [
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: false,
    time: "20:00",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
  },
  {
    profile,
    nama: "Muh. Arifandi",
    typing: true,
    time: "20:00",
  },
];

const LiveChat = () => {
  const [inputChat, setInputChat] = useState("");

  return (
    <PageContainer>
      <Container>
        <Left>
          <HeaderLeft>
            <HeaderText>Chats</HeaderText>
            <InputContainer>
              <SearchInput>search</SearchInput>
              <Filter>Filter</Filter>
            </InputContainer>
          </HeaderLeft>
          <BodyLeft>
            {dataDummy.map((item) => (
              <BodyWrapperLeft>
                <img src={item.profile} alt="profile" width="10%" />
                <NameWrapper>
                  <Name>{item.nama}</Name>
                  <Desc>{item.typing ? "Sedang Mengetik" : ""}</Desc>
                </NameWrapper>
                <Time>{item.time}</Time>
              </BodyWrapperLeft>
            ))}
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
              <div
                style={{
                  padding: "5px",
                  position: "relative",
                }}
              >
                <BubbleSender>Hello</BubbleSender>
              </div>
              <div style={{ padding: "5px" }}>
                <BubbleSender>
                  <Message>Hello</Message>
                </BubbleSender>
              </div>
              <div style={{ padding: "5px", position: "relative" }}>
                <BubbleSender>Hello</BubbleSender>
              </div>
              <ReceiverWrapper>
                <BubbleReceiver>Hello</BubbleReceiver>
              </ReceiverWrapper>
              <div style={{ padding: "5px", position: "relative" }}>
                <BubbleSender>Hello</BubbleSender>
              </div>
            </BodyRight>
            <div
              style={{
                padding: "10px",
              }}
            >
              <TextField
                multiline
                maxRows={6}
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
                style={{
                  width: "100%",
                }}
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                height="45px"
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
            </div>
          </BodyContainer>
        </Right>
      </Container>
    </PageContainer>
  );
};

export default LiveChat;

const Container = styled("div")`
  display: flex;
  min-height: 80vh;
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
  height: 68px;
  padding: 0 10px;
  border-radius: 10px 0 0 0;
`;

const Header = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d7eaff;
  height: 68px;
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
`;

const SearchInput = styled("div")``;

const Filter = styled("div")``;

const Right = styled("div")`
  width: 74%;
`;

const BodyLeft = styled("div")``;

const BodyWrapperLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
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
`;

const BodyRight = styled("div")`
  padding: 30px;
`;

const BubbleReceiver = styled("div")`
  position: relative;
  background: #c9d7e6;
  width: fit-content;
  color: #000;
  padding: 6px 10px;
  border-radius: 5px 0 5px 5px;

  &::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    border-top: 8px solid #c9d7e6;
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

  &::before {
    content: "";
    position: absolute;
    right: 100%;
    top: 0;
    border-top: 8px solid #c9d7e6;
    border-left: 12px solid transparent;
  }
`;

const Message = styled("div")``;

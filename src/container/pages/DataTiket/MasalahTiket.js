import React from "react";
import { styled } from "@mui/material/styles";
import Title from "../../../components/Title";

// Data Dummy
import { message } from "./dataDummy";

// Assets
import ticket from "../../../assets/icon/Ticket.svg";
import profile from "../../../assets/img/profile-post.png";

// Style
const Container = styled("div")`
  height: 100%;
`;

const Wrapper = styled("div")`
  margin-top: 20px;
`;

const HeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: 23px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

const SectionLeft = styled("section")`
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

const SectionRight = styled("section")`
  padding: 10px;
  background: #aef8ac;
  border: 1px solid #04682c;
  border-radius: 20px;

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #04682c;
`;

const BodyWrapper = styled("div")`
  background: #f7f7f7;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  padding: 27px 26px;
  height: 80vh;
`;

const ChatContainer = styled("div")`
  height: 60%;
`;

const ChatWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 18px;
`;

const MessageWrapper = styled("div")``;

const NickName = styled("h2")`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #000;
`;

const Message = styled("span")`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #292929;
`;

const Time = styled("span")`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #aba7a7;
`;

const ReplayWrapper = styled("div")`
  height: 30%;
`;

const ReplyHeader = styled("div")`
  background: #fffcfc;
  padding: 11px 15px;
  border: 1px solid rgba(99, 97, 97, 0.2);
  border-radius: 10px 10px 0px 0px;
`;

const ReplyBody = styled("textarea")`
  height: 100%;
  width: 100%;
  resize: none;
  background: #efeded;
  padding: 16px 27px;
  border: 1px solid rgba(138, 136, 136, 0.3);
  border-radius: 0 0 10px 10px;
`;

const MasalahTiket = () => {
  return (
    <Container>
      {/* Tittle */}
      <Title title="Detail Tiket" />

      {/* Wrapper  */}
      <Wrapper>
        <HeaderWrapper>
          <SectionLeft>
            <img src={ticket} alt="" style={{ width: "30px" }} />
            <span>Masalah Login</span>
          </SectionLeft>
          <SectionRight>Dibalas</SectionRight>
        </HeaderWrapper>
        <BodyWrapper>
          <ChatContainer>
            {message.map((item) => (
              <ChatWrapper>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <img src={profile} alt="profile" width={"50px"} />
                  <MessageWrapper>
                    <NickName>{item.nickName}</NickName>
                    <Message>{item.message}</Message>
                  </MessageWrapper>
                </div>
                <Time>{item.time}</Time>
              </ChatWrapper>
            ))}
          </ChatContainer>
          <ReplayWrapper>
            <ReplyHeader> Replay Tiket</ReplyHeader>
            <ReplyBody placeholder="Balas komentar di sini....." />
          </ReplayWrapper>
        </BodyWrapper>
      </Wrapper>
    </Container>
  );
};

export default MasalahTiket;

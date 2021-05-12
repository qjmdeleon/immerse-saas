import React from "react"
import styled from "styled-components"
import t1 from "../images/t1.png"
import t2 from "../images/t2.png"
import t3 from "../images/t3.png"
import t4 from "../images/t4.png"
import t5 from "../images/t5.png"
import t6 from "../images/t6.png"
import twit from "../images/twit.png"

const TwitFeedMain = styled.section`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
  }
`

const TwitFeedContainer = styled.div`
  width: 75vw;
  display: flex;
  justify-content: center;
`

const TwitterCard = styled.li`
  padding: 12px;
  border-radius: 10px;
  margin-right: 1rem;
  width: 400px;
  height: auto;
  box-shadow: rgb(234 233 242) 0px 0px 0px 2px;

  p {
    font-family: "DM Sans", sans-serif;
    color: rgb(105, 104, 113);
    line-height: 1.7rem;
  }
`

const CardHeader = styled.div`
  display: flex;
  font-family: "DM Sans", sans-serif;
  justify-content: space-between;

  .image {
    display: flex;
    align-items: center;
  }

  img {
    width: 65px;
    height: 65px;
  }

  .twitter__logo {
    width: 35px;
    height: 35px;
    padding-top: 1rem;
    padding-right: 1rem;
  }

  .handle {
    margin-left: 0.98rem;

    h3 {
      margin-bottom: 0;
      margin-top: 10px;
    }

    p {
      margin-top: 0;
      color: rgb(105, 104, 113);
    }
  }
`

const TextHead = styled.div`
  display: flex;
`

const TwitFeed = () => {
  return (
    <TwitFeedMain>
      <TwitFeedContainer>
        <ul>
          <TwitterCard>
            <CardHeader>
              <TextHead>
                <div className="image">
                  <img src={t1} />
                </div>
                <div className="handle">
                  <h3>Nina Santos</h3>
                  <p>@ninyaaaa099</p>
                </div>
              </TextHead>
              <img src={twit} className="twitter__logo" />
            </CardHeader>
            <p>
              I used to procrastinate for a lot of time but immerse is really a
              game-changer!
            </p>
          </TwitterCard>
          <TwitterCard>
            <CardHeader>
              <TextHead>
                <div className="image">
                  <img src={t2} />
                </div>
                <div className="handle">
                  <h3>Marion Brooks</h3>
                  <p>@nmmbarookie33</p>
                </div>
              </TextHead>
              <img src={twit} className="twitter__logo" />
            </CardHeader>
            <p>
              I used to procrastinate for a lot of time but immerse is really a
              game-changer! I used to procrastinate for a lot of time but
              immerse is really a game-changer! I used to procrastinate for a
              lot of time but immerse is really a game-changer!
            </p>
          </TwitterCard>
          <TwitterCard>
            <CardHeader>
              <TextHead>
                <div className="image">
                  <img src={t3} />
                </div>
                <div className="handle">
                  <h3>Dianalane Carlson</h3>
                  <p>@dkhelters</p>
                </div>
              </TextHead>
              <img src={twit} className="twitter__logo" />
            </CardHeader>
            <p>
              I used to procrastinate for a lot of time but immerse is really a
              game-changer!
            </p>
          </TwitterCard>
        </ul>
      </TwitFeedContainer>
    </TwitFeedMain>
  )
}

export default TwitFeed

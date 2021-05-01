import { useState } from "react";
import "./styles.css";

export default function App() {
  const [showInput, setShowInput] = useState("hidden");
  const [inputData, setInputData] = useState("");
  const [userName, setUserName] = useState("");
  const [cmntData, setCmntData] = useState([
    {
      id: 1,
      userName: "Akhil",
      time: "11:44PM 30/04/2021",
      cmntText:
        "hello i want to share my exprence with yoou ,hello i want to share my exprence with yoou ,hello i want to share my exprence with yoou ,hello i want to share my exprence with yoou , ",
      replies: [
        {
          userNameReply: "Aditi",
          time: "11:47PM 30/04/2021",
          cmntTextReply: "ohhh thank you ,it will be helpfull for many animals"
        },
        {
          userNameReply: "Aditi",
          time: "11:47PM 30/04/2021",
          cmntTextReply: "ohhh thank you ,it will be helpfull for many animals"
        }
      ]
    }
  ]);

  const handleReplyBtn = () => {
    if (showInput === "hidden") {
      setShowInput("");
    } else {
      setShowInput("hidden");
    }
  };

  const handleSubmitInput = () => {
    // setCmntData(prv =>  );
  };

  return (
    <div className="App">
      <h1>Comments</h1>
      <div>Select User</div>
      <div className="displayComments">
        <div className="display-cmt-box-outer">
          {cmntData.length === 0
            ? null
            : cmntData.map((items) => {
                return (
                  <div className="display-cmt-box">
                    <div className="main-cmnt">
                      <div className="userDetails">
                        <h1>{items.userName}</h1>
                        <p>{items.time}</p>
                      </div>
                      <div className="cmnt-text">{items.cmntText}</div>
                    </div>
                    <div className="display-cmt-box-outer-bottom">
                      <p>Like</p>
                      <button className="like">+</button>
                      <p>
                        2<span>|</span>
                      </p>
                      <button onClick={handleReplyBtn}>reply</button>
                    </div>
                    <div className="cmnt-reply-text-outer">
                      {items.replies.length === 0
                        ? null
                        : items.replies.map((item) => {
                            return (
                              <div>
                                <div className="cmnt-reply-text">
                                  <div className="userDetails">
                                    <h1>{item.userNameReply}</h1>
                                    <p>{item.time}</p>
                                  </div>

                                  <div className="cmnt-text">
                                    {items.cmntText}
                                  </div>
                                </div>
                                <div className="display-cmt-reply-box-outer-bottom">
                                  <p>Like</p>
                                  <button className="like">+</button>
                                  <p>2</p>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                  </div>
                );
              })}
        </div>

        <div className="cmt-box-input" style={{ visibility: showInput }}>
          <textarea
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          ></textarea>
          <button className="addComntBtn" onClick={handleSubmitInput}>
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}

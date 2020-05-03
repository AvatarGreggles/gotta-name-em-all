import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export const Timer = ({
  expiryTimestamp,
  resetGame,
  endGame,
  gameState,
  pauseGame,
}) => {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      endGame();
    },
  });

  useEffect(() => {
    const logo = document.querySelector(".Logo");
    //const nameInput = document.querySelector(".NameInput");
    if (!isRunning) {
      logo.classList.remove("Spin");
      pauseGame();
    } else {
      logo.classList.add("Spin");
      pauseGame();
    }
  }, [isRunning]);

  return (
    <div className="Timer">
      <div className="Timer__Time">
        <span>{minutes}</span>:
        <span>
          {seconds < 10 ? 0 : null}
          {seconds}
        </span>
      </div>
      <div className="Timer__Controls">
        {gameState !== "End" ? (
          <React.Fragment>
            {isRunning ? (
              <React.Fragment>
                <button className="Btn-Active" onClick={pause}>
                  Pause
                </button>
                <button className="Btn-Disabled">Give Up!</button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <button className="Btn-Active" onClick={resume}>
                  Play
                </button>
                <button className="Btn-Active" onClick={endGame}>
                  Give Up!
                </button>
              </React.Fragment>
            )}
          </React.Fragment>
        ) : (
          <button
            className="Btn-Active"
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 3600);
              restart(time);
              resetGame();
            }}
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
};

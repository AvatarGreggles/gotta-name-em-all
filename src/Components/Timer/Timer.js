import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export const Timer = ({ expiryTimestamp, setStartGame, setGameOver }) => {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => setGameOver(true),
  });

  useEffect(() => {
    const logo = document.querySelector(".Logo");
    const nameInput = document.querySelector(".NameInput");
    if (!isRunning) {
      logo.classList.remove("Spin");
      nameInput.disabled = true;
    } else {
      logo.classList.add("Spin");
      nameInput.disabled = false;
    }
  });

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
        {isRunning ? (
          <button onClick={pause}>Pause</button>
        ) : (
          <button onClick={resume}>Play</button>
        )}
        <button
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 3600);
            restart(time);
            setStartGame(false);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

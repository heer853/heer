import { useEffect, useState } from "react";

export default function TimeLocation() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Australia/Brisbane",
        hour: "2-digit",
        minute: "2-digit",
      };
      setTime(new Intl.DateTimeFormat("en-AU", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-location">
      <div className="location">Brisbane, AUS</div>
      <div className="time">{time}</div>
    </div>
  );
}

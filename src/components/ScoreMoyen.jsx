import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ScoreMoyen = (data) => {
    const convertedScore = data.data * 100;
    const finalData = [
        {
          name: "score-passed",
          value: convertedScore,
          id: "rechartradial-bar__score",
        },
        {
          name: "score-reference",
          value: 100 - convertedScore,
          id: "rechartradial-bar__ref",
          fill: "transparent",
        },
      ];
  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={263} height={258}>
          <Pie
            data={finalData}
            startAngle={80}
            endAngle={450}
            innerRadius={78}
            outerRadius={90}
            cornerRadius={10}
            dataKey="value"
          >
            <Cell fill={"#e60000"} />
            <Cell fill={"transparent"} stroke={"transparent"} />
          </Pie>
        </PieChart>
        </ResponsiveContainer>
    </>
  );
};

export default ScoreMoyen;
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useEffect, useState } from "react";


const Statistics = () => {
    const [DonationData, setDonationData] = useState([]);
    const [TotalDonate, setTotalDonate] = useState([]);
    useEffect(() => {
      const myDonationItems = JSON.parse(localStorage.getItem("MyDonation")) || [];
      setDonationData (myDonationItems);
      console.log(DonationData, "for no reason"); 
      if (myDonationItems){
        const donateRatio = (myDonationItems.length / 12) * 100;
        const RemainingDonate = 100 - donateRatio;
  setTotalDonate (  [
    { name: 'Total Donation', value: RemainingDonate },
    { name: 'Your Donation', value: donateRatio  },
  ])
      }
    }, [DonationData]);
  
  
    const COLORS = ['#FF444A', '#00C49F', '#FFBB28', '#FF8042'];
  
    const RADIAN = Math.PI / 180;
  
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
     
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          fontSize='25px'
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };


    return (
        <div>
             <ResponsiveContainer width="100%" height={500}>
      <PieChart width={500} height={500}>
        <Pie
          data={TotalDonate}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={190}
          fill="#8884d8"
          dataKey="value"
        >
          {TotalDonate?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend  />
      </PieChart>
    </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
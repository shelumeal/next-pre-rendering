import React, { useState, useEffect } from "react";

function dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashbaord</h2>
      <h2>Posts : {dashboardData.posts}</h2>
      <h2>Likes : {dashboardData.likes}</h2>
      <h2>Followers : {dashboardData.followers}</h2>
      <h2>Following : {dashboardData.following}</h2>
    </div>
  );
}

export default dashboard;
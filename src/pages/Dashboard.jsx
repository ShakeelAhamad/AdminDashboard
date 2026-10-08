import React, { useEffect, useState } from 'react'
import { api } from '../services/api';
import { IndianRupee, ListOrdered, UserCheck, Users } from 'lucide-react';
import SuspenseLoader from '../components/SuspenseLoader';
import CardView from '../components/ui/CardView';

function Dashboard() {
  const [dashboardData, setDashboard] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const data = await api.getDashboard();
      setDashboard(data);
    } catch (error) {
      console.log("Dashboard loading filed:",error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  //Show Loading 
  if(loading && !dashboardData){
     return(
      <SuspenseLoader/>
     )
  }

  //Check dashboardData is null
  if(!dashboardData){
    return(
      <div className="p-6 bg-white rounded-xl border border-gray-200">
        <div>
          <p>Dashboard data not available</p>
        </div>
      </div>
    )
  }

  const statsItems = [
    {
      label : "Total Users",
      value : dashboardData.stats.totalUsers.toLocaleString(),
      icon  : Users
    },
    {
      label : "Active Users",
      value : dashboardData.stats.activeUsers.toLocaleString(),
      icon  : UserCheck
    },
    {
      label : "Total Orders",
      value : dashboardData.stats.totalOrders.toLocaleString(),
      icon  : ListOrdered
    },
    {
      label : "Total Revenue",
      value : `₹ ${dashboardData.stats.revenue.toLocaleString()}`,
      icon  : IndianRupee
    },
  ]

  return (
   <div>
       {/* card grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          statsItems.map((item,idx) => (
            <CardView
              key={idx}
              label={item.label}
              value={item.value}
              icon={<item.icon/>}
             />
          ))
        }
       </div>
       {/* Grid Layout */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* lift part */}
        <div className="col-span-2 h-70 bg-white border border-gray-200 rounded-xl mt-8 p-6">
          <p className="text-sm font-light uppercase">Revenue Overview</p>
        </div>
        {/* right part */}
        <div className="col-span-1 bg-white border border-gray-200 rounded-xl mt-8 p-6">
          <p className="text-sm font-light uppercase">Recent Orders</p>
          <div className="h-50 overflow-y-scroll">
            {
              dashboardData.recentOrders.map((order,idx) => (
                <div
                key={idx}
                className="flex items-center justify-between py-2 border-b border-gray-100 pr-2"
                >
                  <div className="">
                    <p className="text-sm font-light text-text-primary">{order.customer}</p>
                    <p className="text-xs font-light flex gap-2">
                      <span className="">
                        ₹{order.amount}
                      </span>
                      <span className="">
                        {order.date}
                      </span>
                    </p>
                  </div>
                  {/* Status block */}
                  <span className={`text-[10px] px-2 py-1 rounded-full bg-gray-100 ${
                    order.status ==='Completed'? "bg-green-100 text-green-500" 
                    :order.status === 'Pending' ? "bg-orange-100 text-orange-500" 
                    : order.status === 'Cancelled' ? "bg-rose-100 text-rose-500" : "bg-blue-100 text-blue-500" 
                    }`}>
                    {order.status}
                  </span>

                </div>
              ))
            }
          </div>
        </div>
       </div>
   </div>
  )
}

export default Dashboard
import React, { useState } from 'react'
import { useGetJobsQuery } from '../../components/services/jobApi';


const Company = () => {
    const { data: jobsList, isFetching } = useGetJobsQuery();
    const [ job, setJob ] = useState(jobsList);
     // const globalStats = data?.jobs;

    if(isFetching) return "Loading...";



    // console.log(jobsList);

    return (
        <div className="jobs">
          {job?.map((el) => (   
              <span className="jobs-company">{el.state}</span>
            ))}
            {/* <span className="jobs-company" value={globalStats.company_name}></span>
            <h2 className="jobs-title"></h2>
            <p className="jobs-location"></p> */}

        </div>
    )
}

export default Company

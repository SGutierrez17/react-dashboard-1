import React from 'react'

import { Card, CardContent} from "@mui/material";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import {longToShortDate} from "../utils/dates";

function normalizeData(data){ 
    console.log(data);

    return data.map((sale) => {
        const formattedDate = longToShortDate(sale.date)
        return {
        date: formattedDate,
        currentYear: sale.currentYear,
        lastYear: sale.lastYear
    }
    });
}

export default function Sales({data}) {
    const newData = normalizeData(data)

    return (
        <Card>
            <h4 style= {{marginLeft:'50px'}}>Latest Sales</h4>
            <CardContent >
                <BarChart
                    width={800}
                    height={300}
                    data={newData}
                    margin={{
                        top: 5,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="currentYear" fill="#3f51b5" barSize={12}/>
                    <Bar dataKey="lastYear" fill="#AFAFAF" barSize={12}/>
                </BarChart>
            </CardContent>
        </Card>
    );
}

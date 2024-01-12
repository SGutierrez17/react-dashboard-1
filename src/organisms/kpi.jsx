import React from 'react'

import {Paper, Box, Avatar} from "@mui/material";
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from "@mui/icons-material";
// TODO: Cambiar nombre de archivo igual al componente 
import ProgressBar from "../atoms/progressBar";

let kpiInfo

export default function KPI({data, icon, iconColor}) {
    const {title, amount, amountType, changeFromLastMonth, type} = data ?? {};

    const amountDecorator = (amount) => {
        //  Código para ver el valor de K o %
        const prefix = amountType === "thousands" ? "$" : ""
        const suffix = amountType === "thousands" ? "K" : "%"
        const formattedAmount = amountType === "thousands" ? amount /1000 : amount
        return `${prefix}${formattedAmount}${suffix}`;
    };

    let percentageLost

    if (changeFromLastMonth < 0 ) {
        percentageLost = "percentage-color"
    }

    const monthChange = changeFromLastMonth > 0 ? <ArrowUpwardOutlined sx={{color: "#14B8A7"}}/> : <ArrowDownwardOutlined sx={{color:"#CD4344"}}/>
    const monthChangeDisplay = changeFromLastMonth === null ? "" : monthChange;
    const percentageIcon = changeFromLastMonth !== null ? "%" : "";

    if (type === "change") {
            kpiInfo = "Since Last Month";
        } else if (type === "progress"){

            kpiInfo = <ProgressBar value={amount}/> ;
        } else {
            kpiInfo = " ";
    };

return (
    <Paper sx={{display:"flex", height: "200px", padding: "20px"}}>
        <Box sx={{width:"230px"}}>
        <h6 style= {{textTransform: "uppercase"}}>{title}</h6>
            <h1 style= {{}}>{amountDecorator(amount)}</h1>
        <p style= {{}}>
            <span className= {percentageLost}>{monthChangeDisplay} {changeFromLastMonth}{percentageIcon} </span> {kpiInfo}</p>
        </Box>
        <Box sx={{}}>
            <Avatar sx={{bgcolor:`${iconColor}`}} className="avatar-kpi">
                {icon}
            </Avatar>
        </Box>
    </Paper>
    );
}

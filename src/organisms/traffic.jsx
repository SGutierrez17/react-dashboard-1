import React from 'react'

import {Card, List, ListItem, ListItemIcon,} from "@mui/material";
import {PieChart, Pie, Cell, Legend} from "recharts";
import {ComputerOutlined, TabletMacOutlined, LocalPhone} from "@mui/icons-material";

const COLORS = ["#3F51B5", "#E53935", "#FB8C00"];

export default function Traffic({data}) {

    return (
        <Card>
        <h4 style= {{marginLeft:'20px'}}>Traffic by Device</h4>
        <PieChart width={300} height={158}>
            <Legend layout="horizontal" align="center" verticalAlign="top"/>
            <Pie
                data={data}
                cx={140}
                cy={65}
                innerRadius={20}
                outerRadius={60}
                fill="#8884D8"
                paddingAngle={5}
                dataKey="traffic"
                startAngle={90}
                endAngle={-360}
                nameKey="device"
            >
                {data.map((entry, index) => (
                <Cell key={Cell-`${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            </PieChart>
                    <List>
                        <ListItem >
                            <ListItemIcon>
                                <ComputerOutlined style= {{height:'20px', marginTop:'30px'}}/>
                            </ListItemIcon>
                            <ListItemIcon>
                                <TabletMacOutlined style= {{height:'20px',marginTop:'30px'}}/>
                            </ListItemIcon>
                            <ListItemIcon>
                                <LocalPhone style= {{height:'20px',marginTop:'30px'}}/>
                            </ListItemIcon>
                        </ListItem>
                    </List>
                    <table>
                        <tbody>
                            {data.map((data, index) => (
                            <th>
                                <tr>{data.device}</tr>
                                <tr><h3 style={{color:`${COLORS[index]}`}}>{data.traffic}%</h3></tr>
                            </th>
                            )
                            )
                            }
                        </tbody>
                    </table>
                </Card>
                );
                }

import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card } from 'antd';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {

    const [reveneuData, setReveneuData] = useState({
        labels: [],
        datasets: [],
    });


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Order Revenue",
            },
        },
    };


    useEffect(() => {
        fetch('http://dummyjson.com/carts')
            .then(res => res.json())
            .then((res) => {
                const labels = res.carts.map((cart) => {
                    return `User-${cart.userId}`;
                });
                const data = res.carts.map((cart) => {
                    return cart.discountedTotal;
                });

                const dataSource = {
                    labels,
                    datasets: [
                        {
                            label: "Revenue",
                            data: data,
                            backgroundColor: "rgba(255, 0, 0, 1)",
                        },
                    ],
                };

                setReveneuData(dataSource);
            });
    }, []);

    return (
        <>
            <Card style={{ width: 500, height: 250 }}>
                <Bar options={options} data={reveneuData} />
            </Card>
        </>
    )
}

export default BarChart



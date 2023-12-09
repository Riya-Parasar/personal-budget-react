import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function HomePage() {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Budget',
                backgroundColor: '#4CAF50',
                borderColor: '#689F38',
                borderWidth: 1,
                hoverBackgroundColor: '#81C784',
                hoverBorderColor: '#7CB342',
                data: [],
            },
        ],
    });

    useEffect(() => {
        axios.get('http://localhost:3000/budget-data.json')
            .then(response => {
                const data = response.data.myBudget;
                const labels = data.map(item => item.title);
                const budgets = data.map(item => item.budget);

                setChartData({
                    ...chartData,
                    labels: labels,
                    datasets: [
                        {
                            ...chartData.datasets[0],
                            data: budgets,
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [chartData]);
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }],
        },
    };

    return (
    <main className="center" id="main">



        <div className="page-area">


        <article>
                <h1>HOMEPAGE!!</h1>
                <h1>Welcome to Riya's Personal Budget App!</h1>
            </article>
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>

            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>

            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>

            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>



        </div>
    </main>
    );
}

export default HomePage;


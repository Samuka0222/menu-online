'use client'

import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const RevenueGraph = () => {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // TODO: Corrigir o gráfico e colocar informações corretas
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Vendas',
              data: data.map(row => row.count),
              borderColor: '#ffbf00',
              backgroundColor: '#ffbf00'
            }
          ]
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <canvas ref={canvasRef} />
  );
}

export default RevenueGraph;
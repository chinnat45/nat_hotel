<template>
  <div class="grid gap-6 grid-cols-1 lg:grid-cols-4">
    <!-- Cards -->
    <div class="col-span-1" v-for="card in cards" :key="card.title">
      <div class="rounded-2xl shadow-md p-4 bg-white flex items-center gap-4">
        <component :is="card.icon" class="w-10 h-10" />
        <div>
          <h2 class="text-xl font-bold">{{ card.value }}</h2>
          <p class="text-sm text-gray-500">{{ card.title }}</p>
        </div>
      </div>
    </div>

    <!-- Chart -->
    <div class="col-span-1 lg:col-span-4 rounded-2xl shadow-md p-6 bg-white">
      <h2 class="text-xl font-bold mb-4 sticky top-0 bg-white z-10">
        Weekly Bookings
      </h2>

      <!-- Chart container (scroll + fit bars) -->
      <div class="relative h-110 overflow-y-auto">
        <canvas id="bookingChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { BedDouble, Users, Calendar, DollarSign } from 'lucide-vue-next'

const cards = [
  { title: 'Available Rooms', value: 120, icon: BedDouble },
  { title: 'Occupancy Rate', value: '85%', icon: Users },
  { title: "Today\'s Bookings", value: 32, icon: Calendar },
  { title: 'Monthly Revenue', value: '$12,450', icon: DollarSign }
]

const chartData = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [
    {
      label: 'Bookings',
      data: [40,55,30,70,90,120,80],
      backgroundColor: 'rgba(59,130,246,0.8)',
      borderRadius: 1
    }
  ]
}

onMounted(() => {
  const ctx = document.getElementById('bookingChart')

  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,

        layout: {
          padding: 8
        },

        plugins: {
          legend: { display: false }
        },

        scales: {
          x: {
            grid: { display: false },
            barPercentage: 0.75,        // wider bars
            categoryPercentage: 0.85
          },
          y: {
            beginAtZero: true,
            grid: { drawBorder: false }
          }
        }
      }
    })
  }
})
</script>

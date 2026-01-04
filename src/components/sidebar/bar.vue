<template>
  <aside class="w-64 bg-white shadow-lg border-r h-screen p-6 flex flex-col">

    <!-- Logo -->
    <h1 class="text-2xl font-bold mb-8">
      Hotel <span class="text-blue-500">Admin</span>
    </h1>

    <!-- Navigation -->
    <nav class="space-y-1 flex-1">
      <router-link
        v-for="item in menu"
        :key="item.label"
        :to="item.to"
        class="flex items-center gap-3 p-3 rounded-xl transition-all"
        :class="isActive(item.to)
          ? 'bg-blue-100 text-blue-600 font-semibold'
          : 'text-gray-700 hover:bg-gray-100'
        "
      >
        <component :is="item.icon" class="w-5 h-5" />
        {{ item.label }}
      </router-link>
    </nav>

    <!-- Footer -->
    <div class="pt-4 border-t text-sm text-gray-500">
      © 2026 Hotel System
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from "vue-router"
import {
  Home,
  BedDouble,
  Calendar,
  Users,
  Settings
} from "lucide-vue-next"

const route = useRoute()

const isActive = (path) => route.path === path

const menu = [
  { label: "Dashboard", to: "/", icon: Home },
  { label: "Room Management", to: "/rooms", icon: BedDouble },
  { label: "Bookings", to: "/bookings", icon: Calendar },
  { label: "Customers", to: "/customers", icon: Users },
  { label: "Settings", to: "/settings", icon: Settings },
]
</script>

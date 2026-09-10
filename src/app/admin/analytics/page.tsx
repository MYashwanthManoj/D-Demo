import { BarChart3 } from "lucide-react"

export const metadata = {
  title: "Analytics — Admin | Career Cafe"
}

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Platform Analytics</h1>
          <p className="text-navy-500 mt-1">Detailed insights into user engagement and content performance.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-navy-50 text-navy-400 rounded-full flex items-center justify-center mb-4">
          <BarChart3 className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-semibold text-navy-900 mb-2">Analytics Dashboard Coming Soon</h2>
        <p className="text-navy-500 max-w-md">
          We are currently integrating with our analytics provider to bring you detailed charts, conversion funnels, and user retention metrics.
        </p>
      </div>
    </div>
  )
}
